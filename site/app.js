/* ============================================================
   The Constitution of India — bare act, explained
   Vanilla JS, hash-routed, no build step, works from file://
   ============================================================ */
(function () {
  'use strict';

  var COI       = window.COI || {};
  var SCHEDULES = window.COI_SCHEDULES || [];
  var AMENDS    = window.COI_AMENDMENTS || [];
  var AMETA     = window.COI_AMEND_META || {};
  var EXPLAIN   = window.COI_EXPLAIN || {};
  var MAPS      = window.COI_MAPS || {};
  var PAPERS    = window.COI_PAPERS || {};
  var PAPERS_URL = window.COI_PAPERS_INDEX || 'https://upsc.gov.in/';
  var CASES     = window.COI_CASES || {};
  var EXAM      = window.COI_EXAM || {};

  var ARTS = COI.articles || [];
  var BY_NUM = {};
  // the contents page spells four articles 243-I, 243-O, 243Z-I, 243Z-O and
  // 371-I; the body and everyone else drop the hyphen, so both keys resolve
  ARTS.forEach(function (a) {
    BY_NUM[a.num] = a;
    if (a.alias) BY_NUM[a.alias] = a;
  });
  var LIVE = ARTS.filter(function (a) { return !a.omitted; });

  var PARTS = COI.parts || [];
  var PART_BY = {};
  PARTS.forEach(function (p) { PART_BY[p.num] = p; });

  /* ---------- small helpers ---------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function el(html) {
    var d = document.createElement('div');
    d.innerHTML = html;
    return d.firstElementChild;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }

  // "⟦3⟧" is the footnote marker the parser left in the bare text
  function bareHTML(t, notes) {
    var out = esc(t);
    out = out.replace(/⟦(\d+)⟧/g, function (_, n) {
      var note = (notes || []).filter(function (x) { return String(x.n) === n; })[0];
      return '<sup title="' + esc(note ? note.text : 'see footnotes') + '">' + n + '</sup>';
    });
    return out.replace(/\*\*\*/g,
      '<span class="om" title="words omitted by amendment">***</span>');
  }

  function partLabel(num) {
    var p = PART_BY[num];
    return p ? 'Part ' + p.num + ' — ' + title(p.title) : 'Part ' + num;
  }
  // the source prints Part titles in full capitals; title case reads better
  var SMALL = /^(a|an|and|as|at|by|for|in|its|of|on|or|the|to|with|within)$/;
  var PREFIX = /^(co|re|pre|non|anti|ex|self|semi|sub|inter|multi|mid|un)$/;
  function title(s) {
    if (!s) return '';
    var parts = s.toLowerCase().split(/(\s+|-)/);
    return parts.map(function (w, i) {
      if (!w.trim() || w === '-') return w;
      // The half after a hyphen is capitalised in a compound name -
      // "Auditor-General", "Vice-President" - but not after a prefix, where
      // "Co-operative" is right and "Co-Operative" is not.
      if (parts[i - 1] === '-') return PREFIX.test(parts[i - 2] || '') ? w
        : w.charAt(0).toUpperCase() + w.slice(1);
      if (w.length === 1 && i > 0) return w.toUpperCase();   // "Part B"
      if (i > 0 && SMALL.test(w)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join('');
  }

  function artsOfPart(num) {
    return ARTS.filter(function (a) { return a.part === num; });
  }

  function explainOf(num) { return EXPLAIN[num] || null; }

  // distinct judgments, not entries: a few cases sit under two articles
  function caseCount() { return REG.length; }

  function go(hash) { location.hash = hash; }

  /* ---------- diagram rendering ---------- */

  var SVGNS = 'http://www.w3.org/2000/svg';

  var FS = 12.5;            // node text size, matching .node-txt
  var _mctx = null;

  // Real text metrics, not a characters-per-line guess. Counting characters
  // makes an "l" cost the same as a "W", which is what forced every label to be
  // truncated before it would fit.
  function textPx(s, bold) {
    if (!_mctx) _mctx = document.createElement('canvas').getContext('2d');
    _mctx.font = (bold ? '600 ' : '') + FS + 'px ' +
      (getComputedStyle(document.body).fontFamily || 'sans-serif');
    return _mctx.measureText(String(s)).width;
  }

  function wrapPx(text, maxPx, bold) {
    var words = String(text).replace(/\s+/g, ' ').trim().split(' ');
    var lines = [], cur = '';
    words.forEach(function (w) {
      var probe = cur ? cur + ' ' + w : w;
      if (cur && textPx(probe, bold) > maxPx) { lines.push(cur); cur = w; }
      else { cur = probe; }
    });
    if (cur) lines.push(cur);
    return lines.length ? lines : [''];
  }

  function svgTag(w, h) {
    // explicit pixel width, so a wide map scrolls inside .diagram rather than
    // squashing itself to the column width
    return '<svg xmlns="' + SVGNS + '" viewBox="0 0 ' + w + ' ' + h +
      '" width="' + w + '" height="' + h + '" role="img">';
  }

  // Box width that lets the longest label in a set breathe: one line each while
  // that stays narrow, otherwise wide enough for roughly two lines.
  function fitWidth(labels, bold, min, max, oneLineUpTo) {
    var longest = labels.reduce(function (m, l) {
      return Math.max(m, textPx(String(l).replace(/\n/g, ' '), bold));
    }, 0);
    var want = longest + 26 <= oneLineUpTo
      ? longest + 26
      : longest / 2 + 30;
    return Math.round(Math.max(min, Math.min(max, want)));
  }

  function boxLines(lines, x, y, w, h, bold) {
    var startY = y + h / 2 - ((lines.length - 1) * (FS + 2.5)) / 2 + FS / 3;
    return lines.map(function (ln, i) {
      return '<text class="node-txt" x="' + (x + w / 2) + '" y="' +
        (startY + i * (FS + 2.5)) + '" text-anchor="middle" style="font-size:' + FS +
        'px' + (bold ? ';font-weight:600' : '') + '">' + esc(ln) + '</text>';
    }).join('');
  }

  /* --- mind map: a tidy tree laid out left to right --- */

  function mindmap(root, hideRoot) {
    // Each column is sized to its own longest label, so a column of long
    // article headings gets the room it needs while a column of short ones
    // stays narrow. Nothing is truncated: a label simply takes more lines,
    // and the tidy-tree pass gives every subtree the height it asks for.
    var GAP = 28, VGAP = 10, PAD = 16, LINE = 15.5;

    var byDepth = [];
    (function collect(n, d) {
      n.depth = d;
      n.text = String(n.label == null ? '' : n.label).replace(/\n/g, ' ').trim();
      (byDepth[d] = byDepth[d] || []).push(n);
      (n.children || []).forEach(function (c) { collect(c, d + 1); });
    })(root, 0);

    var colW = byDepth.map(function (nodes, d) {
      if (d === 0 && hideRoot) return 0;
      return fitWidth(nodes.map(function (n) { return n.text; }), d < 2, 118, 320, 268);
    });
    var colX = [], run = PAD;
    colW.forEach(function (w, d) {
      colX.push(run);
      run += w + (d === 0 && hideRoot ? 0 : GAP);   // a hidden root takes no gap either
    });

    function measure(n) {
      var gone = hideRoot && n.depth === 0;
      n.lines = gone ? [] : wrapPx(n.text, colW[n.depth] - 22, n.depth < 2);
      n.bh = gone ? 0 : Math.max(30, Math.round(n.lines.length * LINE + 14));
      var kids = n.children || [];
      n.h = kids.length
        ? Math.max(n.bh + VGAP, kids.reduce(function (s, c) { return s + measure(c); }, 0))
        : n.bh + VGAP;
      return n.h;
    }
    measure(root);

    (function place(n, top) {
      n.x = colX[n.depth];
      n.y = top + n.h / 2;
      var y = top;
      (n.children || []).forEach(function (c) { place(c, y); y += c.h; });
    })(root, PAD);

    var W = Math.round(run - GAP + PAD);
    var H = Math.round(root.h + PAD * 2);
    var edges = '', boxes = '';
    var tone = ['var(--saffron)', 'var(--blue)', 'var(--green)', 'var(--amber)',
                'var(--accent)', 'var(--ink-soft)'];

    (function draw(n, colour) {
      var bw = colW[n.depth];
      var gone = hideRoot && n.depth === 0;
      (n.children || []).forEach(function (c, i) {
        var cc = n.depth === 0 ? tone[i % tone.length] : colour;
        if (!gone) {
          var x1 = n.x + bw, y1 = n.y, x2 = c.x, y2 = c.y, mx = (x1 + x2) / 2;
          edges += '<path class="edge" d="M' + x1 + ' ' + y1 + ' C' + mx + ' ' + y1 + ', ' +
            mx + ' ' + y2 + ', ' + x2 + ' ' + y2 + '" style="stroke:' + cc + ';opacity:.6"/>';
        }
        draw(c, cc);
      });
      if (gone) return;
      var y = n.y - n.bh / 2;
      var g = '<rect x="' + n.x + '" y="' + y + '" width="' + bw + '" height="' + n.bh +
        '" rx="8" class="node-box" style="stroke:' + colour + ';stroke-width:1.6"' +
        (n.depth === 0 ? ' fill="var(--accent-soft)"' : '') + '/>' +
        boxLines(n.lines, n.x, y, bw, n.bh, n.depth < 2);
      boxes += n.href
        ? '<g class="hot" onclick="location.hash=\'' + n.href + '\'">' + g + '</g>'
        : '<g>' + g + '</g>';
    })(root, 'var(--accent)');

    return svgTag(W, H) + edges + boxes + '</svg>';
  }

  /* --- flow chart: one node per row, jumps drawn down the right margin --- */

  function flowchart(spec) {
    var PAD = 18, GAPY = 28;
    var nodes = spec.nodes, order = {};
    nodes.forEach(function (n, i) { order[n.id] = i; });

    // the box is as wide as the longest step needs, within reason
    var BW = fitWidth(nodes.map(function (n) { return n.label; }), false, 340, 520, 400);
    var hasNote = nodes.some(function (n) { return n.note; });
    var X = hasNote ? 96 : 40;
    var lanes = (spec.edges || []).reduce(function (m, e) {
      return Math.max(m, (e.lane || 0) + 1);
    }, 0);

    var wrapped = nodes.map(function (n) { return wrapPx(n.label, BW - 26, false); });
    var heights = wrapped.map(function (ls) {
      return Math.max(46, Math.round(ls.length * 17 + 22));
    });
    var tops = [], run = PAD;
    heights.forEach(function (h) { tops.push(run); run += h + GAPY; });
    var H = Math.round(run - GAPY + PAD);
    var W = Math.round(X + BW + 30 + lanes * 26 + 90);

    var s = svgTag(W, H), edges = '', boxes = '';
    var tone = {
      start: 'var(--green)', end: 'var(--accent)',
      decision: 'var(--amber)', step: 'var(--blue)', note: 'var(--ink-faint)'
    };

    (spec.edges || []).forEach(function (e) {
      var a = order[e.from], b = order[e.to];
      if (a == null || b == null) return;
      var y1 = tops[a] + heights[a], y2 = tops[b];
      if (b === a + 1) {
        edges += '<path class="edge" d="M' + (X + BW / 2) + ' ' + y1 + ' L' +
          (X + BW / 2) + ' ' + y2 + '" marker-end="url(#ar)"/>';
        if (e.label) edges += '<text class="edge-lbl" x="' + (X + BW / 2 + 8) + '" y="' +
          ((y1 + y2) / 2 + 4) + '">' + esc(e.label) + '</text>';
      } else {
        var side = X + BW + 26 + (e.lane || 0) * 26;
        var ya = tops[a] + heights[a] / 2, yb = tops[b] + heights[b] / 2;
        edges += '<path class="edge" d="M' + (X + BW) + ' ' + ya + ' H' + side +
          ' V' + yb + ' H' + (X + BW + 6) + '" marker-end="url(#ar)" ' +
          'style="stroke-dasharray:4 3"/>';
        if (e.label) edges += '<text class="edge-lbl" x="' + (side + 6) + '" y="' +
          ((ya + yb) / 2) + '">' + esc(e.label) + '</text>';
      }
    });

    nodes.forEach(function (n, i) {
      var colour = tone[n.kind] || tone.step;
      var bold = n.kind === 'start' || n.kind === 'end';
      boxes += '<rect x="' + X + '" y="' + tops[i] + '" width="' + BW + '" height="' +
        heights[i] + '" rx="8" class="node-box" style="stroke:' + colour +
        ';stroke-width:1.8"/>' + boxLines(wrapped[i], X, tops[i], BW, heights[i], bold);
      if (n.note) {
        boxes += '<text class="node-sub" x="' + (X - 14) + '" y="' +
          (tops[i] + heights[i] / 2 + 4) + '" text-anchor="end">' + esc(n.note) + '</text>';
      }
    });

    var defs = '<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" ' +
      'markerWidth="6" markerHeight="6" orient="auto-start-reverse">' +
      '<path d="M0 0 L10 5 L0 10 z" fill="var(--ink-faint)"/></marker></defs>';
    return s + defs + edges + boxes + '</svg>';
  }

  // compact: the caller has already named this diagram in a heading directly
  // above it, so the mind map's root box would only repeat it.
  function diagrams(m, compact) {
    if (!m) return '';
    return (Array.isArray(m) ? m : [m]).map(function (spec) {
      return renderDiagram(spec, compact);
    }).join('');
  }

  function renderDiagram(spec, compact) {
    var body = spec.type === 'flow' ? flowchart(spec) : mindmap(spec.root, !!compact);
    return '<div class="diagram">' +
      (spec.title ? '<div class="dg-title">' + esc(spec.title) + '</div>' : '') +
      body +
      (spec.caption ? '<div class="dg-cap">' + esc(spec.caption) + '</div>' : '') +
      '</div>';
  }

  /* --- a mind map generated from the data for any Part --- */

  var PER_BUCKET = 10;      // articles shown under one heading before "+N more"
  var FLAT_MAX = 14;        // a Part with no sub-headings and no more than this
                            // many articles hangs them straight off the root

  function leafOf(a) {
    return { label: 'Art. ' + a.num + ' — ' + a.heading, href: '#/article/' + a.num };
  }

  function autoPartMap(partNum) {
    var list = artsOfPart(partNum).filter(function (a) { return !a.omitted; });
    if (!list.length) return null;
    var p = PART_BY[partNum];

    var buckets = [], seen = {};
    list.forEach(function (a) {
      var key = a.group || a.chapter || '';
      if (!seen[key]) { seen[key] = { label: key, items: [] }; buckets.push(seen[key]); }
      seen[key].items.push(a);
    });

    var children;
    if (buckets.length === 1 && !buckets[0].label) {
      // no chapters, no group headings — an "Articles" node in the middle would
      // carry no information, so skip it
      children = list.length <= FLAT_MAX
        ? list.map(leafOf)
        : chunk(list, 8).map(function (grp) {
            return {
              label: 'Art. ' + grp[0].num + '–' + grp[grp.length - 1].num,
              children: grp.map(leafOf)
            };
          });
    } else {
      children = buckets.map(function (b) {
        var kids = b.items.slice(0, PER_BUCKET).map(leafOf);
        if (b.items.length > PER_BUCKET) {
          kids.push({ label: '+ ' + (b.items.length - PER_BUCKET) + ' more in this group',
                      href: '#/part/' + partNum });
        }
        return { label: cleanChapter(b.label), children: kids };
      });
    }

    return {
      type: 'mind',
      title: 'Part ' + partNum + ' at a glance',
      caption: 'Click any box to open that article.',
      root: { label: 'Part ' + partNum + ' — ' + title(p ? p.title : ''), children: children }
    };
  }

  function chunk(arr, n) {
    var out = [];
    for (var i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
    return out;
  }
  function cleanChapter(s) {
    return String(s || 'Articles').replace(/^[IVXLC]+\.\s*/, '').replace(/\s+/g, ' ').trim();
  }
  function shortHeading(h) {
    h = String(h || '');
    return h.length > 44 ? h.slice(0, 42).replace(/[\s,]+\S*$/, '') + '…' : h;
  }

  /* ---------- sidebar ---------- */

  function buildSidebar() {
    // The site's sections live in the menu bar, so the sidebar keeps what the
    // menu bar has no room for: every Part, one line each.
    var s = '<div class="side-group"><div class="side-label">Parts</div>';
    PARTS.forEach(function (p) {
      var n = artsOfPart(p.num).length;
      s += '<a class="side-link" data-h="#/part/' + p.num + '" href="#/part/' + p.num + '">' +
        '<span class="rn">' + p.num + '</span>' +
        '<span>' + esc(title(p.title)) + '</span>' +
        '<span class="ct">' + n + '</span></a>';
    });
    s += '</div>';
    // About is not in the menu bar, so it stays - under the Parts, out of the way.
    s += '<div class="side-group">' + link('#/about', 'About & sources', '') + '</div>';
    $('#sidebar').innerHTML = s;
  }
  function link(href, label, count) {
    return '<a class="side-link" data-h="' + href + '" href="' + href + '"><span>' +
      esc(label) + '</span>' + (count ? '<span class="ct">' + count + '</span>' : '') + '</a>';
  }

  /* The rail follows the page. With every section on screen at once the rail
     is a table of contents, and a table of contents that does not say where
     you are is a list of links. One observer per render, replaced rather than
     stacked, because #main is rebuilt on every route. */
  var SPY = null, SPY_LOCK = 0;
  function markSection(i) {
    document.querySelectorAll('#main [data-goto]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-goto') === String(i));
    });
  }

  function partSpy(hash) {
    if (SPY) { SPY.disconnect(); SPY = null; }
    var secs = document.querySelectorAll('#main .part-sec[id^="sec-"]');
    if (!secs.length || !window.IntersectionObserver) return;

    SPY = new IntersectionObserver(function (entries) {
      // A click on the rail scrolls, and a smooth scroll crosses every section
      // between here and there. Without this the marker chases the scroll and
      // lands back on whatever the observer saw last, not on what was clicked.
      if (Date.now() < SPY_LOCK) return;
      entries.forEach(function (e) {
        if (e.isIntersecting) markSection(e.target.getAttribute('data-sec'));
      });
    }, { rootMargin: '-70px 0px -70% 0px', threshold: 0 });
    secs.forEach(function (sec) { SPY.observe(sec); });

    // A section in the address is a place to start reading, not a filter.
    var m = hash.match(/^#\/part\/[^\/]+\/(\d+)$/);
    if (m) {
      var target = document.getElementById('sec-' + m[1]);
      if (target) {
        SPY_LOCK = Date.now() + 400;
        markSection(m[1]);
        window.scrollTo(0, Math.max(0, target.getBoundingClientRect().top + window.scrollY - scrollPad()));
      }
    }
  }

  function markActive(hash) {
    var best = null;
    // An article now reads inside its Part's shell, so the Part it belongs to
    // is the right thing to light up in the sidebar while you are in it.
    var art = hash.match(/^#\/article\/([^\/]+)/);
    if (art) {
      var a = BY_NUM[decodeURIComponent(art[1])];
      if (a) hash = '#/part/' + a.part;
    }
    document.querySelectorAll('.side-link').forEach(function (a) {
      a.classList.remove('on');
      var h = a.getAttribute('data-h');
      if (hash === h || (h !== '#/' && hash.indexOf(h) === 0)) {
        if (!best || h.length > best.getAttribute('data-h').length) best = a;
      }
    });
    if (best) best.classList.add('on');
  }

  /* ---------- peek: read a referenced article or amendment in place ---------- */

  var AMD_BY_NUM = {};
  AMENDS.forEach(function (m) { AMD_BY_NUM[m.num] = m; });

  // "Forty-Second (1976)" -> 42, so a footnote label can find its amendment
  var AMD_WORDS = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5, sixth: 6, seventh: 7,
    eighth: 8, ninth: 9, tenth: 10, eleventh: 11, twelfth: 12, thirteenth: 13, fourteenth: 14,
    fifteenth: 15, sixteenth: 16, seventeenth: 17, eighteenth: 18, nineteenth: 19, twentieth: 20,
    thirtieth: 30, fortieth: 40, fiftieth: 50, sixtieth: 60, seventieth: 70, eightieth: 80,
    ninetieth: 90, hundredth: 100, hundred: 100, twenty: 20, thirty: 30, forty: 40, fifty: 50,
    sixty: 60, seventy: 70, eighty: 80, ninety: 90, one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
  function amendNumber(label) {
    var words = String(label).replace(/\s*\(\d{4}\)\s*$/, '');
    var toks = words.toLowerCase().split(/[\s\-]+/).filter(function (t) { return t && t !== 'and'; });
    var total = 0, hundreds = 0;
    for (var i = 0; i < toks.length; i++) {
      var v = AMD_WORDS[toks[i]];
      if (v === undefined) return null;
      if (v === 100) { hundreds = Math.max(total, 1) * 100; total = 0; }
      else total += v;
    }
    var n = hundreds + total;
    return n && AMD_BY_NUM[n] ? n : null;
  }

  // A reference should be readable without losing your place. This renders
  // enough to answer "what does that one say?" and links on for the rest.
  function peekHTML(spec) {
    var kind = spec.split(':')[0], id = spec.slice(kind.length + 1);

    if (kind === 'art') {
      var a = BY_NUM[id];
      if (!a) return '';
      var ex = explainOf(a.num);
      var head = '<div class="peek-head"><span class="peek-rn">Article ' + esc(a.num) + '</span>' +
        '<b>' + esc(a.heading) + '</b>' +
        '<span class="peek-where">' + esc(partLabel(a.part)) +
        (a.group ? ' &middot; ' + esc(a.group) : '') + '</span></div>';
      var body = '';
      if (ex) body += '<div class="peek-says"><h5>What it says</h5><p>' + para(ex.simple) + '</p></div>';
      // the opening of the provision itself, enough to recognise it
      var paras = a.paras.slice(0, 2).map(function (p) {
        return '<p>' + bareHTML(p.t, a.notes) + '</p>';
      }).join('');
      body += '<div class="peek-bare"><h5>Bare text' +
        (a.paras.length > 2 ? ' &mdash; opening' : '') + '</h5>' + paras + '</div>';
      return head + body +
        '<div class="peek-foot"><a class="chip" href="#/article/' + esc(a.num) + '">' +
        'Open Article ' + esc(a.num) + ' &rarr;</a></div>';
    }

    if (kind === 'amd') {
      var m = AMD_BY_NUM[+id];
      if (!m) return '';
      var meta = AMETA[id] || {};
      var h = '<div class="peek-head"><span class="peek-rn">' + ordinal(m.num) + ' Amendment</span>' +
        '<b>' + esc(meta.short || ('Amendment of ' + (m.year || ''))) + '</b>' +
        '<span class="peek-where">' + esc(m.year || '') + '</span></div>';
      var b = '';
      if (meta.what) b += '<div class="peek-says"><h5>What it did</h5><p>' + para(meta.what) + '</p></div>';
      b += '<div class="peek-bare"><h5>Commencement</h5><p>' + commencement(m) + '</p></div>';
      var touched = (m.articles || []).slice(0, 10).join(', ') +
        ((m.articles || []).length > 10 ? ', and others' : '');
      if (touched) b += '<div class="peek-bare"><h5>Articles it touched</h5><p>' + esc(touched) + '</p></div>';
      return h + b + '<div class="peek-foot"><a class="chip" href="#/amendments">' +
        'All amendments &rarr;</a></div>';
    }
    return '';
  }

  // one open panel at a time, inserted after the row the chip sits in
  function togglePeek(btn) {
    var spec = btn.getAttribute('data-peek');
    var row = btn.closest('.chiprow') || btn.parentNode;
    var open = row.nextElementSibling;
    var already = open && open.classList && open.classList.contains('peek-panel');
    var same = already && open.getAttribute('data-for') === spec;

    document.querySelectorAll('.peek-panel').forEach(function (el) { el.remove(); });
    document.querySelectorAll('.chip.peek.on').forEach(function (el) { el.classList.remove('on'); });
    if (same) return;

    var html = peekHTML(spec);
    if (!html) return;
    var panel = document.createElement('div');
    panel.className = 'peek-panel';
    panel.setAttribute('data-for', spec);
    panel.innerHTML = '<button class="peek-x" type="button" data-peek-close="1" ' +
      'aria-label="Close">&times;</button>' + html;
    row.parentNode.insertBefore(panel, row.nextSibling);
    btn.classList.add('on');
  }

  /* ---------- when an amendment came into force ---------- */

  // The footnotes give a commencement date per provision, not per Act, so a
  // large amendment leaves several. Say "in force from" only where exactly one
  // was traced; otherwise say it commenced in stages rather than pick one and
  // present it as the date. Getting this wrong once dated the 100th Amendment
  // (2015) to 1960.
  function commencement(m) {
    if (m.pending)
      return '<span class="pill amber">Passed, not yet in force</span>' +
        '<span class="wef-note">The official footnotes say the date is yet to be notified.</span>';
    var w = m.wef || [];
    if (w.length === 1) {
      var back = parseInt(w[0].split('-').pop(), 10) < parseInt(m.year, 10);
      return '<span class="pill grey">In force from ' + esc(w[0]) + '</span>' +
        (back ? '<span class="wef-note">Given effect from before the Act was passed.</span>' : '');
    }
    if (w.length > 1)
      return '<span class="pill grey">Commenced in stages</span>' +
        '<span class="wef-note">Different provisions came into force on different dates. ' +
        'The footnote on each article below gives the date for that provision.</span>';
    return '<span class="wef-note">No commencement date is recorded in the footnotes traced here.</span>';
  }

  /* ---------- about, sources, and the standing disclaimer ---------- */

  // Sits under every page. The source acknowledgement is here because the
  // Government of India's reproduction terms ask for it prominently, and the
  // unaffiliated line is here because the site names public examinations.
  function siteFooter() {
    var src = COI.source || {};
    return '<footer class="sitefoot">' +
      '<p><strong>Not an official publication.</strong> This site is not produced by, ' +
      'endorsed by or affiliated with the Union Public Service Commission, any State ' +
      'Public Service Commission, or any government body. It is a personal study aid. ' +
      'Nothing here is legal advice.</p>' +
      '<p>Bare text reproduced from <em>' + esc(src.title || '') + ', ' +
      esc(src.edition || '') + '</em>, ' + esc(src.publisher || '') + '. ' +
      '<a href="' + esc(src.url || '#') + '" target="_blank" rel="noopener">Official PDF &rarr;</a>' +
      ' &middot; <a href="#/about">About, sources and licence</a></p>' +
      '</footer>';
  }

  function pageAbout() {
    var src = COI.source || {};
    var explained = ARTS.filter(function (a) { return EXPLAIN[a.num]; }).length;
    var concepts = Object.keys(EXAM).reduce(function (n, k) {
      return n + ((EXAM[k].concepts || []).length);
    }, 0);

    var s = '<div class="page-head"><div class="eyebrow">About</div>' +
      '<h1>What this is, and how far to trust it</h1>' +
      '<p class="lede">A local, offline copy of the Constitution of India with the bare ' +
      'text reproduced as printed, and a plain-language reading written underneath it. ' +
      'This page says where the text came from, what has been checked, what has not, and ' +
      'who is responsible for the difference.</p></div>';

    /* ---- the disclaimer, first and unhedged ---- */
    s += '<div class="panel catch"><h4>&#9888; What this is not</h4>' +
      '<p>It is <strong>not an official publication</strong>. It is not produced by, ' +
      'endorsed by or affiliated with the Union Public Service Commission, the Uttar ' +
      'Pradesh Public Service Commission, any other State Public Service Commission, the ' +
      'Legislative Department, or any government body. Where those bodies are named on ' +
      'this site, it is to describe which examination asks about a provision — nothing ' +
      'more.</p>' +
      '<p>It is <strong>not legal advice</strong>, and it is not a substitute for the ' +
      'official text or for a lawyer. The explanations are commentary. The judgment ' +
      'summaries are paraphrases, not quotations, and they compress reasoning that runs ' +
      'to hundreds of pages. If something here matters to a decision you are making, ' +
      'read the source.</p></div>';

    /* ---- confidence key ---- */
    s += tag('How much to trust each part');
    s += '<p class="lede sm">Two kinds of writing sit on this site and they are not ' +
      'worth the same. You can tell them apart by how they are set.</p>';
    s += '<div class="conf-key">' +
      '<div class="conf-row"><span class="conf src">the bare text</span>' +
      '<p>Set in serif, unboxed, and reproduced exactly as printed — footnote markers ' +
      'and all. Every article, the Schedules and the amendment footnotes come straight ' +
      'from the official PDF and are machine-checked against it. This is the strongest ' +
      'material here; the verification figures are below.</p></div>' +
      '<div class="conf-row"><span class="conf own">everything in a panel</span>' +
      '<p>Commentary, written for this site: the plain-language readings, the catch, ' +
      'the landmark-judgment summaries, the exam notes and the diagrams. Checked, but ' +
      'written by hand and therefore capable of being wrong in a way the bare text is ' +
      'not. When it matters, read the bare text and the source.</p></div>' +
      '</div>';

    /* ---- the source ---- */
    s += tag('Where the text comes from');
    s += '<div class="card"><h3>' + esc(src.title || '') + '</h3>' +
      '<p>' + esc(src.edition || '') + ' — ' + esc(src.publisher || '') + '.<br>' +
      'Updated to ' + esc(src.updatedTo || '') + '.</p>' +
      '<p>' + esc(src.currency || '') + '</p>' +
      '<p><a href="' + esc(src.url || '#') + '" target="_blank" rel="noopener">' +
      'Official PDF at legislative.gov.in &rarr;</a></p></div>';
    s += '<p>The bare text is reproduced exactly as printed, footnote markers and all. ' +
      'A superscript number is the official footnote recording which Amendment Act ' +
      'inserted or substituted that passage; <span class="om">***</span> marks words ' +
      'omitted by amendment, as the official text prints them. Nothing in the bare text ' +
      'has been paraphrased, modernised or tidied.</p>';

    /* ---- verification ---- */
    s += tag('What has been checked');
    s += '<div class="grid two">' +
      '<div class="card"><h3>The extraction</h3>' +
      '<p>A build script slices the articles out of the PDF text, and a separate script ' +
      'checks the result against the source. It currently reports:</p>' +
      '<ul class="tick"><li><b>99.1%</b> of body characters accounted for</li>' +
      '<li><b>60 of 60</b> sampled articles matched the source verbatim</li>' +
      '<li><b>0</b> articles carrying the next article\'s heading</li></ul>' +
      '<p class="sm">The 0.9% not accounted for is Part and Chapter banners and the group ' +
      'sub-headings, which are held as structure and shown in the breadcrumb.</p>' +
      '<p><b>7 corrections</b> were made to the parsers themselves — commencement dates ' +
      'read from the wrong footnote, headings paired with the wrong article, a footnote ' +
      'silently dropped, chapter titles cut off mid-word.</p></div>' +
      '<div class="card"><h3>The commentary</h3>' +
      '<p>Every judgment summary, exam entry and concept explanation has been read line ' +
      'by line and audited, with eight mechanical cross-checks run against the verified ' +
      'text — article references, amendment years, quotations, stated counts, and ' +
      'internal consistency.</p>' +
      '<p><b>48 corrections</b> were made, including four invented details, six wrong ' +
      'dates and five misquotations. The full record, with sources, is in ' +
      '<code>build/FACTCHECK.md</code>.</p></div></div>';
    s += '<div class="panel note"><h4>&#9432; What that audit does not establish</h4>' +
      '<p>Everything checkable has been checked, but &ldquo;no errors&rdquo; is not a ' +
      'claim being made. Three things still rest on judgement: the exam tiers and paper ' +
      'tags are editorial; the recorded sightings are written description of what past ' +
      'papers tested, not transcribed from any paper or compilation held here; and claims ' +
      'about very recent developments rest on research rather than on the official text. ' +
      'Corrections are welcome.</p></div>';

    /* ---- what is in it ---- */
    s += tag('What is in it');
    s += '<div class="stat-row">' +
      stat(ARTS.length, 'articles') +
      stat(SCHEDULES.length, 'Schedules') +
      stat(106, 'amendments') +
      stat(explained, 'articles explained') +
      stat(caseCount(), 'judgments summarised') +
      stat(concepts, 'exam concepts') +
      '</div>';

    /* ---- licence ---- */
    s += tag('Licence');
    s += '<div class="grid two">' +
      '<div class="card"><h3>The Constitution text</h3>' +
      '<p>Government material. Reproduced with commentary, which is the condition ' +
      'section 52(1)(q)(ii) of the Copyright Act, 1957 attaches to reproducing an Act ' +
      'of a legislature, and in accordance with the Government of India reproduction ' +
      'terms — accurately, not in a derogatory or misleading context, with the source ' +
      'acknowledged.</p></div>' +
      '<div class="card"><h3>Everything written here</h3>' +
      '<p>The explanations, judgment summaries, exam notes and diagrams are licensed ' +
      '<b>CC BY 4.0</b>. The site code and build scripts are <b>MIT</b>. Full terms in ' +
      'the <code>https://creativecommons.org/licenses/by-sa/4.0/ENSE</code> file.</p></div></div>';
    s += '<p class="sm">The photograph on the home page shows the old Parliament House in ' +
      'New Delhi. It was taken by <a href="https://commons.wikimedia.org/wiki/File:Saansad_Bhawan.jpg" target="_blank" rel="noopener">Kuldeep ' +
      'Maruvada</a> and is published on Wikimedia Commons under the ' +
      '<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a> licence. It has been ' +
      'cropped and resized for this site. The edited copy is under the same licence.</p>';

    /* ---- errors ---- */
    s += tag('Found an error?');
    s += '<p>Please report it. An error in the bare text is a bug in the extraction and ' +
      'should be checked against the official PDF linked above. An error in the ' +
      'commentary is a mistake of mine. Both are worth reporting, and the second kind is ' +
      'the more likely.</p>';

    return s;
  }

  /* ---------- section headings, with a confidence marker ---------- */

  /* A section heading, and nothing else. These used to carry a badge on every
     one - "official text" or "written for this site" - which said the same two
     things several times per page. The distinction is real and still holds, but
     it is carried by how the text is set: the bare text is serif and unboxed,
     commentary sits in a panel. The About page says so, and the footer on every
     page names the source. */
  function tag(text) {
    return '<div class="section-tag">' + esc(text) + '</div>';
  }

  /* ---------- pages ---------- */

  /* ---------- the home page ---------- */

  // Line icons, 24 units square, stroked in currentColor: the element they
  // sit in sets the colour, and the theme sets that.
  var ICON = {
    doc: '<path d="M6.5 3h7.5l4.5 4.5V21h-12z"/><path d="M14 3v4.5h4.5"/>' +
      '<path d="M9.5 12h6M9.5 15.5h6M9.5 19h3.5"/>',
    book: '<path d="M12 6.5c-2-1.6-4.8-2.2-8.5-2v13.5c3.7-.2 6.5.4 8.5 2 2-1.6 4.8-2.2 8.5-2V4.5' +
      'c-3.7-.2-6.5.4-8.5 2z"/><path d="M12 6.5V20"/>',
    map: '<rect x="2.5" y="9.5" width="6" height="5" rx="1.2"/><rect x="15.5" y="3" width="6" height="4.5" rx="1.2"/>' +
      '<rect x="15.5" y="9.75" width="6" height="4.5" rx="1.2"/><rect x="15.5" y="16.5" width="6" height="4.5" rx="1.2"/>' +
      '<path d="M8.5 12h7M8.5 12c3.5 0 3.5-6.75 7-6.75M8.5 12c3.5 0 3.5 6.75 7 6.75"/>',
    seal: '<path d="M13.5 3H6v18h6.5"/><path d="M13.5 3L18 7.5V11"/><path d="M13.5 3v4.5H18"/>' +
      '<path d="M9 11h5M9 14.5h3"/><circle cx="17" cy="15.5" r="3"/><path d="M15.5 18.2l-.9 3 2.4-1.2 2.4 1.2-.9-3"/>',
    history: '<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 3.8v4.4h4.4"/><path d="M12 7.5V12l3.2 2"/>',
    scales: '<path d="M12 3.5v17M8 20.5h8M4.5 7h15"/><path d="M4.5 7L2 13.5M4.5 7L7 13.5M19.5 7L17 13.5M19.5 7L22 13.5"/>' +
      '<path d="M2 13.5a2.5 2.5 0 0 0 5 0zM17 13.5a2.5 2.5 0 0 0 5 0z"/>',
    sign: '<path d="M12 2.5v3M12 11v2.5M12 19v2.5"/><path d="M5 5.5h11l3 2.75-3 2.75H5z"/>' +
      '<path d="M19 13.5H8l-3 2.75L8 19h11z"/>',
    check: '<rect x="4" y="3" width="16" height="18" rx="2.5"/>' +
      '<path d="M7.5 8.5l1.5 1.5 2.8-2.8M7.5 15l1.5 1.5 2.8-2.8M14.5 9h2.5M14.5 15.5h2.5"/>',
    person: '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20.5c.6-3.9 3.7-6.5 7.5-6.5s6.9 2.6 7.5 6.5"/>',
    house: '<path d="M6.5 10a5.5 3.2 0 0 1 11 0"/><path d="M12 6.8V4"/><path d="M3.5 10h17M3.5 17.5h17M2.5 20.5h19"/>' +
      '<path d="M5 10v7.5M8.5 10v7.5M12 10v7.5M15.5 10v7.5M19 10v7.5"/>',
    gavel: '<path d="M13.4 4.2l-3.2 3.2 6.4 6.4 3.2-3.2z"/><path d="M13.4 10.6l-7.9 7.9"/><path d="M13.5 20.5h7"/>',
    hub: '<circle cx="12" cy="5" r="2.4"/><circle cx="5" cy="18.5" r="2.4"/><circle cx="19" cy="18.5" r="2.4"/>' +
      '<path d="M10.8 7.1L6.2 16.4M13.2 7.1l4.6 9.3M7.4 18.5h9.2"/>',
    shield: '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z"/><path d="M12 8.5V13M12 16.3v.2"/>',
    village: '<path d="M2.5 20.5h19"/><path d="M4 20.5v-8l5-4 5 4v8"/><path d="M14 20.5v-6l3.5-2.8 3.5 2.8v6"/>' +
      '<path d="M7.5 20.5V17h3v3.5"/>',
    pillars: '<path d="M3.5 9L12 4l8.5 5z"/><path d="M5.5 11.5v6M10 11.5v6M14 11.5v6M18.5 11.5v6"/><path d="M3.5 20.5h17"/>',
    pen: '<path d="M12.5 4.5H6a2 2 0 0 0-2 2V18a2 2 0 0 0 2 2h11.5a2 2 0 0 0 2-2v-6.5"/>' +
      '<path d="M18 2.8a2.1 2.1 0 0 1 3 3l-8.5 8.5-4 1 1-4z"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.8"/>' +
      '<circle cx="12" cy="12" r="1.4" fill="currentColor"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',
    chev: '<path d="M9 5.5l6.5 6.5L9 18.5"/>',
    chevL: '<path d="M15 5.5L8.5 12l6.5 6.5"/>',
    arrow: '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>'
  };
  function icon(k, cls) {
    return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true">' + ICON[k] + '</svg>';
  }

  // Where the chips under the search box lead. Each is a query the search
  // answers well - "preamble" is not one: the Preamble has a page of its own
  // and the search does not look inside it.
  var TRY = ['Article 21', 'Habeas corpus', 'Money Bill', 'Kesavananda', 'Anti-defection', 'Creamy layer'];

  // The areas a polity syllabus is built on. A tile names its Part, or its
  // chapter within a Part, and takes its article range from the data rather
  // than from a list typed here.
  var TOPICS = [
    { t: 'Preamble', href: '#/preamble', sub: 'The one paragraph the rest is read by', ic: 'book', g: 1 },
    { t: 'Fundamental Rights', part: 'III', ic: 'scales' },
    { t: 'Directive Principles', part: 'IV', ic: 'sign' },
    { t: 'Fundamental Duties', part: 'IVA', ic: 'check', g: 1 },
    { t: 'Union Executive', part: 'V', chap: 'I', sub: 'President, Vice-President, Ministers', ic: 'person', g: 1 },
    { t: 'Parliament', part: 'V', chap: 'II', ic: 'house' },
    { t: 'Judiciary', part: 'V', chap: 'IV', sub: 'The Supreme Court', ic: 'gavel' },
    { t: 'Federalism', part: 'XI', sub: 'Centre\u2013State relations', ic: 'hub', g: 1 },
    { t: 'Emergency Provisions', part: 'XVIII', ic: 'shield', g: 1 },
    { t: 'Local Government', parts: ['IX', 'IXA'], sub: 'Panchayats and Municipalities', ic: 'village' },
    { t: 'Constitutional Bodies', ic: 'pillars', g: 1,
      bodies: [['148', 'CAG'], ['280', 'Finance Commission'], ['315', 'UPSC'],
               ['324', 'Election Commission'], ['338', 'NCSC']] },
    { t: 'Amending the Constitution', href: '#/article/368', sub: 'Article 368, and the basic structure', ic: 'pen' }
  ];

  function artRange(list) {
    if (!list.length) return '';
    var f = list[0].num, l = list[list.length - 1].num;
    return f === l ? 'Article ' + f : 'Articles ' + f + '\u2013' + l;
  }

  function topicTile(x) {
    var ico = '<span class="tp-ico' + (x.g ? ' g' : '') + '">' + icon(x.ic) + '</span>';
    if (x.bodies) {
      return '<div class="topic">' + ico + '<span class="tp-t"><b>' + esc(x.t) + '</b>' +
        '<span class="tp-links">' + x.bodies.filter(function (b) { return BY_NUM[b[0]]; }).map(function (b) {
          return '<a href="#/article/' + b[0] + '" title="Article ' + b[0] + ' \u2014 ' +
            esc(BY_NUM[b[0]].heading) + '">' + esc(b[1]) + '</a>';
        }).join('') + '</span></span></div>';
    }
    var href = x.href, arts = [];
    if (x.chap) {
      arts = artsOfPart(x.part).filter(function (a) { return a.chapter && chapNum(a.chapter) === x.chap; });
      var secs = partSections(x.part);
      href = '#/part/' + x.part;
      for (var i = 0; i < secs.length; i++) {
        if (secs[i].chapter && chapNum(secs[i].chapter) === x.chap) { href += '/' + i; break; }
      }
    } else if (x.part || x.parts) {
      (x.parts || [x.part]).forEach(function (p) { arts = arts.concat(artsOfPart(p)); });
      href = '#/part/' + (x.part || x.parts[0]);
    }
    var range = artRange(arts);
    var sub = [x.sub, range].filter(Boolean).join(' \u00b7 ');
    return '<a class="topic" href="' + href + '">' + ico + '<span class="tp-t"><b>' + esc(x.t) + '</b>' +
      '<small>' + esc(sub) + '</small></span></a>';
  }

  function pageHome() {
    var s = '<section class="hero"><div class="hero-main"><div class="hero-copy">' +
      '<h1>The Constitution of India <span>for Exams</span></h1>' +
      '<p class="hero-lede">The full bare text, explained in plain language &mdash; with the articles ' +
      'examiners return to, the judgments that shaped them and mind maps to hold it together.</p>' +
      '<form class="hero-search" role="search">' + icon('search', 'hs-ico') +
      '<input id="heroSearch" type="search" placeholder="Search an article, a word or an idea" ' +
      'autocomplete="off" spellcheck="false" aria-label="Search the Constitution">' +
      '<button type="submit">Search</button></form>' +
      '<div class="hero-try"><span>Try:</span>' + TRY.map(function (q) {
        return '<a href="#/search/' + encodeURIComponent(q.toLowerCase()) + '">' + esc(q) + '</a>';
      }).join('') + '</div></div>' +
      '<div class="hero-art">' +
      '<img class="hero-photo" src="img/old-parliament-house.jpg" width="1600" height="833" ' +
      'alt="The old Parliament House in New Delhi, where the Constituent Assembly met">' +
      '<blockquote class="hero-quote"><p>We, the people of India&hellip;</p>' +
      '<footer>The Preamble</footer></blockquote>' +
      // CC BY-SA 4.0 asks for the author, a link to the licence and a note of
      // any changes. All three are here, on the photo itself.
      '<p class="hero-credit">Photo: <a href="https://commons.wikimedia.org/wiki/File:Saansad_Bhawan.jpg" target="_blank" rel="noopener">' +
      'Kuldeep Maruvada</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>, ' +
      'cropped</p></div></div>';

    function way(href, ic, t, sub) {
      return '<a class="way" href="' + href + '"><span class="way-ico">' + icon(ic) + '</span>' +
        '<span class="way-t"><b>' + esc(t) + '</b><small>' + sub + '</small></span>' +
        icon('chev', 'chev') + '</a>';
    }
    s += '<nav class="hero-ways" aria-label="Ways in">' +
      way('#/parts', 'doc', 'Find an Article', 'The bare text, with a plain reading beside it') +
      way('#/maps', 'map', 'Mind Maps & Flows','Long Parts drawn as maps, processes as steps') +
      way('#/cases', 'seal', 'Landmark Judgments', caseCount() + ' cases: the facts, the holding, why it matters') +
      way('#/amendments', 'history', 'Amendments', 'All 106, and what each one changed') +
      '</nav></section>';

    s += '<section class="home-sec"><div class="hs-head"><div><h2>Start with Important Topics</h2>' +
      '<p>The areas every polity syllabus covers. Each opens where its articles begin.</p></div></div>' +
      '<div class="topics">' + TOPICS.map(topicTile).join('') + '</div></section>';

    var tiers = [1, 2, 3].map(function (t) {
      var n = EXAM_LIST.filter(function (e) { return e.tier === t; }).length;
      return '<a class="rv-tier t' + t + '" href="#/exam/' + t + '"><b>' + n + '</b>' +
        '<strong>' + esc(TIER[t].label) + '</strong><small>' + esc(TIER[t].blurb) + '</small></a>';
    }).join('');
    s += '<section class="revise"><div class="rv-copy"><span class="rv-ico">' + icon('target') + '</span>' +
      '<div><h2>Important Articles for Quick Revision</h2>' +
      '<p>' + EXAM_LIST.length + ' entries ranked by how often they turn up, each with the concepts a ' +
      'question tests and where candidates lose the mark.</p>' +
      '<a class="more" href="#/exam">View Important Articles ' + icon('arrow') + '</a></div></div>' +
      '<div class="rv-tiers">' + tiers + '</div></section>';

    function card(href, k, t, sub, dim) {
      return '<a class="pcard' + (dim ? ' dim' : '') + '" href="' + href + '" title="' + esc(t) + '">' +
        '<span class="pc-k">' + esc(k) + '</span><b>' + esc(t) + '</b><small>' + esc(sub) + '</small></a>';
    }
    var cards = card('#/preamble', 'The opening', 'Preamble', 'Where it begins');
    PARTS.forEach(function (p) {
      var list = artsOfPart(p.num);
      var live = list.filter(function (a) { return !a.omitted; });
      cards += card('#/part/' + p.num, 'Part ' + p.num, title(p.title),
        live.length ? artRange(list) : 'Repealed', !live.length);
    });
    cards += card('#/schedules', 'Schedules', 'The Twelve Schedules', 'I to XII');
    s += '<section class="home-sec"><div class="hs-head"><div><h2>Browse the Constitution</h2>' +
      '<p>The Preamble, all ' + PARTS.length + ' Parts and the Schedules, in the order they are printed.</p></div>' +
      '<a class="more" href="#/parts">All Parts ' + icon('arrow') + '</a></div>' +
      '<div class="car"><button class="car-btn prev off" type="button" data-car="-1" aria-label="Scroll back">' +
      icon('chevL') + '</button><div class="car-track" id="homeCar">' + cards + '</div>' +
      '<button class="car-btn next" type="button" data-car="1" aria-label="Scroll on">' + icon('chev') +
      '</button></div></section>';

    s += '<figure class="home-close"><blockquote>&ldquo;However good a Constitution may be, it is sure ' +
      'to turn out bad because those who are called to work it, happen to be a bad lot.&rdquo;</blockquote>' +
      '<figcaption>Dr B. R. Ambedkar, in the Constituent Assembly, 25 November 1949</figcaption>' +
      '<div class="tricolour" aria-hidden="true"></div></figure>';
    return s;
  }

  // The carousel's arrows show only where there is somewhere to go.
  function carSync() {
    var track = $('#homeCar');
    if (!track) return;
    var max = track.scrollWidth - track.clientWidth - 2;
    document.querySelectorAll('.car-btn').forEach(function (b) {
      var back = b.getAttribute('data-car') === '-1';
      b.classList.toggle('off', back ? track.scrollLeft <= 2 : track.scrollLeft >= max);
    });
  }
  function wireHome() {
    var track = $('#homeCar');
    if (!track) return;
    // #main is rebuilt on every route, so this listener goes with the old track
    track.addEventListener('scroll', carSync, { passive: true });
    carSync();
  }

  function stat(n, label) {
    return '<div class="stat"><b>' + n + '</b><small>' + esc(label) + '</small></div>';
  }

  function partGrid() {
    var s = '<div class="grid">';
    PARTS.forEach(function (p) {
      var list = artsOfPart(p.num);
      var live = list.filter(function (a) { return !a.omitted; });
      var first = list.length ? list[0].num : '', last = list.length ? list[list.length - 1].num : '';
      var range = !list.length ? '—' : (first === last ? first : first + '–' + last);
      s += '<a class="card tile" href="#/part/' + p.num + '">' +
        '<div class="rn">PART ' + p.num + ' &middot; Art. ' + range + '</div>' +
        '<h3>' + esc(title(p.title)) + '</h3>' +
        '<p>' + live.length + ' article' + (live.length === 1 ? '' : 's') +
        (list.length !== live.length ? ' &middot; ' + (list.length - live.length) + ' omitted' : '') +
        '</p></a>';
    });
    return s + '</div>';
  }

  function pageParts() {
    return '<div class="page-head"><div class="eyebrow">Contents</div><h1>The ' + PARTS.length +
      ' Parts</h1><p class="lede">The Constitution is organised into Parts, each Part into articles, ' +
      'some Parts further into Chapters. Part VII was repealed whole by the Seventh Amendment in 1956; ' +
      'Parts IVA, IXA, IXB and XIVA were added later.</p></div>' + partGrid();
  }

  function pagePreamble(want) {
    var pre = COI.preamble || { paras: [], notes: [] };
    var ex = EXPLAIN.preamble;
    var d = { flow: [], mind: [] };
    sortDiagrams(d, [], MAPS.preamble, 'For the Preamble', false);
    var cases = judgmentsFor('preamble');
    var first = ARTS[0];

    var s = '<div class="art-top"><nav class="crumbs" aria-label="Breadcrumb">' +
      '<a href="#/">Home</a><span>&rsaquo;</span><b>Preamble</b></nav>' +
      '<div class="pager">' + (first ? '<a href="#/article/' + first.num + '" title="' +
        esc(partLabel(first.part) + ' \u00b7 ' + first.heading) + '">Article ' + esc(first.num) +
        ' &rarr;</a>' : '') + '</div></div>' +
      '<header class="art-head"><div class="eyebrow">The Constitution of India</div>' +
      '<h1>Preamble</h1><div class="tagline">' +
      '<span class="pill red">Adopted 26 November 1949</span>' +
      '<span class="pill blue">Amended once — 42nd, 1976</span></div></header>';

    s += tabbed('#/preamble', want, {
      text: { html: tag('The text') + '<div class="bare">' + (pre.paras || []).map(function (p) {
        return '<p class="l' + (p.lvl || 0) + '">' + bareHTML(p.t, pre.notes) + '</p>';
      }).join('') + '</div>' + fnList(pre.notes) },
      explain: { html: ex ? explainBlock(ex) : '' },
      flow: { html: diagramPane(d.flow), n: d.flow.length },
      maps: { html: diagramPane(d.mind), n: d.mind.length },
      judgments: { html: cases.length ? judgPane(cases, 'Judgments on the Preamble', 'the Preamble') : '',
                   n: cases.length },
      exams: { html: EXAM.preamble ? examBlock(EXAM.preamble) : '' }
    });
    return s;
  }

  /* ---------- the Part tree: the left panel on a Part page and its articles ----------

     Part, then its Chapters, then the group headings inside a Chapter, then the
     articles. On an article the Chapter it sits in is open and the others are
     folded, so the panel stays short however long the Part is. A Part with group
     headings but no Chapters (Part III) uses its groups as the top level. A Part
     with neither lists its articles.

     mode 'article' - the rows open and close, and the articles are links
     mode 'part'    - the whole Part is already on the page, so a row stands for
                      a section and scrolls the page to it                     */
  var TREE_CHEV = '<svg class="pt-chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3" ' +
    'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function treeNodes(num) {
    var top = [], by = {};
    partSections(num).forEach(function (g, i) {
      var id = g.chapter ? 'c' + chapNum(g.chapter) : g.fromGroup ? 'g' + i : 'flat';
      if (!by[id]) {
        by[id] = {
          id: id, secs: [],
          k: g.chapter ? 'Chapter ' + chapNum(g.chapter) : g.fromGroup ? g.range.replace(/^Art\. /, '') : '',
          t: g.chapter ? chapName(g.chapter) : g.fromGroup ? g.label : ''
        };
        top.push(by[id]);
      }
      by[id].secs.push({ g: g, i: i });
    });
    return top;
  }

  function partTree(num, mode, curNum, active) {
    var p = PART_BY[num];

    function art(a) {
      var cur = a.num === curNum;
      return '<a class="pt-art' + (cur ? ' cur' : '') + (a.omitted ? ' dim' : '') + '" href="#/article/' +
        a.num + '"' + (cur ? ' aria-current="page"' : '') + '>' +
        '<span class="pt-n">' + esc(a.num) + '</span><span class="pt-h">' + esc(a.heading) + '</span></a>';
    }
    function sec(x) {
      return '<button class="pt-sec' + (x.i === active ? ' on' : '') + '" type="button" data-goto="' + x.i + '">' +
        '<span class="pt-h">' + esc(x.g.label) + '</span><span class="pt-c">' + x.g.arts.length + '</span></button>';
    }

    var body = treeNodes(num).map(function (node) {
      if (node.id === 'flat') {
        return '<div class="pt-flat">' + node.secs[0].g.arts.map(art).join('') + '</div>';
      }
      var head = '<span class="pt-k">' + esc(node.k) + '</span><span class="pt-t">' + esc(node.t) + '</span>';

      if (mode === 'part') {
        var groups = node.secs.filter(function (x) { return x.g.fromGroup && x.g.chapter; });
        // A Chapter without groups, or a group with no Chapter, is one section,
        // so its own row scrolls. A Chapter with groups lists them, and each of
        // those scrolls.
        if (!groups.length) {
          var one = node.secs[0];
          return '<div class="pt-node"><button class="pt-row' + (one.i === active ? ' on' : '') +
            '" type="button" data-goto="' + one.i + '">' + head + '<span class="pt-c">' +
            one.g.arts.length + '</span></button></div>';
        }
        return '<div class="pt-node open"><div class="pt-row static">' + head + '</div>' +
          '<div class="pt-kids">' + node.secs.map(sec).join('') + '</div></div>';
      }

      var mine = node.secs.some(function (x) {
        return x.g.arts.some(function (a) { return a.num === curNum; });
      });
      var kids = node.secs.map(function (x) {
        return (x.g.fromGroup && x.g.chapter ? '<div class="pt-grp">' + esc(x.g.label) + '</div>' : '') +
          x.g.arts.map(art).join('');
      }).join('');
      return '<div class="pt-node' + (mine ? ' open' : '') + '">' +
        '<button class="pt-row" type="button" data-tree aria-expanded="' + mine + '">' + head + TREE_CHEV +
        '</button><div class="pt-kids">' + kids + '</div></div>';
    }).join('');

    return '<nav class="ptree' + (mode === 'article' ? ' in-article' : '') + '" aria-label="Contents of Part ' +
      esc(num) + '">' +
      '<div class="pt-head"><a class="pt-part" href="#/part/' + esc(num) + '">' +
      '<span class="pt-pk">Part ' + esc(num) + '</span>' +
      '<span class="pt-pt">' + esc(title(p ? p.title : '')) + '</span></a>' +
      '<button class="pt-mob" type="button" data-ptoggle aria-expanded="false">Contents' + TREE_CHEV + '</button>' +
      foldBtn() + '</div>' +
      '<div class="pt-body">' + body + '</div>' +
      (mode === 'article' ? '<a class="pt-foot" href="#/part/' + esc(num) + '">The whole of Part ' + esc(num) +
        '<span class="pt-c">' + artsOfPart(num).length + '</span></a>' : '') +
      '</nav>';
  }

  // Folding the rail away, and the tab that brings it back. The tab lives in
  // the body panel and is only visible while the rail is hidden, so there is
  // always exactly one control on screen.
  function foldBtn() {
    return '<button class="pn-fold" type="button" data-rail="off" ' +
      'aria-label="Hide the Part panel" title="Hide the Part panel">&#10094;</button>';
  }
  // What is behind the tab, and how much of it. A reader who folded the rail
  // ten pages ago should not have to remember what "Sections" meant.
  function railTab(kind, n, num) {
    return '<button class="rail-show" type="button" data-rail="on" ' +
      'title="Bring back the list on the left">' +
      '<svg class="rt-ico" viewBox="0 0 18 14" fill="none" aria-hidden="true">' +
      '<rect x=".75" y=".75" width="16.5" height="12.5" rx="2" stroke="currentColor" stroke-width="1.4"/>' +
      '<path d="M6.5 1v12" stroke="currentColor" stroke-width="1.4"/>' +
      '<path d="M2.7 4.3h1.9M2.7 7h1.9M2.7 9.7h1.9" stroke="currentColor" ' +
      'stroke-width="1.2" stroke-linecap="round"/></svg>' +
      '<span class="rt-t">Show all ' + n + ' ' + esc(kind) + ' of Part ' + esc(num) + '</span>' +
      '<span class="rt-x">&#10095;</span></button>';
  }

  // Which section of its Part an article sits in, or -1.
  function sectionOf(a, secs) {
    for (var i = 0; i < secs.length; i++) {
      if (secs[i].arts.indexOf(a) >= 0) return i;
    }
    return -1;
  }

  // A section map, collapsed to one line. Opening it is remembered for as long
  // as the tab is open, so it stays open as you move through the section's
  // articles instead of having to be reopened on each one.
  var MAP_OPEN = {};
  // "Click here for the mind map on General" names nothing. Where a section
  // carries a generic heading, the chapter it sits in is what identifies it.
  function sectionTitle(g) {
    return g.chapter && /^(general|articles)$/i.test(g.label)
      ? chapName(g.chapter) + ': ' + g.label
      : g.label;
  }

  // The map to offer beside an article: the one drawn for its section where
  // there is one, and otherwise the Part's own - so no article is left without.
  function articleMap(part, g) {
    if (g && MAPS[g.mapKey]) {
      return { key: g.mapKey, label: sectionTitle(g), m: MAPS[g.mapKey] };
    }
    var m = MAPS['part' + part] || autoPartMap(part);
    if (!m) return null;
    var p = PART_BY[part];
    return { key: 'part' + part, m: m,
             label: 'Part ' + part + ' \u2014 ' + title(p ? p.title : '') };
  }

  // The small drawing that marks a mind map wherever one is offered.
  function mapIco(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 30 22" fill="none" aria-hidden="true">' +
      '<path d="M9 11C13 11 13 5 17 5" stroke="var(--saffron)" stroke-width="1.3"/>' +
      '<path d="M9 11h8" stroke="var(--blue)" stroke-width="1.3"/>' +
      '<path d="M9 11C13 11 13 17 17 17" stroke="var(--green)" stroke-width="1.3"/>' +
      '<rect x="1" y="7.5" width="8" height="7" rx="2" fill="var(--bg-raise)" ' +
      'stroke="var(--accent)" stroke-width="1.4"/>' +
      '<rect x="17" y="2" width="12" height="6" rx="2" stroke="var(--saffron)" stroke-width="1.3"/>' +
      '<rect x="17" y="8" width="12" height="6" rx="2" stroke="var(--blue)" stroke-width="1.3"/>' +
      '<rect x="17" y="14" width="12" height="6" rx="2" stroke="var(--green)" stroke-width="1.3"/>' +
      '</svg>';
  }

  /* The map is offered, not imposed. Opened by default it is 1040px of
     diagram standing between a section heading and the two articles under it,
     which made Part III's "General" look like a section with nothing in it.
     It sits before the articles, as asked, but folded - and once opened it
     stays open for that section, here and on every article inside it. */
  function sectionMap(part, g) {
    var got = articleMap(part, g);
    if (!got) return '';
    var open = !!MAP_OPEN[got.key];
    return '<div class="secmap' + (open ? ' on' : '') + '">' +
      '<button class="secmap-t" type="button" data-mapkey="' + esc(got.key) + '">' +
      mapIco('sm-ico') +
      '<span class="sm-l"><b class="sm-verb">' +
      (open ? 'Hide the' : 'Click here for the') + '</b> mind map on ' + esc(got.label) +
      '</span>' +
      '<span class="sm-x">' + (open ? '&#9652;' : '&#9662;') + '</span></button>' +
      '<div class="secmap-body"' + (open ? '' : ' hidden') + '>' +
      diagrams(got.m, true) +
      '</div></div>';
  }

  function pagePart(num, want) {
    var p = PART_BY[num];
    if (!p) return '<p class="empty">No such Part.</p>';
    var list = artsOfPart(num);
    var secs = partSections(num);
    var split = secs.length > 1;
    // Every Part with more than one article now reads as two panels, so every
    // one of them folds its description away rather than pushing the panels
    // down. A one-article Part has no panels, and there the description is
    // most of the page.
    var panelled = list.length >= 2;

    var s = '<nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span>&rsaquo;</span>' +
      '<a href="#/parts">Parts</a><span>&rsaquo;</span><b>Part ' + esc(num) + '</b></nav>' +
      '<div class="page-head"><div class="eyebrow">Part ' + esc(num) + '</div>' +
      '<h1>' + esc(title(p.title)) + '</h1>';
    var ex = EXPLAIN['part' + num];
    // On a Part with panels the description is read once and then in the way,
    // so it folds to a single line rather than pushing the sections off screen.
    if (ex) {
      s += panelled
        ? '<details class="part-about"><summary>What Part ' + esc(num) + ' does</summary>' +
          '<p>' + esc(ex.simple) + '</p></details>'
        : '<p class="lede">' + esc(ex.simple) + '</p>';
    }
    s += '</div>';

    // A Part with internal divisions reads better as two panels: its sections
    // on the left, the articles of one section on the right. A short, flat
    // Part does not need that and gets the plain list.
    if (split) {
      // Which section the rail starts on. Nothing is hidden either way: a
      // section in the address is somewhere to scroll to, not a filter.
      var active = want === 'all' ? 0
        : Math.min(Math.max(parseInt(want, 10) || 0, 0), secs.length - 1);
      s += '<div class="part-split">';
      s += partTree(num, 'part', null, active);

      s += '<div class="part-body">' +
        railTab(secs.length === 1 ? 'section' : 'sections', secs.length, num) +
        secs.map(function (g, i) {
          return '<section class="part-sec" id="sec-' + i + '" data-sec="' + i + '">' +
            '<div class="ps-head"><h2>' + esc(g.label) + '</h2>' +
            '<p class="sm">' + (g.chapLine ? esc(g.chapLine) + ' &middot; ' : '') +
            g.arts.length + ' article' + (g.arts.length === 1 ? '' : 's') +
            ' &middot; ' + esc(g.range) + '</p></div>' +
            sectionMap(num, g) +
            g.arts.map(artRow).join('') +
            '</section>';
        }).join('') + '</div></div>';
      return s;
    }

    // A Part with no sections still gets the two panels, so that moving from
    // The Union to Citizenship does not make the left column vanish. Its rail
    // lists articles rather than sections, which is all it has.
    // Every Part page carries the rail, including the three that are one article
    // long. A one-item rail looks thin, but a Part page that alone has no left
    // column looks broken - and on this page the rail lists an article you are
    // not on, which is not the same as the article page, where it would list
    // back the one you are reading.
    var flatRail = list.length ? partTree(num, 'part', null, -1) : '';
    var body = '';

    if (flatRail) body += railTab(list.length === 1 ? 'article' : 'articles', list.length, num);
    body += sectionMap(num, secs[0]);
    body += tag('Articles');
    var lastGroup = null, lastChapter = null;
    list.forEach(function (a) {
      if (a.chapter && a.chapter !== lastChapter) {
        lastChapter = a.chapter; lastGroup = null;
        body += '<div class="group-head">Chapter ' + esc(chapNum(a.chapter)) +
          ' — ' + esc(chapName(a.chapter)) + '</div>';
      }
      if (a.group && a.group !== lastGroup) {
        lastGroup = a.group;
        body += '<div class="group-head" style="color:var(--ink-faint)">' + esc(a.group) + '</div>';
      }
      body += artRow(a);
    });

    return flatRail
      ? s + '<div class="part-split">' + flatRail + '<div class="part-body">' + body + '</div></div>'
      : s + body;
  }

  // Split a Part into the divisions the Constitution itself gives it: the
  // Chapter where there is one, otherwise the group sub-heading. Parts with
  // neither come back as a single section and stay a plain list.
  function partSections(num) {
    var out = [], key = null;
    artsOfPart(num).forEach(function (a) {
      var label = a.group || (a.chapter ? chapName(a.chapter) : null);
      var k = (a.chapter || '') + '|' + (a.group || '');
      if (!label) { k = '|'; label = 'Articles'; }
      if (k !== key) {
        key = k;
        out.push({ chapter: a.chapter || null, fromGroup: !!a.group,
                   label: label, arts: [] });
      }
      out[out.length - 1].arts.push(a);
    });
    out.forEach(function (g) {
      var f = g.arts[0].num, l = g.arts[g.arts.length - 1].num;
      g.range = f === l ? 'Art. ' + f : 'Art. ' + f + '–' + l;
      // A chapter with no group headings under it becomes one section, and its
      // own name is already the section name - so name the chapter only.
      g.chapLine = g.chapter
        ? 'Chapter ' + chapNum(g.chapter) +
          (g.fromGroup ? ' — ' + chapName(g.chapter) : '')
        : '';
      // A hand-drawn map keyed to this section, if one exists. Part VI has a
      // group called "General" in chapter I and another in chapter III, so the
      // chapter numeral has to be in the key.
      g.mapKey = 'part' + num + (g.chapter ? '.' + chapNum(g.chapter) : '') +
        ':' + g.label;
    });
    return out;
  }
  function chapNum(c) { return String(c).replace(/\..*$/, '').trim(); }
  function chapName(c) { return title(String(c).replace(/^[IVXLC]+\.\s*/, '')); }

  function artRow(a) {
    var ex = explainOf(a.num);
    return '<a class="art-row' + (a.omitted ? ' dim' : '') + '" href="#/article/' + a.num + '">' +
      '<span class="num">Art. ' + esc(a.num) + '</span><span class="txt"><b>' + esc(a.heading) + '</b>' +
      (ex ? '<small>' + esc(firstSentence(ex.simple)) + '</small>' : '') + '</span></a>';
  }
  function firstSentence(s) {
    s = String(s || '');
    var m = s.match(/^.*?[.;](\s|$)/);
    var out = m ? m[0] : s;
    return out.length > 150 ? out.slice(0, 148) + '…' : out;
  }

  /* ---------- an article ---------- */

  function pageArticle(num, want) {
    var a = BY_NUM[num];
    if (!a) return '<p class="empty">No article ' + esc(num) + ' in this text.</p>';
    var ex = explainOf(num);
    var nb = neighbours(a);
    var secs = partSections(a.part);
    var mine = secs.length > 1 ? sectionOf(a, secs) : 0;
    var chap = a.chapter ? 'Chapter ' + chapNum(a.chapter) + ' \u2014 ' + chapName(a.chapter) : '';

    // Home, the Part, the Chapter and the group: each one a step back up.
    var crumbs = '<a href="#/">Home</a><span>&rsaquo;</span>' +
      '<a href="#/part/' + esc(a.part) + '">' + esc(partLabel(a.part)) + '</a>';
    if (chap) {
      crumbs += '<span>&rsaquo;</span><a href="#/part/' + esc(a.part) + '/' +
        firstSecOfChapter(secs, a.chapter) + '">' + esc(chap) + '</a>';
    }
    if (a.group && mine >= 0) {
      crumbs += '<span>&rsaquo;</span><a href="#/part/' + esc(a.part) + '/' + mine + '">' + esc(a.group) + '</a>';
    }
    crumbs += '<span>&rsaquo;</span><b>Article ' + esc(a.num) + '</b>';

    var s = '<div class="art-top"><nav class="crumbs" aria-label="Breadcrumb">' + crumbs + '</nav>' +
      pagerTop(nb) + '</div>';

    s += '<header class="art-head"><div class="eyebrow">Article ' + esc(a.num) + '</div>' +
      '<h1>' + esc(a.heading) + '</h1><div class="tagline">' +
      '<span class="pill grey">' + esc(partLabel(a.part)) + '</span>' +
      (chap ? '<span class="pill grey">' + esc(chap) + '</span>' : '') +
      (a.omitted ? '<span class="pill red">Omitted / repealed</span>'
        // In force is the ordinary case and needs no sentence. Repealed is the
        // exception and does, so it keeps its words.
        : '<span class="live" role="img" aria-label="In force" title="In force"></span>');
    var amds = a.amendments || [];
    amds.slice(0, 4).forEach(function (m) {
      s += '<span class="pill blue">' + esc(m) + '</span>';
    });
    if (amds.length > 4) {
      s += '<span class="pill blue" title="All of them are under Bare Text">+' + (amds.length - 4) + ' more</span>';
    }
    s += '</div></header>';

    var d = diagramsFor(a);
    var cases = judgmentsFor(a.num);
    if (!cases.length && a.alias) cases = judgmentsFor(a.alias);
    var exam = examOf(a);
    s += tabbed('#/article/' + a.num, want, {
      text: { html: textPane(a) },
      explain: { html: ex ? explainBlock(ex) : '' },
      flow: { html: diagramPane(d.flow), n: d.flow.length },
      maps: { html: diagramPane(d.mind), n: d.mind.length },
      judgments: { html: cases.length ? judgPane(cases, 'Judgments filed under Article ' + a.num, 'Article ' + a.num) : '',
                   n: cases.length },
      exams: { html: exam ? examBlock(exam) : '' }
    });

    s += pagerFoot(a, nb);

    // Inside a Part of two or more articles, the article is read beside the
    // Part tree. On a one-article Part the tree would list only this article.
    if (artsOfPart(a.part).length >= 2) {
      return '<div class="part-split art-split">' + partTree(a.part, 'article', a.num) +
        '<div class="part-body">' +
        railTab(secs.length > 1 ? 'sections' : 'articles',
          secs.length > 1 ? secs.length : artsOfPart(a.part).length, a.part) +
        s + '</div></div>';
    }
    return s;
  }

  function firstSecOfChapter(secs, chapter) {
    for (var i = 0; i < secs.length; i++) {
      if (secs[i].chapter === chapter) return i;
    }
    return 0;
  }

  /* ---------- the reading tabs ----------

     One provision's readings, sorted into kinds. Every pane is drawn up front
     and shown one at a time, so switching costs no redraw and the reader keeps
     their place. A tab with nothing in it is left out, so the bar offers only
     the readings that exist. Bare Text is always there. The last tab chosen is
     remembered, and the address names it, so a link or a reload opens the same
     one, or Bare Text where that reading does not exist. */
  var TABS = [
    { id: 'text', label: 'Bare Text' },
    { id: 'explain', label: 'Explainer' },
    { id: 'flow', label: 'Flow Charts' },
    { id: 'maps', label: 'Mind Maps' },
    { id: 'judgments', label: 'Judgments' },
    { id: 'exams', label: 'For Exams' }
  ];

  function tabbed(base, want, panes) {
    var stored = null;
    try { stored = localStorage.getItem('coi-tab'); } catch (err) { /* private mode */ }
    function has(id) { return !!(id && panes[id] && panes[id].html); }
    var pick = [want, stored, 'text'].filter(has)[0] ||
      (TABS.filter(function (t) { return has(t.id); })[0] || {}).id;

    var bar = '<div class="atabs" role="tablist" aria-label="Readings" data-base="' + esc(base) + '">' +
      TABS.filter(function (t) { return has(t.id); }).map(function (t) {
        var p = panes[t.id], on = t.id === pick;
        return '<button class="atab' + (on ? ' on' : '') + '" type="button" role="tab" id="tab-' + t.id +
          '" aria-controls="pane-' + t.id + '" aria-selected="' + on + '" data-tab="' + t.id + '"' +
          (on ? '' : ' tabindex="-1"') + '>' +
          esc(t.label) + (p.n ? '<span class="ct">' + p.n + '</span>' : '') + '</button>';
      }).join('') + '</div>';

    var body = TABS.map(function (t) {
      if (!has(t.id)) return '';
      return '<section class="apane" id="pane-' + t.id + '" role="tabpanel" aria-labelledby="tab-' + t.id + '"' +
        (t.id === pick ? '' : ' hidden') + '>' + panes[t.id].html + '</section>';
    }).join('');

    return bar + '<div class="apanes">' + body + '</div>';
  }

  function showTab(id, focus) {
    var bar = $('#main .atabs');
    if (!bar) return;
    var btn = bar.querySelector('.atab[data-tab="' + id + '"]');
    if (!btn) return;
    bar.querySelectorAll('.atab').forEach(function (b) {
      var on = b === btn;
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
    document.querySelectorAll('#main .apane').forEach(function (p) {
      p.hidden = p.id !== 'pane-' + id;
    });
    try { localStorage.setItem('coi-tab', id); } catch (err) { /* private mode */ }
    // replaceState rather than a new hash: a new hash would redraw the page.
    if (history.replaceState) history.replaceState(null, '', bar.getAttribute('data-base') + '/' + id);
    // Once the bar has stuck under the header, a new pane would open part-way
    // down. Bring its start back up under the bar.
    var panes = $('#main .apanes');
    var stick = parseFloat(getComputedStyle(bar).top) || 0;
    if (panes && bar.getBoundingClientRect().top <= stick + 1) {
      window.scrollTo(0, Math.max(0, panes.getBoundingClientRect().top + window.scrollY -
        stick - bar.offsetHeight - 14));
    }
    if (focus) btn.focus();
  }

  // Bare Text: the text as printed, what it refers to, what amended it, and
  // the footnotes the official edition prints under it.
  function textPane(a) {
    var s = tag('The text') + '<div class="bare">' +
      a.paras.map(function (p) {
        return '<p class="l' + (p.lvl || 0) + '">' + bareHTML(p.t, a.notes) + '</p>';
      }).join('') + '</div>';

    var refs = (a.refs || []).filter(function (r) { return BY_NUM[r]; });
    var schs = (a.schedRefs || []).map(function (r) {
      return SCHEDULES.filter(function (x) { return x.name.indexOf(r) === 0; })[0];
    }).filter(Boolean);
    if (refs.length || schs.length) {
      s += tag('Refers to') + '<div class="chiprow">' +
        refs.map(function (r) {
          return '<button class="chip peek" type="button" data-peek="art:' + esc(r) + '">Art. ' +
            esc(r) + ' — ' + esc(shortHeading(BY_NUM[r].heading)) + '</button>';
        }).join('') +
        schs.map(function (sch) {
          return '<a class="chip" href="#/schedule/' + sch.id + '">' + esc(sch.name) + '</a>';
        }).join('') + '</div>';
    }
    return s + amdChips(a.amendments) + fnList(a.notes);
  }

  function amdChips(amds) {
    if (!amds || !amds.length) return '';
    return tag('Amended by') + '<div class="chiprow">' + amds.map(function (m) {
      var n = amendNumber(m);
      return n
        ? '<button class="chip peek" type="button" data-peek="amd:' + n + '">' + esc(m) + '</button>'
        : '<span class="chip">' + esc(m) + '</span>';
    }).join('') + '</div>';
  }

  function fnList(notes) {
    if (!notes || !notes.length) return '';
    return tag('Footnotes, as printed') + '<ul class="fn-list">' + notes.map(function (n) {
      return '<li><span class="fn-n">' + n.n + '</span><span>' + esc(n.text) + '</span></li>';
    }).join('') + '</ul>';
  }

  // Every diagram that bears on an article, sorted by what kind of drawing it
  // is: the article's own, then its section's, or else its Part's.
  function specsOf(m) { return !m ? [] : Array.isArray(m) ? m : [m]; }
  function sortDiagrams(out, seen, m, scope, compact) {
    specsOf(m).forEach(function (spec) {
      // Article 123's flow chart is also its section's, so it could come twice.
      if (seen.indexOf(spec) >= 0) return;
      seen.push(spec);
      out[spec.type === 'flow' ? 'flow' : 'mind'].push({ scope: scope, spec: spec, compact: compact });
    });
  }
  function diagramsFor(a) {
    var out = { flow: [], mind: [] }, seen = [];
    sortDiagrams(out, seen, MAPS[a.num] || (a.alias ? MAPS[a.alias] : null), 'For this article', false);
    var secs = partSections(a.part), g = secs[secs.length > 1 ? sectionOf(a, secs) : 0];
    if (g && MAPS[g.mapKey]) {
      // The heading names the section, so the map's root box would only repeat it.
      sortDiagrams(out, seen, MAPS[g.mapKey], 'For its section: ' + sectionTitle(g), true);
    } else {
      sortDiagrams(out, seen, MAPS['part' + a.part] || autoPartMap(a.part),
        'For Part ' + a.part + ' as a whole', false);
    }
    return out;
  }
  function diagramPane(list) {
    var s = '', last = null;
    list.forEach(function (x) {
      if (x.scope !== last) { s += tag(x.scope); last = x.scope; }
      s += renderDiagram(x.spec, x.compact);
    });
    return s;
  }

  /* What comes before and after an article in the document, which is not the
     same as what comes before and after it in its Part. ARTS is in the order
     the Constitution prints, so the two ends of it are the only real ends -
     and each of those leads somewhere too: the Preamble precedes article 1,
     and the Schedules follow article 395. */
  function neighbours(a) {
    var i = ARTS.indexOf(a);
    return {
      prev: i > 0 ? ARTS[i - 1] : null,
      next: (i >= 0 && i < ARTS.length - 1) ? ARTS[i + 1] : null
    };
  }

  // The pager beside the breadcrumb stays short: the article number, and the
  // Part on hover. The two ends of the document read as what they are.
  function pagerTop(nb) {
    function art(x, dir) {
      return '<a href="#/article/' + x.num + '" title="' +
        esc(partLabel(x.part) + ' \u00b7 ' + x.heading) + '">' +
        (dir === 'prev' ? '&larr; Article ' + esc(x.num) : 'Article ' + esc(x.num) + ' &rarr;') + '</a>';
    }
    return '<div class="pager">' +
      (nb.prev ? art(nb.prev, 'prev')
        : '<a href="#/preamble" title="The Preamble, which comes before article 1">' +
          '&larr; Preamble</a>') +
      (nb.next ? art(nb.next, 'next')
        : '<a href="#/schedules" title="The twelve Schedules, which follow article 395">' +
          'Schedules &rarr;</a>') +
      '</div>';
  }

  // At the foot there is room to say where each one goes, which is where a
  // reader who has read to the end actually decides. Landing in a different
  // Part is worth naming rather than sliding past.
  function pagerFoot(a, nb) {
    function to(href, dir, kicker, name, sub) {
      return '<a class="pf ' + dir + (kicker ? ' cross' : '') + '" href="' + href + '">' +
        '<span class="pf-d">' + (dir === 'prev' ? '&larr; Previous' : 'Next &rarr;') + '</span>' +
        (kicker ? '<span class="pf-p">' + esc(kicker) + '</span>' : '') +
        '<span class="pf-n">' + esc(name) + '</span>' +
        '<span class="pf-t">' + esc(sub) + '</span></a>';
    }
    function art(x, dir) {
      return to('#/article/' + x.num, dir,
        x.part !== a.part ? partLabel(x.part) : '', 'Article ' + x.num, x.heading);
    }
    return '<nav class="pager-foot" aria-label="Previous and next article">' +
      (nb.prev ? art(nb.prev, 'prev')
        : to('#/preamble', 'prev', 'Before Part I', 'The Preamble',
             'The one paragraph the whole document rests on')) +
      (nb.next ? art(nb.next, 'next')
        : to('#/schedules', 'next', 'After Part XXII', 'The Schedules',
             'The twelve lists the articles refer out to')) +
      '</nav>';
  }

  // Split in two. The plain reading comes first, then the bare text it is a
  // reading of, then the qualifications — so a reader meets the provision
  // already knowing roughly what it does.
  function explainSays(ex) {
    return '<div class="explain">' +
      '<div class="panel simple"><h4>&#9673; What it says</h4><p>' + para(ex.simple) +
      '</p></div></div>';
  }

  function explainRest(ex) {
    var s = '<div class="explain">';
    s += ex.catch
      ? '<div class="panel catch"><h4>&#9888; The catch</h4><p>' + para(ex.catch) + '</p></div>'
      : '<div class="panel catch quiet"><h4>&#9888; The catch</h4><p>Nothing to flag here. This ' +
        'article is machinery, and it works the way it reads — no proviso, exception or line of ' +
        'cases cuts across it.</p></div>';
    if (ex.note) s += '<div class="panel note"><h4>&#9432; Worth knowing</h4><p>' + para(ex.note) + '</p></div>';
    return s + '</div>';
  }

  function explainBlock(ex) { return explainSays(ex) + explainRest(ex); }
  function para(t, wrap) {
    var out = esc(t).replace(/\n\n/g, '</p><p>')
      // *stress* marks the word a question turns on — "or otherwise", "only",
      // "total membership". The bare text's own *** is handled by bareHTML,
      // not here, so it is never touched by this.
      .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
      .replace(/\bArt(?:icle)?\.?\s(\d{1,3}[A-Z]{0,3})\b/g, function (m, n) {
        return BY_NUM[n] ? '<a href="#/article/' + n + '">' + m + '</a>' : m;
      });
    return wrap ? '<' + wrap + '>' + out + '</' + wrap + '>' : out;
  }

  /* ---------- landmark judgments ---------- */

  var STATUS = {
    good:      { pill: 'green', label: 'still good law' },
    partly:    { pill: 'amber', label: 'partly overtaken' },
    overruled: { pill: 'red',   label: 'overruled' },
    historic:  { pill: 'blue',  label: 'superseded by Parliament' }
  };

  /* The judgment register. Each judgment is in it once, however many articles
     it is filed under, with an id made from its short name and year. Which
     articles it is filed under still comes from the cases files. A judgment
     rewritten in the full format sits in judgments-*.js under the same id and
     is read from there. One not yet rewritten keeps its short summary. */
  var JUDG = window.COI_JUDGMENTS || {};

  function caseId(c) {
    return (String(c.case).replace(/\s*\(\d{4}\)\s*$/, '') + ' ' + c.year).toLowerCase()
      .replace(/&/g, ' and ').replace(/['\u2019.]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function keyOrder(k) {
    if (k === 'preamble') return -1;
    if (k.indexOf('sch') === 0) {
      return 1e4 + SCHEDULES.map(function (x) { return x.id; }).indexOf(k.slice(3));
    }
    var a = BY_NUM[k];
    return a ? a.n : 9e3;
  }
  function keyLabel(k) {
    if (k === 'preamble') return 'Preamble';
    if (k.indexOf('sch') === 0) {
      var sc = scheduleById(k.slice(3));
      return sc ? sc.name : k.slice(3) + ' Schedule';
    }
    return 'Article ' + k;
  }
  function keyShort(k) {
    return k === 'preamble' ? 'Preamble' : k.indexOf('sch') === 0 ? 'Sch. ' + k.slice(3) : 'Art. ' + k;
  }
  function keyHref(k) {
    if (k === 'preamble') return '#/preamble';
    if (k.indexOf('sch') === 0) return '#/schedule/' + k.slice(3);
    return '#/article/' + k;
  }

  var REG = [], REG_BY = {};
  Object.keys(CASES).forEach(function (key) {
    CASES[key].forEach(function (c) {
      var id = caseId(c), r = REG_BY[id];
      if (!r) {
        r = REG_BY[id] = { id: id, c: c, j: JUDG[id] || null, keys: [] };
        REG.push(r);
      }
      if (r.keys.indexOf(key) < 0) r.keys.push(key);
    });
  });
  REG.forEach(function (r) {
    // articles before the Preamble and the Schedules, in the order printed
    r.keys.sort(function (x, y) {
      var ax = BY_NUM[x] ? 0 : 1, ay = BY_NUM[y] ? 0 : 1;
      return ax - ay || keyOrder(x) - keyOrder(y);
    });
    r.order = keyOrder(r.keys[0]);
    r.year = +((r.j && r.j.year) || r.c.year);
    r.short = r.c.case;
    r.name = (r.j && r.j.name) || r.c.full || r.c.case;
    r.status = (r.j && r.j.status) || r.c.status;
  });
  REG.sort(function (x, y) { return x.order - y.order || x.year - y.year; });

  // The judgments filed under one article, in the order the cases file lists them.
  function judgmentsFor(key) {
    var out = [];
    (CASES[key] || []).forEach(function (c) {
      var r = REG_BY[caseId(c)];
      if (r && out.indexOf(r) < 0) out.push(r);
    });
    return out;
  }

  function benchText(r) {
    if (r.j && r.j.bench) return r.j.bench + '-judge bench';
    return r.c.bench ? String(r.c.bench).replace(/^(\d+) judges?$/, '$1-judge bench') : '';
  }

  // A judgment as a card: where it is filed, its name, year, bench and result,
  // and one line on what it decided. The card is a link to its page. On a
  // Judgments tab, a plain click opens it in the drawer instead.
  function judgCard(r) {
    var j = r.j, st = STATUS[r.status] || STATUS.good;
    var line = j ? (j.summary || (j.question || [])[0] || '') : firstSentence(r.c.held);
    var meta = [String(r.year), benchText(r), j && j.result ? j.result : ''].filter(Boolean).join(' \u00b7 ');
    return '<a class="jcard" href="#/judgment/' + r.id + '" data-id="' + r.id + '">' +
      '<span class="jc-top"><span class="jc-where">' + esc(r.keys.map(keyShort).join(' \u00b7 ')) + '</span>' +
      (r.status && r.status !== 'good' ? '<span class="pill ' + st.pill + '">' + esc(st.label) + '</span>' : '') +
      '</span>' +
      '<span class="jc-name">' + esc(r.short) + '</span>' +
      '<span class="jc-meta">' + esc(meta) + '</span>' +
      '<span class="jc-line">' + esc(line) + '</span>' +
      '<span class="jc-go">Read the judgment &rarr;</span></a>';
  }

  // back names the page the tab is on, for the drawer's way back.
  function judgPane(list, label, back) {
    return tag(label) + '<div class="jgrid" data-back="' + esc(back) + '">' +
      list.map(judgCard).join('') + '</div>';
  }

  /* ---------- a judgment's own page ---------- */

  var HELD_KIND = { unanimous: 'for', majority: 'for', plurality: 'for', concurring: 'also', dissent: 'against' };

  // The marks beside a section's heading and beside each holding's label,
  // drawn like the site's other icons.
  var JSEC_ICON = {
    q: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 0 1 4.9.7c0 1.7-2.5 2.2-2.5 3.9"/>' +
      '<path d="M12 17.2h.01"/>',
    f: '<path d="M7 3.5h7l4 4v13H7z"/><path d="M14 3.5v4h4"/><path d="M10 12.5h5M10 16h5"/>',
    h: ICON.scales,
    p: ICON.target,
    l: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>'
  };
  var HELD_MARK = {
    'for': '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    'also': '<path d="M12 5.5v13M5.5 12h13"/>',
    'against': '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>'
  };
  function markSvg(paths, cls) {
    return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true">' + paths + '</svg>';
  }

  function sourceName(url) {
    if (/indiankanoon\.org/.test(url)) return 'Indian Kanoon';
    if (/sci\.gov\.in/.test(url)) return 'the Supreme Court of India';
    var m = String(url).match(/^https?:\/\/(?:www\.)?([^\/]+)/);
    return m ? m[1] : 'the source';
  }

  function jsec(cls, heading, body) {
    return body ? '<section class="jsec ' + cls + '"><h2>' +
      (JSEC_ICON[cls] ? '<span class="jico">' + markSvg(JSEC_ICON[cls]) + '</span>' : '') +
      '<span>' + esc(heading) + '</span></h2>' + body + '</section>' : '';
  }
  function jParas(list) {
    return (list || []).map(function (t) { return '<p>' + para(t) + '</p>'; }).join('');
  }
  function jBullets(list) {
    return list && list.length ? '<ul class="jlist">' + list.map(function (t) {
      return '<li>' + para(t) + '</li>';
    }).join('') + '</ul>' : '';
  }
  function jNumbered(list) {
    return list && list.length ? '<ol class="jnum">' + list.map(function (t) {
      return '<li>' + para(t) + '</li>';
    }).join('') + '</ol>' : '';
  }
  function jHeld(list) {
    if (!list || !list.length) return '';
    return '<div class="jheld-wrap">' + list.map(function (h) {
      var pts = h.points || [];
      var kind = HELD_KIND[h.kind] || 'for';
      return '<div class="jheld ' + kind + '"><h3>' + markSvg(HELD_MARK[kind], 'jh-ico') +
        '<span>' + esc(h.label) + '</span></h3>' +
        (pts.length === 1 ? '<p>' + para(pts[0]) + '</p>' : jBullets(pts)) + '</div>';
    }).join('') + '</div>';
  }

  // The name, its pills and its date: the same on the page and in the drawer.
  function judgmentHead(r, h) {
    var j = r.j, c = r.c, st = STATUS[r.status] || STATUS.good;
    var sub = j ? [j.full && j.full !== r.name ? j.full : '', j.aka || ''].filter(Boolean).join(' \u00b7 ')
      : (c.full && c.full !== r.name ? c.full : '');
    return '<header class="art-head jhead"><' + h + (h === 'h2' ? ' id="sheetName"' : '') + '>' +
      esc(r.name) + '</' + h + '>' +
      (sub ? '<p class="j-sub">' + esc(sub) + '</p>' : '') +
      '<div class="tagline"><span class="pill grey">' + esc(String(r.year)) + '</span>' +
      (benchText(r) ? '<span class="pill blue">' + esc(benchText(r)) + '</span>' : '') +
      (j && j.result ? '<span class="pill amber">' + esc(j.result) + '</span>' : '') +
      '<span class="pill ' + st.pill + '">' + esc(st.label) + '</span>' +
      ((j && j.tags) || []).map(function (t) { return '<span class="pill violet">' + esc(t) + '</span>'; }).join('') +
      '</div>' +
      (j && (j.decided || j.citation) ? '<p class="j-meta">' +
        esc([j.decided ? 'Decided ' + j.decided : '', j.citation || ''].filter(Boolean).join(' \u00b7 ')) + '</p>' : '') +
      '</header>';
  }

  // What the Court was asked, the facts, what it held and what followed, then
  // where to read more. The drawer also offers the judgment's own page.
  function judgmentBody(r, inDrawer) {
    var j = r.j, c = r.c, s = '<div class="jsecs">';
    if (j) {
      s += jsec('q', 'Constitutional Question', jParas(j.question)) +
        jsec('f', 'Facts of the Case', jBullets(j.facts)) +
        jsec('h', 'What the Court Held', jHeld(j.held)) +
        jsec('p', 'Key Principles', jNumbered(j.principles)) +
        jsec('l', 'Subsequent Developments', jNumbered(j.legacy));
    } else {
      s += jsec('f', 'What happened', '<p>' + para(c.facts) + '</p>') +
        jsec('h', 'What the Court held', '<p>' + para(c.held) + '</p>') +
        jsec('l', 'Why it matters', '<p>' + para(c.why) + '</p>');
    }
    return s + '<section class="jsec jfoot">' +
      (inDrawer ? '<div class="jf-row"><span class="jf-k">Own page</span><a href="#/judgment/' + r.id +
        '">Open this judgment as a full page &rarr;</a></div>' : '') +
      '<div class="jf-row"><span class="jf-k">Filed under</span>' +
      '<span class="chiprow">' + r.keys.map(function (k) {
        return '<a class="chip" href="' + keyHref(k) + '/judgments">' + esc(keyLabel(k)) + '</a>';
      }).join('') + '</span></div>' +
      (j && j.judges ? '<div class="jf-row"><span class="jf-k">Bench</span><span>' + esc(j.judges) + '</span></div>' : '') +
      (j && j.source ? '<div class="jf-row"><span class="jf-k">Full text</span><a href="' + esc(j.source) +
        '" target="_blank" rel="noopener">Read the judgment on ' + esc(sourceName(j.source)) + ' &#8599;</a></div>' : '') +
      '</section></div>';
  }

  function pageJudgment(id) {
    var r = REG_BY[id];
    if (!r) return '<p class="empty">No such judgment.</p>';
    var i = REG.indexOf(r), prev = REG[i - 1], next = REG[i + 1];

    var s = '<div class="art-top"><nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a>' +
      '<span>&rsaquo;</span><a href="#/cases">Judgments</a><span>&rsaquo;</span><b>' + esc(r.short) + '</b></nav>' +
      '<div class="pager">' +
      (prev ? '<a href="#/judgment/' + prev.id + '" title="' + esc(prev.short + ', ' + prev.year) +
        '">&larr; Previous judgment</a>' : '') +
      (next ? '<a href="#/judgment/' + next.id + '" title="' + esc(next.short + ', ' + next.year) +
        '">Next judgment &rarr;</a>' : '') +
      '</div></div>';

    s += judgmentHead(r, 'h1') + judgmentBody(r);

    function to(x, dir) {
      return '<a class="pf ' + dir + '" href="#/judgment/' + x.id + '">' +
        '<span class="pf-d">' + (dir === 'prev' ? '&larr; Previous judgment' : 'Next judgment &rarr;') + '</span>' +
        '<span class="pf-n">' + esc(x.keys.map(keyShort).join(' \u00b7 ') + ' \u00b7 ' + x.year) + '</span>' +
        '<span class="pf-t">' + esc(x.short) + '</span></a>';
    }
    s += '<nav class="pager-foot" aria-label="Previous and next judgment">' +
      (prev ? to(prev, 'prev') : '<span></span>') + (next ? to(next, 'next') : '') + '</nav>';
    return s;
  }

  /* ---------- a judgment in the drawer ----------

     On a Judgments tab, a card opens its judgment in a drawer on the right of
     the page, so the reader stays on the article. The drawer steps through the
     other judgments on the same tab, and Back closes it. */
  function judgmentDrawer(id, ids, back) {
    var r = REG_BY[id], i = ids.indexOf(id);
    var prev = REG_BY[ids[i - 1]], next = REG_BY[ids[i + 1]];
    function step(x, dir) {
      if (!x) {
        return '<button class="jd-step" type="button" disabled>' +
          (dir === 'prev' ? '&larr; Previous' : 'Next &rarr;') + '</button>';
      }
      return '<button class="jd-step" type="button" data-jstep="' + x.id + '" data-dir="' + dir + '" title="' +
        esc(x.short + ', ' + x.year) + '">' + (dir === 'prev' ? '&larr; ' : '') +
        '<span>' + esc(x.short) + '</span>' + (dir === 'next' ? ' &rarr;' : '') + '</button>';
    }
    return '<div class="jd-bar">' +
      '<button class="jd-back" type="button" data-close="1">&larr; Back to ' + esc(back) +
      ' &middot; Judgments</button>' +
      '<div class="jd-steps">' +
      (ids.length > 1 ? '<span class="jd-pos">' + (i + 1) + ' of ' + ids.length + '</span>' : '') +
      step(prev, 'prev') + step(next, 'next') + '</div></div>' +
      judgmentHead(r, 'h2') + judgmentBody(r, true);
  }

  // dir: set when stepping, so focus stays on the same side of the bar.
  function openJudgment(id, ids, back, dir) {
    if (!REG_BY[id]) return;
    var html = judgmentDrawer(id, ids, back), sheet = $('.sheet.jdrawer');
    if (sheet) {
      var body = sheet.querySelector('.sheet-body');
      body.innerHTML = html;
      body.scrollTop = 0;
    } else {
      openSheet(html, 'jdrawer');
      sheet = $('.sheet.jdrawer');
    }
    sheet.setAttribute('data-ids', ids.join(' '));
    sheet.setAttribute('data-back', back);
    document.querySelectorAll('.jcard.on').forEach(function (c) { c.classList.remove('on'); });
    var card = document.querySelector('.jgrid[data-back] .jcard[data-id="' + id + '"]');
    if (card) {
      card.classList.add('on');
      _lastFocus = card;
    }
    if (dir) (sheet.querySelector('.jd-step[data-dir="' + dir + '"]') || sheet.querySelector('.jd-back')).focus();
  }

  /* ---------- what the examiners ask ---------- */

  var TIER = {
    1: { pill: 'red',   label: 'Core',          blurb: 'asked in almost every cycle' },
    2: { pill: 'amber', label: 'Recurs',        blurb: 'comes back across cycles' },
    3: { pill: 'blue',  label: 'Worth holding', blurb: 'appears when the subject is live' }
  };

  // flatten an entry to plain text, for the filter and the site search
  function examText(x) {
    if (!x) return '';
    return [x.why, (x.concepts || []).map(function (c) {
      return typeof c === 'string' ? c : (c.t || '') + ' ' + (c.d || '');
    }).join(' '), (x.seen || []).map(function (c) { return sighting(c).text; }).join(' '), x.trap,
      (x.papers || []).join(' ')].join(' ');
  }

  function examOf(a) {
    if (!a) return null;
    return EXAM[a.num] || (a.alias ? EXAM[a.alias] : null) || null;
  }

  // Every key in the exam data, resolved back to what it is about.
  //
  // Object.keys puts array-index-like keys ("12", "356") first in numeric order
  // and everything else ("21A", "preamble", "schV") after, in insertion order —
  // which would strand Article 21A behind Article 395. Sort by the article's own
  // position in the text instead, so the list reads in constitutional order.
  var EXAM_LIST = Object.keys(EXAM).map(function (k) {
    var x = EXAM[k], label, sub, href, at;
    if (k === 'preamble') {
      label = 'Preamble'; sub = 'The Preamble'; href = '#/preamble';
      at = -1;
    } else if (k.indexOf('sch') === 0) {
      var id = k.slice(3);
      var si = -1;
      SCHEDULES.forEach(function (s, i) { if (s.id === id) si = i; });
      var sc = SCHEDULES[si];
      label = sc ? sc.name : 'Schedule ' + id;
      sub = sc ? sc.title : ''; href = '#/schedule/' + id;
      at = 1e6 + (si < 0 ? 99 : si);
    } else {
      var a = BY_NUM[k];
      label = 'Article ' + k;
      sub = a ? a.heading : ''; href = '#/article/' + k;
      at = a ? ARTS.indexOf(a) : 1e5;
    }
    return { key: k, x: x, label: label, sub: sub, href: href, at: at, tier: x.tier || 3 };
  }).sort(function (p, q) { return p.at - q.at; });

  var EXAM_BY_KEY = {};
  EXAM_LIST.forEach(function (e) { EXAM_BY_KEY[e.key] = e; });

  // the weight pills, shared by the inline block and the overlay
  function examPills(entry) {
    var t = TIER[entry.tier] || TIER[3];
    var s = '<span class="pill ' + t.pill + '">' + esc(t.label) + ' &middot; ' +
      esc(t.blurb) + '</span>';
    (entry.papers || []).forEach(function (p) {
      s += '<span class="pill grey">' + esc(p) + '</span>';
    });
    return s;
  }

  /* A sighting is either a bare string, which is uncited, or
     { s: text, p: paper key, q: question number }, which is cited. Everything
     that reads the field goes through here so the two shapes never have to be
     handled twice. */
  function sighting(c) {
    if (typeof c === 'string') return { text: c, cited: false };
    var paper = c.p ? PAPERS[c.p] : null;
    return {
      text: c.s || '',
      cited: !!c.p,
      key: c.p || '',
      q: c.q || '',
      // a key with no entry in papers.js is a dangling reference: still shown,
      // but not as a link, and check_citations.py fails on it
      name: paper ? paper.name : (c.p || ''),
      url: paper ? paper.url : ''
    };
  }

  function sightingLI(c) {
    var g = sighting(c);
    var li = '<li>' + esc(g.text);
    if (g.cited) {
      var label = (g.q ? 'Q' + esc(g.q) + ' &middot; ' : '') + esc(g.name);
      li += g.url
        ? ' <a class="cite" href="' + esc(g.url) + '" target="_blank" rel="noopener" ' +
          'title="Open the paper at upsc.gov.in">' + label + ' &#8599;</a>'
        : ' <span class="cite pending" title="No URL for this paper in ' +
          'site/data/papers.js yet">' + label + '</span>';
    }
    return li + '</li>';
  }

  // How many of a set of sightings carry a citation. Printed rather than
  // claimed, so the page cannot drift from the data.
  function citedCount(list) {
    return (list || []).filter(function (c) { return sighting(c).cited; }).length;
  }

  // A concept is { t: the point, d: what it means, explained }. A bare string
  // still renders, as the point with nothing after it.
  function conceptLI(c) {
    if (typeof c === 'string') return '<li><b>' + para(c) + '</b></li>';
    return '<li><b>' + para(c.t || '') + '</b>' +
      (c.d ? '<span>' + para(c.d) + '</span>' : '') + '</li>';
  }

  function examBody(entry) {
    var s = '';
    if (entry.why) s += '<div class="exam-why">' + para(entry.why, 'p') + '</div>';
    if (entry.concepts && entry.concepts.length) {
      s += '<div class="exam-sec"><h5>What it means, in plain words</h5>' +
        '<ul class="exam-list">' + entry.concepts.map(conceptLI).join('') + '</ul></div>';
    }
    if (entry.seen && entry.seen.length) {
      var nc = citedCount(entry.seen);
      s += '<div class="exam-sec"><h5>Seen in the papers' +
        '<span class="cite-count' + (nc ? ' some' : '') + '">' + nc + ' of ' +
        entry.seen.length + ' cited</span></h5>' +
        '<ul class="exam-list seen">' + entry.seen.map(sightingLI).join('') +
        '</ul></div>';
    }
    if (entry.trap) s += '<div class="exam-trap"><h5>&#9888; Where the mark is lost</h5>' +
      para(entry.trap, 'p') + '</div>';
    return s;
  }

  function examBlock(entry) {
    if (!entry) return '';
    return '<section class="exam"><header class="exam-head">' + examPills(entry) + '</header>' +
      examBody(entry) + '</section>';
  }

  // Clicking a row opens the note in place, the way a landmark judgment does,
  // rather than dropping the reader into the middle of a long article page.
  function openExam(key) {
    var e = EXAM_BY_KEY[key];
    if (!e) return;
    openSheet(
      '<div class="sheet-head">' +
      '<a class="cc-where" href="' + e.href + '">' + esc(e.label) + ' &rarr;</a>' +
      '<h2 id="sheetName">' + esc(e.sub) + '</h2>' +
      '<div class="case-meta">' + examPills(e.x) + '</div>' +
      '</div>' +
      examBody(e.x) +
      '<div class="sheet-foot"><a class="chip" href="' + e.href + '">Read ' +
      esc(e.label) + ' in full &rarr;</a>' +
      '<button class="chip" type="button" data-close="1">Close</button></div>');
  }

  function examRow(e) {
    var t = TIER[e.tier] || TIER[3];
    var chips = (e.x.concepts || []).slice(0, 3).map(function (c) {
      return '<span class="ex-chip">' +
        esc(shorten(typeof c === 'string' ? c : c.t, 46)) + '</span>';
    }).join('');
    return '<a class="ex-row t' + e.tier + '" href="' + e.href + '" data-k="' + esc(e.key) +
      '" title="Open the full note">' +
      '<span class="ex-rn">' + esc(e.label.replace(/^Article /, 'Art. ')) + '</span>' +
      '<span class="ex-body"><b>' + esc(e.sub) + '</b>' +
      '<small>' + esc(firstSentence(e.x.why)) + '</small>' +
      (chips ? '<span class="ex-chips">' + chips + '</span>' : '') + '</span>' +
      '<span class="ex-tier pill ' + t.pill + '">' + esc(t.label) + '</span></a>';
  }
  function shorten(s, n) {
    s = String(s || '');
    return s.length > n ? s.slice(0, n - 1).replace(/[\s,;—-]+$/, '') + '…' : s;
  }

  function pageExam(tier) {
    // #/exam/1 opens on the Core tier, so the menu bar can link straight to it.
    var want = tier || 'all';
    function tierBtn(t, label) {
      return '<button data-tier="' + t + '"' + (t === want ? ' class="on"' : '') + '>' +
        label + '</button>';
    }
    var n1 = EXAM_LIST.filter(function (e) { return e.tier === 1; }).length;
    var n2 = EXAM_LIST.filter(function (e) { return e.tier === 2; }).length;
    var arts = EXAM_LIST.filter(function (e) { return /^\d/.test(e.key); }).length;

    var s = '<div class="page-head"><div class="eyebrow">Priority list</div>' +
      '<h1>What the examiners ask</h1>' +
      '<p class="lede">' + arts + ' articles, the Preamble and eight Schedules, ranked by how ' +
      'often they actually turn up. Each one carries the concepts the question is really testing, ' +
      'the years it has been seen, and the place candidates lose the mark. The same block sits ' +
      'under the bare text on every article page, below the landmark judgments.</p></div>';

    s += '<div class="ex-tools">' +
      '<input id="examFilter" type="search" placeholder="Filter — try &ldquo;emergency&rdquo;, ' +
      '&ldquo;Money Bill&rdquo;, &ldquo;243&rdquo;, &ldquo;Rajya Sabha&rdquo;" ' +
      'autocomplete="off" spellcheck="false">' +
      '<div class="ex-sort">' +
      tierBtn('all', 'All ' + EXAM_LIST.length) +
      tierBtn('1', 'Core ' + n1) +
      tierBtn('2', 'Recurs ' + n2) +
      tierBtn('3', 'Worth holding ' + (EXAM_LIST.length - n1 - n2)) +
      '</div><div class="ex-count" id="examCount"></div></div>';

    s += '<div class="ex-list" id="examList">';
    [1, 2, 3].forEach(function (t) {
      var rows = EXAM_LIST.filter(function (e) { return e.tier === t; });
      if (!rows.length) return;
      s += '<div class="ex-band" data-band="' + t + '"><h3>' + esc(TIER[t].label) +
        ' &mdash; ' + esc(TIER[t].blurb) + '<span>' + rows.length + '</span></h3>' +
        rows.map(examRow).join('') + '</div>';
    });
    s += '</div>';

    s += '<div class="card ex-note"><h3>Where this ranking comes from</h3>' +
      '<p>The tiers, the paper tags and the sightings are <strong>written for this site</strong>. ' +
      'They describe what the previous-year papers of the UPSC Civil Services Prelims and Mains ' +
      'General Studies Paper II, UPPSC / UPPCS Mains and the polity sections of other State PSC ' +
      'papers have tested. No question paper and no coaching compilation is reproduced here, ' +
      'quoted here, or held in this project: nothing in this section was transcribed from a ' +
      'document, and it is the least verifiable part of the site. The commissions do not tag ' +
      'their own questions by article, so the mapping from a question to an article is editorial. ' +
      'A sighting listed by year records that the year&rsquo;s paper carried a question on that ' +
      'subject — it is not a claim about a numbered question, and it is not quoted from one. ' +
      'For the questions themselves, go to the official papers on upsc.gov.in.</p>' +
      '<p>A sighting can carry a citation — the paper, the question number and a link to it. ' +
      'Right now <strong>' + examCited() + ' of ' + examSightings() + '</strong> do. That number ' +
      'is counted from the data every time this page is drawn, so it cannot drift from the ' +
      'truth: a citation appears here only once somebody has opened the actual paper and read ' +
      'the question. <a href="' + esc(PAPERS_URL) + '" target="_blank" rel="noopener">' +
      'Previous question papers at upsc.gov.in &rarr;</a></p>' +
      '</div>';
    return s;
  }

  // Totals across the whole exam dataset, counted rather than recorded.
  function examSightings() {
    return Object.keys(EXAM).reduce(function (n, k) {
      return n + ((EXAM[k].seen || []).length);
    }, 0);
  }
  function examCited() {
    return Object.keys(EXAM).reduce(function (n, k) {
      return n + citedCount(EXAM[k].seen);
    }, 0);
  }

  function filterExam() {
    var box = $('#examFilter');
    if (!box) return;
    var q = box.value.trim().toLowerCase();
    var tierBtn = $('.ex-sort button.on');
    var tier = tierBtn ? tierBtn.getAttribute('data-tier') : 'all';
    var shown = 0;

    document.querySelectorAll('.ex-row').forEach(function (row) {
      var e = EXAM_LIST.filter(function (x) { return x.key === row.getAttribute('data-k'); })[0];
      var okTier = tier === 'all' || String(e.tier) === tier;
      var hay = (e.label + ' ' + e.sub + ' ' + examText(e.x)).toLowerCase();
      var ok = okTier && (!q || hay.indexOf(q) >= 0);
      row.hidden = !ok;
      if (ok) shown++;
    });
    document.querySelectorAll('.ex-band').forEach(function (b) {
      b.hidden = !b.querySelector('.ex-row:not([hidden])');
    });
    var c = $('#examCount');
    if (c) c.textContent = (q || tier !== 'all')
      ? shown + ' of ' + EXAM_LIST.length + ' shown'
      : EXAM_LIST.length + ' entries';
  }

  function pageSchedules() {
    var s = '<div class="page-head"><div class="eyebrow">Contents</div><h1>The twelve Schedules</h1>' +
      '<p class="lede">Schedules carry the detail the articles point at — which States exist, who may ' +
      'legislate on what, which languages are recognised, which laws are immune from a fundamental-rights ' +
      'challenge. Four of them (IX, X, XI, XII) were added by amendment.</p></div><div class="grid">';
    SCHEDULES.forEach(function (sc) {
      var n = sc.sections.reduce(function (t, x) { return t + x.blocks.length; }, 0);
      s += '<a class="card tile" href="#/schedule/' + sc.id + '">' +
        '<div class="rn">' + esc(sc.name.toUpperCase()) + (sc.articles ? ' &middot; Art. ' + esc(sc.articles) : '') + '</div>' +
        '<h3>' + esc(sc.title) + '</h3><p>' + n + ' entries</p></a>';
    });
    return s + '</div>';
  }

  function pageSchedule(id, want) {
    var sc = SCHEDULES.filter(function (x) { return x.id === id; })[0];
    if (!sc) return '<p class="empty">No such Schedule.</p>';
    var ex = EXPLAIN['sch' + id];
    var i = SCHEDULES.indexOf(sc), prev = SCHEDULES[i - 1], next = SCHEDULES[i + 1];
    var last = ARTS[ARTS.length - 1];
    var d = { flow: [], mind: [] };
    sortDiagrams(d, [], MAPS['sch' + id], 'For the ' + sc.name, false);
    var cases = judgmentsFor('sch' + id);
    var exam = EXAM['sch' + id];

    var s = '<div class="art-top"><nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a>' +
      '<span>&rsaquo;</span><a href="#/schedules">Schedules</a><span>&rsaquo;</span><b>' + esc(sc.name) + '</b></nav>' +
      '<div class="pager">' +
      (prev ? '<a href="#/schedule/' + prev.id + '" title="' + esc(prev.title) + '">&larr; ' + esc(prev.name) + '</a>'
        : last ? '<a href="#/article/' + last.num + '" title="The last article">&larr; Article ' + esc(last.num) + '</a>' : '') +
      (next ? '<a href="#/schedule/' + next.id + '" title="' + esc(next.title) + '">' + esc(next.name) + ' &rarr;</a>' : '') +
      '</div></div>' +
      '<header class="art-head"><div class="eyebrow">' + esc(sc.name) + '</div><h1>' + esc(sc.title) + '</h1>' +
      (sc.articles ? '<div class="tagline"><span class="pill grey">Attached to article ' + esc(sc.articles) +
        '</span></div>' : '') + '</header>';

    var text = '';
    sc.sections.forEach(function (sec) {
      text += tag(sec.title || 'The text') + '<table class="sched">' + sec.blocks.map(function (b) {
        return '<tr><td class="n">' + esc(b.n || '') + '</td><td>' + bareHTML(b.t, sc.notes) + '</td></tr>';
      }).join('') + '</table>';
    });
    text += fnList(sc.notes);

    s += tabbed('#/schedule/' + id, want, {
      text: { html: text },
      explain: { html: ex ? explainBlock(ex) : '' },
      flow: { html: diagramPane(d.flow), n: d.flow.length },
      maps: { html: diagramPane(d.mind), n: d.mind.length },
      judgments: { html: cases.length ? judgPane(cases, 'Judgments on the ' + sc.name, 'the ' + sc.name) : '',
                   n: cases.length },
      exams: { html: exam ? examBlock(exam) : '' }
    });
    return s;
  }

  // 106 amendments have been enacted; the footnotes trace articles for most of
  // them, but a few changed only a Schedule or a number, so fill the gaps from
  // the curated metadata rather than dropping those amendments off the list
  function allAmendments() {
    var byNum = {};
    AMENDS.forEach(function (m) { byNum[m.num] = m; });
    var out = [];
    for (var n = 1; n <= 106; n++) {
      out.push(byNum[n] || {
        num: n, year: (AMETA[n] || {}).year || '',
        articles: [], schedules: [], wef: []
      });
    }
    return out;
  }

  function pageAmendments() {
    var list = allAmendments();
    var traced = AMENDS.length;
    var s = '<div class="page-head"><div class="eyebrow">Since 1950</div><h1>All 106 amendments</h1>' +
      '<p class="lede">The articles listed against an amendment are read straight out of the ' +
      'footnotes printed under the official text, so they are the ones the government\'s own ' +
      'edition credits to it — ' + traced + ' of the 106 leave such a trace. The latest in force ' +
      'is the 106th (2023), which reserved one-third of Lok Sabha and State Assembly seats for ' +
      'women. Nothing after it has been enacted.</p></div>';
    s += '<div class="section-tag">Newest first</div>';
    list.slice().reverse().forEach(function (m) {
      var meta = AMETA[m.num] || {};
      s += '<details class="acc"><summary>' + ordinal(m.num) + ' Amendment' +
        (m.year ? ', ' + esc(m.year) : '') +
        (meta.short ? ' — ' + esc(meta.short) : '') + '</summary><div>';
      if (meta.what) s += '<p>' + esc(meta.what) + '</p>';
      s += '<p>' + commencement(m) + '</p>';
      if (m.articles.length) {
        s += '<div class="chiprow">';
        m.articles.forEach(function (r) {
          var n = r.replace('Art. ', '');
          s += BY_NUM[n]
            ? '<button class="chip peek" type="button" data-peek="art:' + esc(n) + '">' +
              esc(r) + '</button>'
            : '<span class="chip">' + esc(r) + '</span>';
        });
        s += '</div>';
      }
      if (m.schedules.length) s += '<p style="margin-top:8px;font-size:13px;color:var(--ink-faint)">Also touched: ' +
        esc(m.schedules.join(', ')) + '</p>';
      s += '</div></details>';
    });
    return s;
  }

  function ordinal(n) {
    var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  function pageCases() {
    var s = '<div class="page-head"><div class="eyebrow">Case law</div>' +
      '<h1>Landmark judgments</h1><p class="lede">' + REG.length +
      ' judgments that changed what an article means. Click one to read it on its own page. ' +
      'A few are filed under more than one article, because they decided more than one thing.</p></div>';

    s += '<div class="case-tools">' +
      '<input id="caseFilter" type="search" placeholder="Filter by case, article or year, for example Kesavananda or 1978" autocomplete="off" spellcheck="false">' +
      '<div class="case-sort" role="group" aria-label="Sort">' +
      '<button type="button" class="on" data-sort="order">Constitutional order</button>' +
      '<button type="button" data-sort="year">Newest first</button>' +
      '</div></div>';

    s += '<div class="case-count" id="caseCount"></div>';
    s += '<div class="jgrid" id="caseGrid">' + REG.map(judgCard).join('') + '</div>';
    return s;
  }

  /* ---------- overlays ---------- */

  var _lastFocus = null;

  // One overlay at a time, and focus goes back where it came from when it
  // closes. kind: true for a diagram, which needs more room than a note does,
  // or 'jdrawer' for a judgment drawn in from the right of the page.
  function openSheet(inner, kind) {
    closeSheet();
    _lastFocus = document.activeElement;
    var mod = kind === true ? ' wide' : kind ? ' ' + kind : '';
    var box = document.createElement('div');
    box.className = 'sheet-wrap' + (kind === 'jdrawer' ? ' jdrawer-wrap' : '');
    box.innerHTML =
      '<div class="sheet-back" data-close="1"></div>' +
      '<div class="sheet' + mod + '" role="dialog" aria-modal="true" ' +
      'aria-labelledby="sheetName">' +
      '<button class="sheet-x" type="button" data-close="1" aria-label="Close">&times;</button>' +
      '<div class="sheet-body">' + inner + '</div></div>';
    document.body.appendChild(box);
    document.body.classList.add('sheet-open');
    box.querySelector('.sheet-x').focus();
  }

  function closeSheet() {
    var open = $('.sheet-wrap');
    if (!open) return;
    open.remove();
    document.body.classList.remove('sheet-open');
    document.querySelectorAll('.jcard.on').forEach(function (c) { c.classList.remove('on'); });
    if (_lastFocus && _lastFocus.focus) _lastFocus.focus();
    _lastFocus = null;
  }

  function filterCases() {
    var box = $('#caseFilter'), grid = $('#caseGrid'), count = $('#caseCount');
    if (!grid) return;
    var q = (box ? box.value : '').trim().toLowerCase();
    var shown = 0;
    [].slice.call(grid.children).forEach(function (card) {
      var r = REG_BY[card.getAttribute('data-id')], j = r.j || {};
      var hay = [r.short, r.name, r.year, benchText(r), j.result, j.aka, (j.tags || []).join(' '),
        j.summary, r.keys.map(keyLabel).join(' '), r.keys.map(keyShort).join(' '), r.c.why]
        .join(' ').toLowerCase();
      var hit = !q || q.split(/\s+/).every(function (t) { return hay.includes(t); });
      card.hidden = !hit;
      if (hit) shown++;
    });
    count.textContent = q ? shown + ' of ' + REG.length + ' judgments' : REG.length + ' judgments';
  }

  function sortCases(mode) {
    var grid = $('#caseGrid');
    if (!grid) return;
    var list = mode === 'year'
      ? REG.slice().sort(function (x, y) { return y.year - x.year || x.order - y.order; })
      : REG;
    grid.innerHTML = list.map(judgCard).join('');
    document.querySelectorAll('.case-sort button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-sort') === mode);
    });
    filterCases();
  }

  // Where a map's key points. A section key carries the Part and the section
  // name - "partV.IV:The Union Judiciary" - and the section's position in the
  // Part is what the route needs.
  function mapTarget(k) {
    var tab = firstSpec(MAPS[k]).type === 'flow' ? '/flow' : '/maps';
    if (k === 'preamble') return '#/preamble' + tab;
    if (k.indexOf('sch') === 0) return '#/schedule/' + k.slice(3) + tab;
    if (k.indexOf('part') !== 0) return '#/article/' + k + tab;
    var rest = k.slice(4);
    var m = rest.match(/^([IVXAB]+)(?:\.[IVX]+)?:(.*)$/);
    if (!m) return '#/part/' + rest;
    var secs = partSections(m[1]);
    for (var i = 0; i < secs.length; i++) {
      if (secs[i].mapKey === k) return '#/part/' + m[1] + '/' + i;
    }
    return '#/part/' + m[1];
  }

  function pageMaps() {
    var s = '<div class="page-head"><div class="eyebrow">Visual index</div><h1>Mind maps &amp; flow diagrams</h1>' +
      '<p class="lede">The processes the Constitution describes in prose, drawn as steps. Every Part also ' +
      'has an automatically generated mind map on its own page.</p></div>';
    var keys = Object.keys(MAPS);
    if (!keys.length) return s + '<p class="empty">No diagrams defined yet.</p>';
    var drawn = [];
    keys.forEach(function (k) {
      var m = MAPS[k];
      (Array.isArray(m) ? m : [m]).forEach(function (spec) {
        // one key is an alias of another, so the same diagram can come round twice
        if (drawn.indexOf(spec) >= 0) return;
        drawn.push(spec);
        var target = mapTarget(k);
        s += '<div class="section-tag">' + esc(spec.title || k) +
          ' &nbsp;<a href="' + target + '" style="text-transform:none;letter-spacing:0;font-weight:600">open &rarr;</a></div>' +
          renderDiagram(spec);
      });
    });
    return s;
  }

  /* ---------- search ---------- */

  function search(q) {
    q = q.trim();
    if (!q) return [];
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    var direct = q.replace(/^(art(icle)?\.?\s*)/i, '').toUpperCase().replace(/\s+/g, '');
    var hits = [];

    ARTS.forEach(function (a) {
      var ex = explainOf(a.num) || {};
      var cs = CASES[a.num] || CASES[a.alias] || [];
      var caseText = cs.map(function (c) {
        return [c.case, c.full, c.year, c.facts, c.held, c.why].join(' ');
      }).join(' ');
      var examHay = examText(examOf(a));
      var hay = (a.num + ' ' + a.heading + ' ' + (a.group || '') + ' ' +
        a.paras.map(function (p) { return p.t; }).join(' ') + ' ' +
        (ex.simple || '') + ' ' + (ex.catch || '') + ' ' + (ex.note || '') + ' ' +
        caseText + ' ' + examHay).toLowerCase();
      var score = 0;
      if (a.num === direct) score += 1000;
      terms.forEach(function (t) {
        if (!hay.includes(t)) { score = -1e9; return; }
        if (a.heading.toLowerCase().includes(t)) score += 40;
        if (cs.some(function (c) { return (c.case + ' ' + (c.full || '')).toLowerCase().includes(t); }))
          score += 30;
        if ((ex.simple || '').toLowerCase().includes(t)) score += 12;
        score += 3;
      });
      if (score > 0) hits.push({ score: score, a: a, ex: ex });
    });

    // Schedules carry their own explanations and their own landmark cases
    // (Kihoto under the Tenth, Coelho under the Ninth), so search them too.
    SCHEDULES.forEach(function (sc) {
      var ex = EXPLAIN['sch' + sc.id] || {};
      var cs = CASES['sch' + sc.id] || [];
      var body = sc.sections.map(function (sec) {
        return sec.title + ' ' + sec.blocks.map(function (b) { return b.t; }).join(' ');
      }).join(' ');
      var hay = (sc.name + ' ' + sc.title + ' ' + body + ' ' +
        (ex.simple || '') + ' ' + (ex.catch || '') + ' ' +
        cs.map(function (c) {
          return [c.case, c.full, c.facts, c.held, c.why].join(' ');
        }).join(' ')).toLowerCase();
      var score = 0;
      terms.forEach(function (t) {
        if (!hay.includes(t)) { score = -1e9; return; }
        if ((sc.name + ' ' + sc.title).toLowerCase().includes(t)) score += 40;
        if (cs.some(function (c) { return c.case.toLowerCase().includes(t); })) score += 30;
        score += 3;
      });
      if (score > 0) hits.push({ score: score, sc: sc, ex: ex });
    });

    // The judgments themselves, so a case name leads to its own page.
    REG.forEach(function (r) {
      var j = r.j || {};
      var hay = [r.short, r.name, j.full, j.aka, r.year, (j.tags || []).join(' '), j.summary,
        (j.question || []).join(' '), (j.facts || []).join(' '),
        (j.held || []).map(function (h) { return h.label + ' ' + (h.points || []).join(' '); }).join(' '),
        (j.principles || []).join(' '), (j.legacy || []).join(' '),
        r.c.facts, r.c.held, r.c.why].join(' ').toLowerCase();
      var names = (r.short + ' ' + r.name + ' ' + (j.aka || '')).toLowerCase();
      var score = 0;
      terms.forEach(function (t) {
        if (!hay.includes(t)) { score = -1e9; return; }
        if (names.includes(t)) score += 60;
        score += 2;
      });
      if (score > 0) hits.push({ score: score, jr: r });
    });

    hits.sort(function (x, y) { return y.score - x.score; });
    return hits.slice(0, 60);
  }

  function pageSearch(q) {
    var hits = search(q);
    var s = '<div class="page-head"><div class="eyebrow">Search</div><h1>' + esc(q) + '</h1>' +
      '<p class="lede">' + hits.length + ' result' + (hits.length === 1 ? '' : 's') +
      ' — article numbers and headings, the bare text, the Schedules, the plain-language ' +
      'explanations and the landmark judgments are all searched.</p></div>';
    if (!hits.length) return s + '<p class="empty">Nothing matched. Try an article number, a word ' +
      'like <em>ordinance</em>, <em>reservation</em>, <em>emergency</em>, or a case name like ' +
      '<em>Kesavananda</em>.</p>';
    hits.forEach(function (h) {
      if (h.jr) {
        s += '<a class="hit" href="#/judgment/' + h.jr.id + '">' +
          '<b class="h">Judgment</b> &nbsp;<b>' + esc(h.jr.short + ', ' + h.jr.year) + '</b>' +
          '<div class="snip">' + highlight((h.jr.j && h.jr.j.summary) || firstSentence(h.jr.c.held), q) +
          '</div></a>';
        return;
      }
      if (h.sc) {
        var body = h.sc.sections[0] && h.sc.sections[0].blocks[0] ? h.sc.sections[0].blocks[0].t : '';
        s += '<a class="hit" href="#/schedule/' + h.sc.id + '">' +
          '<b class="h">' + esc(h.sc.name) + '</b> &nbsp;<b>' + esc(h.sc.title) + '</b>' +
          '<div class="snip">' + highlight(firstSentence((h.ex.simple || body).replace(/⟦\d+⟧/g, '')), q) +
          '</div></a>';
        return;
      }
      var snip = h.ex.simple || (h.a.paras[0] ? h.a.paras[0].t : '');
      s += '<a class="hit" href="#/article/' + h.a.num + '">' +
        '<b class="h">Art. ' + esc(h.a.num) + '</b> &nbsp;<b>' + esc(h.a.heading) + '</b>' +
        '<div class="snip">' + highlight(firstSentence(snip.replace(/⟦\d+⟧/g, '')), q) + '</div></a>';
    });
    return s;
  }

  function highlight(text, q) {
    var out = esc(text);
    q.trim().split(/\s+/).filter(function (t) { return t.length > 2; }).forEach(function (t) {
      out = out.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
    });
    return out;
  }

  /* ---------- the menu bar ---------- */

  /* Six ways into the site from wherever you are. A menu is drawn when it
     opens rather than once at load, because the most useful thing in it is
     about the page you are on: reading Article 324, Mind Maps offers the map
     for Part XV first and the index of every map after it. Maps, amendments
     and exam notes open over the page, so a look-up does not cost you your
     place. A judgment opens on its own page. */
  var NAV = [
    { id: 'articles', label: 'All Articles', build: navArticles, wide: true,
      on: /^#\/(article|part|parts|preamble)(\/|$)/ },
    { id: 'exam', label: 'Important Articles', build: navExam, on: /^#\/exam(\/|$)/ },
    { id: 'maps', label: 'Mind Maps', build: navMaps, wide: true, on: /^#\/maps$/ },
    { id: 'cases', label: 'Judgments', build: navCases, on: /^#\/(cases|judgment)(\/|$)/ },
    { id: 'amend', label: 'Amendments', build: navAmend, on: /^#\/amendments$/ },
    { id: 'sched', label: 'Schedules', build: navSched, on: /^#\/schedules?(\/|$)/ }
  ];
  var NAV_OPEN = null;

  // Where to start with the case law. An editorial pick, not a ranking - the
  // whole set is one click further on.
  var START_CASES = ['Golak Nath', 'Kesavananda Bharati', 'Maneka Gandhi', 'Minerva Mills',
    'Indra Sawhney', 'S.R. Bommai', 'Vishaka', 'Puttaswamy'];
  // Likewise the amendments a reader is most often sent to.
  var KEY_AMENDS = [1, 7, 24, 42, 44, 52, 61, 73, 74, 86, 101, 103, 106];

  function navById(id) {
    return NAV.filter(function (n) { return n.id === id; })[0] || null;
  }

  function buildTopnav() {
    $('#topnav').innerHTML = NAV.map(function (n) {
      return '<button class="tn" type="button" data-nav="' + n.id + '" aria-haspopup="true" ' +
        'aria-expanded="false" aria-controls="navPanel">' + esc(n.label) +
        '<svg class="tn-c" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5l3 3 3-3" ' +
        'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" ' +
        'stroke-linejoin="round"/></svg></button>';
    }).join('');
  }

  function markNav(hash) {
    document.querySelectorAll('.tn').forEach(function (b) {
      var n = navById(b.getAttribute('data-nav'));
      b.classList.toggle('on', !!n && n.on.test(hash));
    });
  }

  // How far below the top of the window a scrolled-to heading has to land to
  // clear the header - one row on a wide screen, two on anything narrower.
  function scrollPad() {
    var bar = $('.topbar');
    return (bar ? bar.offsetHeight : 58) + 16;
  }

  // Where the reader is, in the terms the menus care about.
  function navContext() {
    var h = location.hash || '#/', m, ctx = {};
    if ((m = h.match(/^#\/article\/([^\/]+)/))) {
      var a = BY_NUM[decodeURIComponent(m[1])];
      if (a) {
        var secs = partSections(a.part);
        ctx.art = a; ctx.part = a.part; ctx.name = 'Article ' + a.num;
        ctx.sec = secs[secs.length > 1 ? sectionOf(a, secs) : 0] || null;
      }
    } else if ((m = h.match(/^#\/part\/([^\/]+)/))) {
      var num = decodeURIComponent(m[1]);
      if (PART_BY[num]) {
        var ps = partSections(num);
        // on a Part page, the section the rail says is in view
        var on = document.querySelector('#main [data-goto].on');
        ctx.part = num; ctx.name = 'Part ' + num;
        ctx.sec = ps[on ? +on.getAttribute('data-goto') : 0] || null;
      }
    } else if (/^#\/preamble(\/|$)/.test(h)) {
      ctx.preamble = true; ctx.name = 'the Preamble';
    } else if ((m = h.match(/^#\/schedule\/([^\/]+)/))) {
      ctx.sch = scheduleById(decodeURIComponent(m[1]));
      if (ctx.sch) ctx.name = 'the ' + ctx.sch.name;
    }
    return ctx;
  }
  function scheduleById(id) {
    return SCHEDULES.filter(function (x) { return x.id === id; })[0] || null;
  }
  // The key a page's own entry is filed under in CASES or EXAM, if it has one.
  function ownKey(ctx, store) {
    if (ctx.art) {
      if (store[ctx.art.num]) return ctx.art.num;
      return ctx.art.alias && store[ctx.art.alias] ? ctx.art.alias : null;
    }
    if (ctx.preamble) return store.preamble ? 'preamble' : null;
    if (ctx.sch) return store['sch' + ctx.sch.id] ? 'sch' + ctx.sch.id : null;
    return null;
  }

  // One line of a menu. t is HTML the caller has already escaped.
  function npRow(o) {
    var link = !!o.href;
    return (link ? '<a href="' + esc(o.href) + '"' : '<button type="button" ' + o.data) +
      ' class="np-row' + (o.cur ? ' cur' : '') + (o.cls ? ' ' + o.cls : '') + '"' +
      (o.tip ? ' title="' + esc(o.tip) + '"' : '') + '>' +
      (o.n != null ? '<span class="np-n">' + esc(o.n) + '</span>' : '') +
      '<span class="np-t">' + o.t + '</span>' +
      (o.c != null && o.c !== '' ? '<span class="np-c">' + esc(o.c) + '</span>' : '') +
      (link ? '</a>' : '</button>');
  }
  function npHead(text) { return '<div class="np-h">' + esc(text) + '</div>'; }
  function npHere(ctx, body) {
    return '<div class="np-sec np-here">' + npHead('For ' + ctx.name) + body + '</div>';
  }
  function firstSpec(m) { return (Array.isArray(m) ? m[0] : m) || {}; }

  function navArticles(ctx) {
    var s = '<div class="np-sec np-top">' +
      npRow({ href: '#/preamble', t: 'The Preamble', cur: ctx.preamble }) +
      npRow({ href: '#/parts', t: 'All ' + PARTS.length + ' Parts', c: ARTS.length + ' articles' }) +
      npRow({ href: '#/schedules', t: 'The ' + SCHEDULES.length + ' Schedules' }) +
      '</div>';
    s += '<div class="np-sec">' + npHead('Parts') + '<div class="np-cols">';
    PARTS.forEach(function (p) {
      var list = artsOfPart(p.num);
      var live = list.filter(function (a) { return !a.omitted; });
      var first = list.length ? list[0].num : '', last = list.length ? list[list.length - 1].num : '';
      s += npRow({ href: '#/part/' + p.num, n: p.num, t: esc(title(p.title)),
        c: !live.length ? 'repealed' : first === last ? first : first + '\u2013' + last,
        cur: ctx.part === p.num });
    });
    return s + '</div></div>';
  }

  function navExam(ctx) {
    var s = '', key = ownKey(ctx, EXAM);
    if (key && EXAM_BY_KEY[key]) {
      var e = EXAM_BY_KEY[key], t = TIER[e.tier] || TIER[3];
      s += npHere(ctx, npRow({ data: 'data-navexam="' + esc(key) + '"',
        t: '<span class="pill ' + t.pill + '">' + esc(t.label) + '</span> ' + esc(t.blurb),
        c: 'Open the note' }));
    } else if (ctx.art || ctx.preamble || ctx.sch) {
      s += npHere(ctx, '<p class="np-p">Not on the priority list.</p>');
    }

    s += '<div class="np-sec">' + npHead('Ranked by how often they are asked');
    [1, 2, 3].forEach(function (t) {
      s += npRow({ href: '#/exam/' + t, c: EXAM_LIST.filter(function (e) { return e.tier === t; }).length,
        t: '<b>' + esc(TIER[t].label) + '</b> <span class="np-d">' + esc(TIER[t].blurb) + '</span>' });
    });
    s += npRow({ href: '#/exam', t: 'The whole list', c: EXAM_LIST.length, cls: 'np-all' }) + '</div>';

    var core = EXAM_LIST.filter(function (e) { return e.tier === 1; });
    if (core.length) {
      s += '<div class="np-sec">' + npHead('Core \u2014 straight to the text') + '<div class="np-chips">' +
        core.map(function (e) {
          return '<a class="np-chip" href="' + esc(e.href) + '" title="' +
            esc(e.label + ' \u2014 ' + e.sub) + '">' + esc(e.label.replace(/^Article /, '')) + '</a>';
        }).join('') + '</div></div>';
    }
    return s;
  }

  // Every drawn map, grouped by where it sits in the Constitution and in the
  // order the Constitution prints. Built once: the maps do not change.
  var MAP_GROUPS = null;
  function mapGroups() {
    if (MAP_GROUPS) return MAP_GROUPS;
    var seen = [], by = {}, out = [];
    Object.keys(MAPS).forEach(function (k) {
      var m = MAPS[k];
      if (seen.indexOf(m) >= 0) return;       // an alias would list a map twice
      seen.push(m);
      var gk, label = firstSpec(m).title || k, n = '', at = -1;
      if (k === 'preamble') {
        gk = 'preamble';
      } else if (k.indexOf('sch') === 0) {
        gk = 'sch'; n = k.slice(3); at = SCHEDULES.indexOf(scheduleById(n));
      } else if (k.indexOf('part') === 0) {
        var pm = k.slice(4).match(/^([IVXAB]+)(?:\.[IVX]+)?(?::(.*))?$/);
        if (!pm || !PART_BY[pm[1]]) return;
        gk = pm[1];
        if (pm[2] != null) {
          partSections(pm[1]).forEach(function (g) {
            if (g.mapKey !== k) return;
            label = sectionTitle(g);
            n = g.range.replace(/^Art\. /, '');
            at = ARTS.indexOf(g.arts[0]);
          });
        }
      } else {
        var a = BY_NUM[k];
        if (!a) return;
        gk = a.part; n = a.num; at = ARTS.indexOf(a);
      }
      if (!by[gk]) {
        by[gk] = { items: [],
          label: gk === 'preamble' ? 'Preamble' : gk === 'sch' ? 'Schedules' : partLabel(gk),
          order: gk === 'preamble' ? -1 : gk === 'sch' ? 1e3 : PARTS.indexOf(PART_BY[gk]) };
        out.push(by[gk]);
      }
      by[gk].items.push({ key: k, label: label, n: n, at: at });
    });
    out.sort(function (x, y) { return x.order - y.order; });
    out.forEach(function (g) { g.items.sort(function (x, y) { return x.at - y.at; }); });
    return (MAP_GROUPS = out);
  }

  function navMaps(ctx) {
    var here = [], seen = [];
    function offer(key, label) {
      var m = mapFor(key);
      if (!m || seen.indexOf(MAPS[key] || key) >= 0) return;
      seen.push(MAPS[key] || key);
      here.push(npRow({ data: 'data-navmap="' + esc(key) + '"', cls: 'np-map',
        t: mapIco('np-ico') + '<span>' + esc(label) + '</span>',
        c: firstSpec(m).type === 'flow' ? 'flow diagram' : '' }));
    }
    if (ctx.part) {
      var got = articleMap(ctx.part, ctx.sec);
      if (got) offer(got.key, 'Mind map on ' + got.label);
    }
    // An article with a drawing of its own - unless it is the same drawing,
    // as Article 123's is.
    if (ctx.art && MAPS[ctx.art.num]) offer(ctx.art.num, firstSpec(MAPS[ctx.art.num]).title);
    if (ctx.preamble && MAPS.preamble) offer('preamble', firstSpec(MAPS.preamble).title);
    if (ctx.sch && MAPS['sch' + ctx.sch.id]) offer('sch' + ctx.sch.id, firstSpec(MAPS['sch' + ctx.sch.id]).title);

    var s = here.length ? npHere(ctx, here.join('')) : '';
    s += '<div class="np-sec"><div class="np-hrow">' + npHead('Every drawn map, in constitutional order') +
      '<a class="np-more" href="#/maps">All on one page &rarr;</a></div><div class="np-cols">' +
      mapGroups().map(function (g) {
        return '<div class="np-group"><div class="np-gh">' + esc(g.label) + '</div>' +
          g.items.map(function (it) {
            return npRow({ data: 'data-navmap="' + esc(it.key) + '"', n: it.n, t: esc(it.label) });
          }).join('') + '</div>';
      }).join('') + '</div></div>';
    return s;
  }

  function navCases(ctx) {
    var s = '', key = ownKey(ctx, CASES);
    if (key) {
      s += npHere(ctx, judgmentsFor(key).map(function (r) {
        // "Association for Democratic Reforms (2002)" already carries its year
        return npRow({ href: '#/judgment/' + r.id, t: esc(r.short),
          c: r.short.indexOf(String(r.year)) >= 0 ? '' : r.year });
      }).join(''));
    } else if (ctx.art || ctx.preamble || ctx.sch) {
      s += npHere(ctx, '<p class="np-p">No landmark judgment is filed under ' + esc(ctx.name) + '.</p>');
    }
    s += '<div class="np-sec">' +
      npRow({ href: '#/cases', t: 'All ' + caseCount() + ' landmark judgments', cls: 'np-all' }) + '</div>';

    // exact names: "Puttaswamy" and "Puttaswamy (Aadhaar)" are different cases
    var start = START_CASES.map(function (name) {
      return REG.filter(function (r) { return r.short === name; })[0];
    }).filter(Boolean);
    if (start.length) {
      s += '<div class="np-sec">' + npHead('Start with these') + start.map(function (r) {
        var k = r.keys[0];
        return npRow({ href: '#/judgment/' + r.id, t: esc(r.short), c: r.year,
          n: k === 'preamble' ? 'Pre.' : k.indexOf('sch') === 0 ? 'Sch. ' + k.slice(3) : k });
      }).join('') + '</div>';
    }
    return s;
  }

  function navAmend(ctx) {
    var s = '', all = allAmendments();
    if (ctx.art) {
      var chips = (ctx.art.amendments || []).map(function (label) {
        var n = amendNumber(label);
        return n ? '<button class="np-chip" type="button" data-navamd="' + n + '">' + esc(label) + '</button>' : '';
      }).join('');
      s += npHere(ctx, chips ? '<div class="np-chips">' + chips + '</div>'
        : '<p class="np-p">No amendment is footnoted against this article.</p>');
    }
    s += '<div class="np-sec">' +
      npRow({ href: '#/amendments', t: 'All 106 amendments, newest first', cls: 'np-all' }) + '</div>';
    s += '<div class="np-sec">' + npHead('Landmark amendments') +
      KEY_AMENDS.filter(function (n) { return AMETA[n]; }).map(function (n) {
        return npRow({ data: 'data-navamd="' + n + '"', n: ordinal(n), t: esc(AMETA[n].short),
          c: all[n - 1] ? all[n - 1].year : '' });
      }).join('') + '</div>';
    return s;
  }

  function navSched(ctx) {
    return '<div class="np-sec">' + SCHEDULES.map(function (sc) {
      return npRow({ href: '#/schedule/' + sc.id, n: sc.id, t: esc(sc.title), tip: sc.name,
        cur: ctx.sch === sc });
    }).join('') + '</div><div class="np-sec">' +
      npRow({ href: '#/schedules', t: 'All ' + SCHEDULES.length + ' Schedules', cls: 'np-all' }) + '</div>';
  }

  // A key the maps know, or a Part with no hand-drawn map, which gets the one
  // generated from its articles - the same fallback the Part page uses.
  function mapFor(k) {
    if (MAPS[k]) return MAPS[k];
    var pm = /^part([IVXAB]+)$/.exec(k);
    return pm && PART_BY[pm[1]] ? autoPartMap(pm[1]) : null;
  }
  function mapName(k) {
    if (k === 'preamble') return 'The Preamble';
    if (k.indexOf('sch') === 0) {
      var sc = scheduleById(k.slice(3));
      return sc ? sc.name : k;
    }
    if (k.indexOf('part') === 0) {
      var pm = k.slice(4).match(/^([IVXAB]+)(?:\.[IVX]+)?(?::(.*))?$/);
      if (!pm) return k;
      var name = partLabel(pm[1]);
      if (pm[2] != null) partSections(pm[1]).forEach(function (g) {
        if (g.mapKey === k) name = sectionTitle(g);
      });
      return name;
    }
    return BY_NUM[k] ? 'Article ' + k + ' \u2014 ' + BY_NUM[k].heading : 'Article ' + k;
  }

  function openMap(k) {
    var m = mapFor(k);
    if (!m) return;
    var href = mapTarget(k);
    openSheet(
      '<div class="sheet-head">' +
      '<a class="cc-where" href="' + esc(href) + '">' +
      (firstSpec(m).type === 'flow' ? 'Flow diagram' : 'Mind map') + ' &rarr;</a>' +
      '<h2 id="sheetName">' + esc(mapName(k)) + '</h2></div>' +
      diagrams(m, true) +
      '<div class="sheet-foot"><a class="chip" href="' + esc(href) + '">Go to the articles &rarr;</a>' +
      '<a class="chip" href="#/maps">Every map &rarr;</a>' +
      '<button class="chip" type="button" data-close="1">Close</button></div>', true);
  }

  function openAmend(n) {
    var m = allAmendments()[n - 1];
    if (!m) return;
    var meta = AMETA[n] || {};
    var arts = (m.articles || []).map(function (r) {
      var k = r.replace('Art. ', '');
      return BY_NUM[k] ? '<a class="chip" href="#/article/' + esc(k) + '">' + esc(r) + '</a>'
        : '<span class="chip">' + esc(r) + '</span>';
    }).join('');
    openSheet(
      '<div class="sheet-head">' +
      '<a class="cc-where" href="#/amendments">' + ordinal(n) + ' Amendment' +
      (m.year ? ' &middot; ' + esc(m.year) : '') + ' &rarr;</a>' +
      '<h2 id="sheetName">' + esc(meta.short || ordinal(n) + ' Amendment') + '</h2>' +
      '<div class="case-meta">' + commencement(m) + '</div></div>' +
      (meta.what ? '<p>' + para(meta.what) + '</p>' : '') +
      (arts ? '<div class="section-tag">Articles it touched</div><div class="chiprow">' + arts + '</div>' : '') +
      ((m.schedules || []).length ? '<p class="sm">Also touched: ' + esc(m.schedules.join(', ')) + '</p>' : '') +
      '<div class="sheet-foot"><a class="chip" href="#/amendments">All 106 amendments &rarr;</a>' +
      '<button class="chip" type="button" data-close="1">Close</button></div>');
  }

  function openNav(id, byKeyboard) {
    var n = navById(id), panel = $('#navPanel'), btn = $('.tn[data-nav="' + id + '"]');
    if (!n || !panel || !btn) return;
    closeNav();
    panel.className = 'nav-panel' + (n.wide ? ' wide' : '');
    panel.innerHTML = n.build(navContext());
    panel.hidden = false;
    panel.scrollTop = 0;
    btn.setAttribute('aria-expanded', 'true');
    NAV_OPEN = id;
    placeNav();
    if (byKeyboard) {
      var first = panel.querySelector('a, button');
      if (first) first.focus();
    }
  }

  // Hidden, not emptied: a link inside it may be mid-click.
  function closeNav(refocus) {
    if (!NAV_OPEN) return;
    var btn = $('.tn[data-nav="' + NAV_OPEN + '"]');
    $('#navPanel').hidden = true;
    NAV_OPEN = null;
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      if (refocus) btn.focus();
    }
  }

  // Under the button that opened it, and never off the edge of the screen. On
  // a phone the stylesheet pins it to both edges and this stands aside.
  function placeNav() {
    var panel = $('#navPanel'), btn = NAV_OPEN && $('.tn[data-nav="' + NAV_OPEN + '"]');
    if (!btn) return;
    if (window.matchMedia('(max-width: 900px)').matches) { panel.style.left = ''; return; }
    var bar = $('.topbar').getBoundingClientRect();
    var left = btn.getBoundingClientRect().left - bar.left;
    panel.style.left = Math.max(12, Math.min(left, bar.width - panel.offsetWidth - 12)) + 'px';
  }

  function initNav() {
    buildTopnav();
    markNav(location.hash || '#/');

    document.addEventListener('click', function (e) {
      var t = e.target;
      if (!t.closest) return;
      var tn = t.closest('.tn');
      if (tn) {
        var id = tn.getAttribute('data-nav');
        if (NAV_OPEN === id) closeNav();
        else openNav(id, e.detail === 0);
        return;
      }
      if (!NAV_OPEN) return;
      if (!t.closest('#navPanel')) { closeNav(); return; }
      var act = t.closest('[data-navmap], [data-navamd], [data-navexam]');
      if (act) {
        var map = act.getAttribute('data-navmap'),
            amd = act.getAttribute('data-navamd'), ex = act.getAttribute('data-navexam');
        // Close first, so the overlay hands focus back to the menu button
        // rather than to a row that is no longer on screen.
        closeNav(true);
        if (map) openMap(map);
        else if (amd) openAmend(+amd);
        else if (ex) openExam(ex);
        return;
      }
      // A link to the page you are already on fires no hashchange, so route()
      // would never close the menu for it.
      if (t.closest('a')) closeNav();
    });

    // With one menu open, pointing at another opens that one - with a mouse.
    // A tap sends pointerover too, and would open a menu its click then shut.
    document.addEventListener('pointerover', function (e) {
      if (!NAV_OPEN || e.pointerType !== 'mouse' || !e.target.closest) return;
      var tn = e.target.closest('.tn');
      if (tn && tn.getAttribute('data-nav') !== NAV_OPEN) openNav(tn.getAttribute('data-nav'));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && NAV_OPEN) closeNav(true);
    });
    document.addEventListener('focusin', function (e) {
      if (NAV_OPEN && e.target.closest && !e.target.closest('#navPanel, .tn')) closeNav();
    });

    // The search box is narrower with the menus beside it. Its full hint is
    // cut off mid-word below about 400px, so it says less rather than half.
    var box = $('#search'), full = box.getAttribute('placeholder');
    function fitHint() {
      var w = box.clientWidth;
      box.setAttribute('placeholder', w >= 400 ? full
        : w >= 250 ? 'Search \u2014 try 21, or \u201chabeas corpus\u201d' : 'Search');
    }
    fitHint();
    window.addEventListener('resize', function () { fitHint(); placeNav(); });
  }

  /* ---------- router ---------- */

  function route() {
    var h = location.hash || '#/';
    var main = $('#main'), out, home = false;
    var m;
    if ((m = h.match(/^#\/article\/([^\/]+)(?:\/([a-z]+))?$/)))
      out = pageArticle(decodeURIComponent(m[1]), m[2]);
    else if ((m = h.match(/^#\/part\/([^\/]+)(?:\/([^\/]+))?$/)))
      out = pagePart(decodeURIComponent(m[1]), m[2]);
    else if ((m = h.match(/^#\/schedule\/([^\/]+)(?:\/([a-z]+))?$/)))
      out = pageSchedule(decodeURIComponent(m[1]), m[2]);
    else if ((m = h.match(/^#\/search\/(.*)$/))) out = pageSearch(decodeURIComponent(m[1]));
    else if (h === '#/parts') out = pageParts();
    else if ((m = h.match(/^#\/preamble(?:\/([a-z]+))?$/))) out = pagePreamble(m[1]);
    else if (h === '#/schedules') out = pageSchedules();
    else if (h === '#/amendments') out = pageAmendments();
    else if ((m = h.match(/^#\/judgment\/([^\/]+)$/))) out = pageJudgment(decodeURIComponent(m[1]));
    else if (h === '#/cases') out = pageCases();
    else if ((m = h.match(/^#\/exam(?:\/([123]))?$/))) out = pageExam(m[1]);
    else if (h === '#/about') out = pageAbout();
    else if (h === '#/maps') out = pageMaps();
    else { out = pageHome(); home = true; }

    // No sidebar on the home page: it lists the Parts, and so does the page.
    document.body.classList.toggle('is-home', home);
    closeSheet();
    closeNav();
    main.innerHTML = out + siteFooter();
    markActive(h);
    markNav(h);
    document.body.classList.remove('nav-open');
    if (!h.startsWith('#/search')) window.scrollTo(0, 0);
    // Moving focus to the new content is right when a link was followed and
    // wrong while somebody is typing. The search box navigates on every
    // keystroke, so focusing main here took the caret out of the box and the
    // next letter went nowhere - you had to click back in for each character.
    var ae = document.activeElement;
    if (!(ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.isContentEditable))) {
      main.focus({ preventScroll: true });
    }
    if (h === '#/cases') filterCases();
    if (h.indexOf('#/exam') === 0) filterExam();
    if (home) wireHome();

    partSpy(h);

    // The rail scrolls independently of the page, so on a long section the
    // article being read can sit below its fold. Bring it into the rail
    // without moving the page itself.
    var cur = main.querySelector('.pt-art.cur');
    if (cur) {
      var rail = cur.closest('.ptree');
      if (rail && rail.scrollHeight > rail.clientHeight) {
        rail.scrollTop = Math.max(0, cur.offsetTop - rail.clientHeight / 2 + cur.offsetHeight / 2);
      }
    }
  }

  /* ---------- wiring ---------- */

  function init() {
    buildSidebar();
    initNav();

    var box = $('#search'), timer;
    box.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        var q = box.value.trim();
        if (q.length >= 2) go('#/search/' + encodeURIComponent(q));
        else if (location.hash.indexOf('#/search') === 0) go('#/');
      }, 180);
    });
    box.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var hits = search(box.value);
        if (hits.length) {
          var top = hits[0];
          go(top.jr ? '#/judgment/' + top.jr.id : top.sc ? '#/schedule/' + top.sc.id : '#/article/' + top.a.num);
          box.blur();
        }
      }
      if (e.key === 'Escape') { box.value = ''; box.blur(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== box) { e.preventDefault(); box.focus(); }
    });

    // the case grid: open a card, filter, re-sort — all by delegation, so it
    // survives every re-render of main
    document.addEventListener('click', function (e) {
      // Any sidebar link gets out of the way on a narrow screen. route() used
      // to be the only thing that closed the drawer, and route() runs on
      // hashchange - which never fires when the link points at the hash you
      // are already on. Tapping "The Union" while already on The Union left
      // the drawer covering the whole page. Closing it here covers both cases,
      // and on a wide screen the class is not in play at all.
      if (e.target.closest && e.target.closest('.sidebar a')) {
        document.body.classList.remove('nav-open');
      }
      if (e.target.closest && e.target.closest('[data-close]')) { closeSheet(); return; }
      // A card on a Judgments tab opens in the drawer. A click with a modifier
      // key is left alone, so it can still open the full page in a new tab.
      var jcard = e.target.closest && e.target.closest('.jgrid[data-back] .jcard');
      if (jcard && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
        e.preventDefault();
        var jg = jcard.parentNode;
        openJudgment(jcard.getAttribute('data-id'), [].map.call(jg.querySelectorAll('.jcard'), function (c) {
          return c.getAttribute('data-id');
        }), jg.getAttribute('data-back'));
        return;
      }
      var jstep = e.target.closest && e.target.closest('[data-jstep]');
      if (jstep) {
        var jd = jstep.closest('.sheet');
        openJudgment(jstep.getAttribute('data-jstep'), jd.getAttribute('data-ids').split(' '),
          jd.getAttribute('data-back'), jstep.getAttribute('data-dir'));
        return;
      }
      // A link in an overlay to the page already showing fires no hashchange,
      // so route() would not close the overlay. Close it here instead.
      var inLink = e.target.closest && e.target.closest('.sheet a[href^="#/"]');
      if (inLink && inLink.getAttribute('href') === location.hash) {
        e.preventDefault();
        closeSheet();
        return;
      }
      var carBtn = e.target.closest && e.target.closest('.car-btn');
      if (carBtn) {
        var track = $('#homeCar');
        if (track) track.scrollBy({ left: +carBtn.getAttribute('data-car') *
          Math.max(200, track.clientWidth * 0.8), behavior: 'smooth' });
        return;
      }
      if (e.target.closest && e.target.closest('[data-peek-close]')) {
        var pp = e.target.closest('.peek-panel');
        var forSpec = pp && pp.getAttribute('data-for');
        if (pp) pp.remove();
        if (forSpec) document.querySelectorAll('.chip.peek.on').forEach(function (el) {
          if (el.getAttribute('data-peek') === forSpec) el.classList.remove('on');
        });
        return;
      }
      var railBtn = e.target.closest && e.target.closest('[data-rail]');
      if (railBtn) {
        var off = railBtn.getAttribute('data-rail') === 'off';
        document.body.classList.toggle('rail-off', off);
        try { localStorage.setItem('coi-rail', off ? 'off' : 'on'); } catch (err) { /* private mode */ }
        return;
      }
      var mapT = e.target.closest && e.target.closest('.secmap-t');
      if (mapT) {
        var key = mapT.getAttribute('data-mapkey');
        var wrap = mapT.parentNode, body = wrap.querySelector('.secmap-body');
        var nowOpen = body.hidden;
        body.hidden = !nowOpen;
        wrap.classList.toggle('on', nowOpen);
        mapT.querySelector('.sm-x').innerHTML = nowOpen ? '&#9652;' : '&#9662;';
        mapT.querySelector('.sm-verb').textContent = nowOpen ? 'Hide the' : 'Click here for the';
        MAP_OPEN[key] = nowOpen;
        return;
      }
      var treeRow = e.target.closest && e.target.closest('.pt-row[data-tree]');
      if (treeRow) {
        var node = treeRow.parentNode, open = !node.classList.contains('open');
        node.classList.toggle('open', open);
        treeRow.setAttribute('aria-expanded', open ? 'true' : 'false');
        return;
      }
      var ptoggle = e.target.closest && e.target.closest('[data-ptoggle]');
      if (ptoggle) {
        var tree = ptoggle.closest('.ptree'), show = !tree.classList.contains('show');
        tree.classList.toggle('show', show);
        ptoggle.setAttribute('aria-expanded', show ? 'true' : 'false');
        return;
      }
      var tabBtn = e.target.closest && e.target.closest('.atab[data-tab]');
      if (tabBtn) { showTab(tabBtn.getAttribute('data-tab')); return; }
      // A section row on the Part page scrolls to its section.
      var pn = e.target.closest && e.target.closest('[data-goto]');
      if (pn) {
        var sec = document.getElementById('sec-' + pn.getAttribute('data-goto'));
        if (sec) {
          SPY_LOCK = Date.now() + 900;
          markSection(pn.getAttribute('data-goto'));
          window.scrollTo({ top: Math.max(0, sec.getBoundingClientRect().top + window.scrollY - scrollPad()),
                            behavior: 'smooth' });
        }
        return;
      }
      var peekBtn = e.target.closest && e.target.closest('.chip.peek');
      if (peekBtn) { togglePeek(peekBtn); return; }
      var exRow = e.target.closest && e.target.closest('.ex-row');
      if (exRow && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
        e.preventDefault();
        openExam(exRow.getAttribute('data-k'));
        return;
      }
      var sortBtn = e.target.closest && e.target.closest('.case-sort button');
      if (sortBtn) { sortCases(sortBtn.getAttribute('data-sort')); return; }
      var tierBtn = e.target.closest && e.target.closest('.ex-sort button');
      if (tierBtn) {
        document.querySelectorAll('.ex-sort button').forEach(function (b) {
          b.classList.toggle('on', b === tierBtn);
        });
        filterExam();
      }
    });
    // The hero's search waits for Enter or the button, rather than searching
    // as you type: the results replace the page the box is on.
    document.addEventListener('submit', function (e) {
      if (!e.target.classList.contains('hero-search')) return;
      e.preventDefault();
      var q = $('#heroSearch').value.trim();
      if (!q) return;
      box.value = q;
      go('#/search/' + encodeURIComponent(q));
    });
    window.addEventListener('resize', carSync);
    document.addEventListener('input', function (e) {
      if (e.target.id === 'caseFilter') filterCases();
      if (e.target.id === 'examFilter') filterExam();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && $('.sheet-wrap')) { e.stopPropagation(); closeSheet(); }
    });
    // Left and right step through the judgments in the drawer.
    document.addEventListener('keydown', function (e) {
      if ((e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') || e.altKey || e.ctrlKey || e.metaKey) return;
      var d = $('.sheet.jdrawer');
      if (!d) return;
      var b = d.querySelector('.jd-step[data-dir="' + (e.key === 'ArrowLeft' ? 'prev' : 'next') + '"]');
      if (b) { e.preventDefault(); b.click(); }
    });
    document.addEventListener('keydown', function (e) {
      var t = e.target;
      if (!t.classList || !t.classList.contains('atab')) return;
      var tabs = [].slice.call(t.parentNode.querySelectorAll('.atab'));
      var i = tabs.indexOf(t), j = -1;
      if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') j = 0;
      else if (e.key === 'End') j = tabs.length - 1;
      if (j < 0) return;
      e.preventDefault();
      showTab(tabs[j].getAttribute('data-tab'), true);
    });

    // The list of Parts is a drawer over the page, on every page. The left
    // side of a Part or an article belongs to its own Part tree.
    $('#menuBtn').addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });
    $('#scrim').addEventListener('click', function () {
      document.body.classList.remove('nav-open');
    });

    try {
      if (localStorage.getItem('coi-rail') === 'off') document.body.classList.add('rail-off');
    } catch (err) { /* private mode - start with both panels showing */ }

    var btn = $('#themeBtn');
    var saved = null;
    try { saved = localStorage.getItem('coi-theme'); } catch (e) {}
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    else if (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.setAttribute('data-theme', 'dark');
    btn.addEventListener('click', function () {
      var now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', now);
      try { localStorage.setItem('coi-theme', now); } catch (e) {}
    });

    window.addEventListener('hashchange', route);
    route();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
