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

  // distinct judgments, not entries — a few cases sit under two articles
  function caseCount() {
    var seen = {};
    Object.keys(CASES).forEach(function (k) {
      CASES[k].forEach(function (c) { seen[c.case] = 1; });
    });
    return Object.keys(seen).length;
  }

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
    var s = '';
    s += '<div class="side-group">' +
      link('#/', 'Overview', '') +
      link('#/preamble', 'Preamble', '') +
      link('#/parts', 'All Parts', String(PARTS.length)) +
      link('#/schedules', 'Schedules', String(SCHEDULES.length)) +
      link('#/amendments', 'Amendments', '106') +
      link('#/cases', 'Landmark judgments', String(caseCount())) +
      link('#/exam', 'What the examiners ask', String(Object.keys(EXAM).length)) +
      link('#/maps', 'Mind maps & flows', '') +
      link('#/about', 'About & sources', '') +
      '</div>';

    s += '<div class="side-group"><div class="side-label">Parts</div>';
    PARTS.forEach(function (p) {
      var n = artsOfPart(p.num).length;
      s += '<a class="side-link" data-h="#/part/' + p.num + '" href="#/part/' + p.num + '">' +
        '<span class="rn">' + p.num + '</span>' +
        '<span>' + esc(title(p.title)) + '</span>' +
        '<span class="ct">' + n + '</span></a>';
    });
    s += '</div>';
    $('#sidebar').innerHTML = s;
  }
  function link(href, label, count) {
    return '<a class="side-link" data-h="' + href + '" href="' + href + '"><span>' +
      esc(label) + '</span>' + (count ? '<span class="ct">' + count + '</span>' : '') + '</a>';
  }

  function markActive(hash) {
    var best = null;
    // An article now reads inside its Part's shell, so the Part it belongs to
    // is the right thing to light up in the sidebar while you are in it.
    var art = hash.match(/^#\/article\/(.+)$/);
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
    s += '<p class="lede sm">Every section heading on this site carries one of two ' +
      'markers. They mean what they say.</p>';
    s += '<div class="conf-key">' +
      '<div class="conf-row"><span class="conf src">official text</span>' +
      '<p>Reproduced from the official PDF and machine-checked against it. The bare ' +
      'text of every article, the Schedules, and the amendment footnotes. This is the ' +
      'strongest material on the site — see the verification figures below.</p></div>' +
      '<div class="conf-row"><span class="conf own">written for this site</span>' +
      '<p>Commentary: the plain-language readings, the landmark-judgment summaries, ' +
      'the exam notes and the diagrams. Checked, but written by hand and therefore ' +
      'capable of being wrong in a way the bare text is not.</p></div>' +
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
      'the <code>LICENSE</code> file.</p></div></div>';

    /* ---- errors ---- */
    s += tag('Found an error?');
    s += '<p>Please report it. An error in the bare text is a bug in the extraction and ' +
      'should be checked against the official PDF linked above. An error in the ' +
      'commentary is a mistake of mine. Both are worth reporting, and the second kind is ' +
      'the more likely.</p>';

    return s;
  }

  /* ---------- section headings, with a confidence marker ---------- */

  // Two states, because that is the honest distinction: text taken from the
  // official PDF and checked against it, versus commentary written here. The
  // key is explained on the About page.
  function tag(text, conf) {
    var mark = '';
    if (conf === 'source') mark = '<span class="conf src" title="Reproduced from the ' +
      'official PDF and checked against it">official text</span>';
    else if (conf === 'written') mark = '<span class="conf own" title="Commentary written ' +
      'for this site. Explanation, not law.">written for this site</span>';
    return '<div class="section-tag">' + esc(text) + mark + '</div>';
  }

  /* ---------- pages ---------- */

  // A board of doors. Everything that used to sit above the tiles - the
  // paragraph of prose, the row of six counts, the "Start here" pick of
  // seven - was scenery between the reader and the thing they came for. The
  // source note and the disclaimer are on every page already, in siteFooter().

  /* Small line drawings for the tiles that are not Parts. Stroked in the
     theme's own variables, so they follow light and dark without a second
     copy. 46x34, and every one reads at that size - no fine detail. */
  var ILLUS = {
    preamble:
      '<rect x="8" y="2.5" width="30" height="29" rx="3" stroke="var(--ink-faint)" stroke-width="1.4"/>' +
      '<path d="M13 9h20" stroke="var(--accent)" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path d="M13 15h20M13 20h20M13 25h12" stroke="var(--ink-faint)" stroke-width="1.4" stroke-linecap="round"/>',

    articles:
      '<rect x="3" y="4" width="9" height="7" rx="2" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.3"/>' +
      '<path d="M16 7.5h27" stroke="var(--ink-faint)" stroke-width="1.5" stroke-linecap="round"/>' +
      '<rect x="3" y="13.5" width="9" height="7" rx="2" stroke="var(--ink-faint)" stroke-width="1.3"/>' +
      '<path d="M16 17h27" stroke="var(--ink-faint)" stroke-width="1.5" stroke-linecap="round"/>' +
      '<rect x="3" y="23" width="9" height="7" rx="2" stroke="var(--ink-faint)" stroke-width="1.3"/>' +
      '<path d="M16 26.5h20" stroke="var(--ink-faint)" stroke-width="1.5" stroke-linecap="round"/>',

    exam:
      '<rect x="3" y="3" width="26" height="28" rx="3" stroke="var(--ink-faint)" stroke-width="1.4"/>' +
      '<path d="M8 10h16M8 15h16M8 26h9" stroke="var(--ink-faint)" stroke-width="1.4" stroke-linecap="round"/>' +
      '<rect x="7" y="18.4" width="18" height="4" rx="2" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>' +
      '<g transform="translate(26.4 3) scale(0.8)">' +
      '<path d="M12 2l2.9 6.3 6.8.8-5 4.6 1.3 6.8L12 17.2 5.9 20.5l1.3-6.8-5-4.6 6.8-.8z" ' +
      'fill="var(--amber)" stroke="var(--amber)" stroke-width="1.6" stroke-linejoin="round"/></g>',

    maps:
      '<path d="M13 17C20 17 20 8 27 8" stroke="var(--saffron)" stroke-width="1.5"/>' +
      '<path d="M13 17h14" stroke="var(--blue)" stroke-width="1.5"/>' +
      '<path d="M13 17C20 17 20 26 27 26" stroke="var(--green)" stroke-width="1.5"/>' +
      '<rect x="2" y="12" width="11" height="10" rx="2.5" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>' +
      '<rect x="27" y="3.5" width="16" height="9" rx="2.5" stroke="var(--saffron)" stroke-width="1.5"/>' +
      '<rect x="27" y="12.5" width="16" height="9" rx="2.5" stroke="var(--blue)" stroke-width="1.5"/>' +
      '<rect x="27" y="21.5" width="16" height="9" rx="2.5" stroke="var(--green)" stroke-width="1.5"/>',

    cases:
      '<path d="M4 12L23 4l19 8" stroke="var(--accent)" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"/>' +
      '<path d="M9 15.5v11M16 15.5v11M23 15.5v11M30 15.5v11M37 15.5v11" stroke="var(--ink-faint)" stroke-width="1.5" stroke-linecap="round"/>' +
      '<path d="M5 29.5h36" stroke="var(--accent)" stroke-width="1.9" stroke-linecap="round"/>',

    amendments:
      '<path d="M4 17h38" stroke="var(--ink-faint)" stroke-width="1.4" stroke-linecap="round"/>' +
      '<circle cx="8" cy="17" r="2.4" stroke="var(--ink-faint)" stroke-width="1.4"/>' +
      '<circle cx="19" cy="17" r="2.4" stroke="var(--ink-faint)" stroke-width="1.4"/>' +
      '<circle cx="30" cy="17" r="3.8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.6"/>' +
      '<circle cx="40" cy="17" r="2.4" stroke="var(--ink-faint)" stroke-width="1.4"/>' +
      '<path d="M30 8v3.2M30 22.8v3.2" stroke="var(--accent)" stroke-width="1.4" stroke-linecap="round"/>',

    about:
      '<rect x="5" y="3" width="26" height="28" rx="3" stroke="var(--ink-faint)" stroke-width="1.4"/>' +
      '<path d="M10 10h16M10 15h16M10 20h9" stroke="var(--ink-faint)" stroke-width="1.4" stroke-linecap="round"/>' +
      '<circle cx="34" cy="23" r="8" fill="var(--bg-raise)" stroke="var(--green)" stroke-width="1.6"/>' +
      '<path d="M30.4 23.2l2.6 2.5 4.6-5.1" stroke="var(--green)" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round"/>',

    schedules:
      '<rect x="4" y="5" width="38" height="24" rx="3" stroke="var(--ink-faint)" stroke-width="1.4"/>' +
      '<path d="M4 12.5h38" stroke="var(--accent)" stroke-width="1.7"/>' +
      '<path d="M17.5 12.5V29M29 12.5V29" stroke="var(--ink-faint)" stroke-width="1.3"/>' +
      '<path d="M4 20.8h38" stroke="var(--ink-faint)" stroke-width="1.3"/>'
  };

  function illus(k) {
    return ILLUS[k]
      ? '<svg class="illus" viewBox="0 0 46 34" fill="none" aria-hidden="true">' + ILLUS[k] + '</svg>'
      : '';
  }

  function pageHome() {
    var s = '<div class="page-head home-head"><h1>The Constitution of India for Exams</h1></div>';

    // The four ways in, then the Parts, then the three reference views. Three
    // grids rather than one: an illustrated tile is taller than a Part tile,
    // and in a single grid every Part sharing its row would be stretched to
    // match. The gaps are equal, so it still reads as one board.
    s += '<div class="lead-wrap"><div class="grid home-grid lead">' +
      tile('#/preamble', 'THE OPENING', 'Preamble',
        'One paragraph, and every word of it argued over', 'preamble') +
      tile('#/parts', ARTS.length + ' ENTRIES', 'All articles',
        LIVE.length + ' in force &middot; ' + (ARTS.length - LIVE.length) + ' omitted', 'articles') +
      tile('#/exam', 'MOST ASKED', 'Important articles for exams',
        Object.keys(EXAM).length + ' entries ranked by weight', 'exam') +
      tile('#/maps', 'DRAWN BY HAND', 'Mind maps & flows',
        diagramCount() + ' diagrams', 'maps') +
      '</div></div>';

    s += '<div class="grid home-grid">' +
      tile('#/cases', 'SUPREME COURT', 'Landmark judgments',
        caseCount() + ' cases, summarised');
    PARTS.forEach(function (p) {
      var list = artsOfPart(p.num);
      var live = list.filter(function (a) { return !a.omitted; });
      var first = list.length ? list[0].num : '', last = list.length ? list[list.length - 1].num : '';
      var range = !list.length ? '\u2014' : (first === last ? first : first + '\u2013' + last);
      s += tile('#/part/' + p.num, 'PART ' + p.num + ' \u00b7 ART. ' + range,
        title(p.title),
        (live.length ? live.length + ' article' + (live.length === 1 ? '' : 's') +
          (list.length !== live.length ? ' &middot; ' + (list.length - live.length) + ' omitted' : '')
          : 'Repealed whole'));
    });

    s += '</div>';

    s += '<div class="grid home-grid">' +
      tile('#/amendments', '1951\u20132023', 'Amendments',
        '106 Acts, and what each one changed', 'amendments') +
      tile('#/schedules', 'THE TWELVE', 'Schedules',
        'The Lists, the languages, the defection rules', 'schedules') +
      tile('#/about', 'PROVENANCE', 'About & sources',
        'Where the text came from, and what has been checked', 'about') +
      '</div>';
    return s;
  }

  // Distinct diagrams, not keys: one key is an alias of another, and a key may
  // hold an array.
  function diagramCount() {
    var seen = [];
    Object.keys(MAPS).forEach(function (k) {
      (Array.isArray(MAPS[k]) ? MAPS[k] : [MAPS[k]]).forEach(function (spec) {
        if (seen.indexOf(spec) < 0) seen.push(spec);
      });
    });
    return seen.length;
  }

  function stat(n, label) {
    return '<div class="stat"><b>' + n + '</b><small>' + esc(label) + '</small></div>';
  }
  // `sub` is written by this file, never by data, so it is inserted as markup
  // to allow a middot; everything from the data is escaped before it gets here.
  function tile(href, eyebrow, h, sub, pic) {
    return '<a class="card tile' + (pic ? ' has-illus' : '') + '" href="' + href + '">' +
      (pic ? illus(pic) : '') +
      '<div class="rn">' + eyebrow + '</div>' +
      '<h3>' + esc(h) + '</h3><p>' + sub + '</p></a>';
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

  function pagePreamble() {
    var pre = COI.preamble || { paras: [], notes: [] };
    var ex = EXPLAIN.preamble;
    var s = '<div class="crumbs"><a href="#/">Overview</a><span>&rsaquo;</span>Preamble</div>' +
      '<div class="art-head"><div class="eyebrow">The Constitution of India</div>' +
      '<h1>Preamble</h1><div class="tagline">' +
      '<span class="pill red">Adopted 26 November 1949</span>' +
      '<span class="pill blue">Amended once — 42nd, 1976</span></div></div>';

    s += tag('Bare text', 'source') + '<div class="bare">';
    (pre.paras || []).forEach(function (p) {
      s += '<p class="l' + (p.lvl || 0) + '">' + bareHTML(p.t, pre.notes) + '</p>';
    });
    s += '</div>';
    s += notesBlock(pre.notes);
    if (ex) s += explainBlock(ex);
    if (MAPS.preamble) s += tag('Picture it', 'written') + renderDiagram(MAPS.preamble);
    s += caseBlock(CASES.preamble);
    s += examBlock(EXAM.preamble);
    return s;
  }

  /* ---------- the Part rail, shared by the Part page and its articles ----------

     A Part page and an article inside it used to be unrelated pages: opening
     an article threw the section panel away, and the section's mind map with
     it. Both now draw this rail, so the section you are reading stays on
     screen and the article next to this one is one click away.

     mode 'part'    - items switch panels in place, without a navigation
     mode 'article' - items are links back into the Part, and the open section
                      expands into its own articles                          */
  function partRail(num, secs, active, mode, curNum) {
    var total = 0;
    secs.forEach(function (g) { total += g.arts.length; });

    function artLink(a) {
      return '<a class="pn-art' + (a.num === curNum ? ' cur' : '') +
        (a.omitted ? ' dim' : '') + '" href="#/article/' + a.num + '">' +
        '<span class="pa-n">' + esc(a.num) + '</span>' +
        '<span class="pa-t">' + esc(shortHeading(a.heading)) + '</span></a>';
    }

    // Nineteen of the twenty-six Parts have no chapters and no group headings.
    // They have no sections to list, so the rail lists what they do have.
    if (mode === 'article' && secs.length < 2) {
      return '<nav class="part-nav in-article flat" aria-label="Articles of Part ' +
        esc(num) + '">' +
        '<div class="pn-head">Part ' + esc(num) + ' &middot; articles' + foldBtn() + '</div>' +
        '<div class="pn-arts open">' + secs[0].arts.map(artLink).join('') + '</div>' +
        // on the Part page itself there is nowhere for an "overview" link to go
        (curNum ? '<a class="pn-item pn-all" href="#/part/' + esc(num) + '">' +
          '<span class="pn-t">Part ' + esc(num) + ' overview</span>' +
          '<span class="pn-n">' + total + '</span></a>' : '') +
        '</nav>';
    }

    var items = secs.map(function (g, i) {
      var on = i === active;
      var inner = (g.chapLine ? '<span class="pn-ch">' + esc(g.chapLine) + '</span>' : '') +
        '<span class="pn-t">' + esc(g.label) + '</span>' +
        '<span class="pn-n">' + g.arts.length + '</span>';
      var head = mode === 'part'
        ? '<button class="pn-item' + (on ? ' on' : '') + '" type="button" data-sec="' + i +
          '">' + inner + '</button>'
        : '<a class="pn-item' + (on ? ' on' : '') + '" href="#/part/' + esc(num) + '/' + i +
          '">' + inner + '</a>';
      if (mode === 'article' && on) {
        head += '<div class="pn-arts">' + g.arts.map(artLink).join('') + '</div>';
      }
      return head;
    }).join('');

    var all = mode === 'part'
      ? '<button class="pn-item pn-all" type="button" data-sec="all">' +
        '<span class="pn-t">Show every article</span><span class="pn-n">' + total +
        '</span></button>'
      : '<a class="pn-item pn-all" href="#/part/' + esc(num) + '/all">' +
        '<span class="pn-t">Show every article</span><span class="pn-n">' + total +
        '</span></a>';

    return '<nav class="part-nav' + (mode === 'article' ? ' in-article' : '') +
      '" aria-label="Sections of Part ' + esc(num) + '">' +
      '<div class="pn-head">Part ' + esc(num) + ' &middot; sections' + foldBtn() + '</div>' +
      items + all + '</nav>';
  }

  // Folding the rail away, and the tab that brings it back. The tab lives in
  // the body panel and is only visible while the rail is hidden, so there is
  // always exactly one control on screen.
  function foldBtn() {
    return '<button class="pn-fold" type="button" data-rail="off" ' +
      'aria-label="Hide the section list" title="Hide the section list">&#10094;</button>';
  }
  function railTab() {
    return '<button class="rail-show" type="button" data-rail="on">' +
      '&#10095; Sections</button>';
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

  // openByDefault: on a Part page the map is what the reader came for, so it
  // starts open; beside an article it starts folded. Either way, once the
  // reader has toggled it their choice is what counts.
  function sectionMap(part, g, openByDefault) {
    var got = articleMap(part, g);
    if (!got) return '';
    // On a phone an open map puts the articles two screens down, so the Part
    // page opens it only where there is room. Once the reader has toggled it,
    // their choice wins on any width.
    var wide = !window.matchMedia('(max-width: 900px)').matches;
    var open = (got.key in MAP_OPEN) ? MAP_OPEN[got.key] : (!!openByDefault && wide);
    return '<div class="secmap' + (open ? ' on' : '') + '">' +
      '<button class="secmap-t" type="button" data-mapkey="' + esc(got.key) + '">' +
      '<span class="sm-ico">&#9635;</span>' +
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

    var s = '<div class="crumbs"><a href="#/parts">All Parts</a><span>&rsaquo;</span>Part ' + esc(num) + '</div>' +
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
      var showAll = want === 'all';
      var active = showAll ? -1 : Math.min(Math.max(parseInt(want, 10) || 0, 0), secs.length - 1);
      s += '<div class="part-split">';
      s += partRail(num, secs, showAll ? -1 : active, 'part');

      s += '<div class="part-body">' + railTab() + secs.map(function (g, i) {
        return '<section class="part-sec" data-sec="' + i + '"' +
          (showAll || i === active ? '' : ' hidden') + '>' +
          '<div class="ps-head"><h2>' + esc(g.label) + '</h2>' +
          '<p class="sm">' + (g.chapLine ? esc(g.chapLine) + ' &middot; ' : '') +
          g.arts.length + ' article' + (g.arts.length === 1 ? '' : 's') +
          ' &middot; ' + esc(g.range) + '</p></div>' +
          sectionMap(num, g, true) +
          g.arts.map(artRow).join('') +
          '</section>';
      }).join('') + '</div></div>';
      if (showAll) {
        s = s.replace('class="pn-item pn-all"', 'class="pn-item pn-all on"');
      }
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
    var flatRail = list.length ? partRail(num, secs, 0, 'article', null) : '';
    var body = '';

    if (flatRail) body += railTab();
    body += sectionMap(num, secs[0], true);
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

  function pageArticle(num) {
    var a = BY_NUM[num];
    if (!a) return '<p class="empty">No article ' + esc(num) + ' in this text.</p>';
    var ex = explainOf(num);
    var secs = partSections(a.part);
    var mySec = secs.length > 1 ? sectionOf(a, secs) : 0;
    // The map is worth offering on any article. The rail is not: on Part IVA,
    // one article long, it would list the article you are already reading.
    var railed = mySec >= 0 && artsOfPart(a.part).length >= 2;

    // prev / next sits with the breadcrumbs, so it is reachable without
    // scrolling to the end of a long article
    var sibs = artsOfPart(a.part);
    var i = sibs.indexOf(a);
    var pager = '<div class="pager">' +
      (i > 0
        ? '<a href="#/article/' + sibs[i - 1].num + '" title="' + esc(sibs[i - 1].heading) +
          '">&larr; Art. ' + sibs[i - 1].num + '</a>'
        : '<span class="pager-end">&larr; start of Part ' + esc(a.part) + '</span>') +
      (i >= 0 && i < sibs.length - 1
        ? '<a href="#/article/' + sibs[i + 1].num + '" title="' + esc(sibs[i + 1].heading) +
          '">Art. ' + sibs[i + 1].num + ' &rarr;</a>'
        : '<span class="pager-end">end of Part ' + esc(a.part) + ' &rarr;</span>') +
      '</div>';

    var s = '<div class="art-top">' +
      '<div class="crumbs"><a href="#/parts">Parts</a><span>&rsaquo;</span>' +
      '<a href="#/part/' + esc(a.part) + '">Part ' + esc(a.part) + '</a>' +
      (a.chapter ? '<span>&rsaquo;</span>' + esc(chapNum(a.chapter) + ' — ' + chapName(a.chapter)) : '') +
      (a.group ? '<span>&rsaquo;</span>' + esc(a.group) : '') + '</div>' +
      pager + '</div>';

    if (mySec >= 0) s += sectionMap(a.part, secs[mySec]);

    s += '<div class="art-head"><div class="eyebrow">Article ' + esc(a.num) + '</div>' +
      '<h1>' + esc(a.heading) + '</h1><div class="tagline">' +
      '<span class="pill grey">' + esc(partLabel(a.part)) + '</span>' +
      (a.omitted ? '<span class="pill red">Omitted / repealed</span>'
                 : '<span class="pill green">In force</span>');
    (a.amendments || []).slice(0, 4).forEach(function (m) {
      s += '<span class="pill blue">' + esc(m) + '</span>';
    });
    s += '</div></div>';

    var bare = tag('Bare text as printed', 'source') + '<div class="bare">' +
      a.paras.map(function (p) {
        return '<p class="l' + (p.lvl || 0) + '">' + bareHTML(p.t, a.notes) + '</p>';
      }).join('') + '</div>';

    if (ex) s += explainSays(ex) + bare + explainRest(ex);
    else s += bare + '<div class="panel note"><h4>Plain-language note</h4><p>A written ' +
      'explanation for this article has not been added yet. The bare text above is complete ' +
      'and official.</p></div>';

    var map = MAPS[num];
    if (map) s += tag('Picture it', 'written') +
      diagrams(map);

    s += caseBlock(CASES[num] || CASES[a.alias]);
    s += examBlock(examOf(a));
    s += notesBlock(a.notes, a.amendments);

    var refs = (a.refs || []).filter(function (r) { return BY_NUM[r]; });
    if (refs.length || (a.schedRefs || []).length) {
      s += '<div class="section-tag">Reads with</div><div class="chiprow">';
      refs.forEach(function (r) {
        s += '<button class="chip peek" type="button" data-peek="art:' + esc(r) + '">Art. ' +
          esc(r) + ' — ' + esc(shortHeading(BY_NUM[r].heading)) + '</button>';
      });
      (a.schedRefs || []).forEach(function (r) {
        var sch = SCHEDULES.filter(function (x) { return x.name.indexOf(r) === 0; })[0];
        if (sch) s += '<a class="chip" href="#/schedule/' + sch.id + '">' + esc(sch.name) + '</a>';
      });
      s += '</div>';
    }

    s += pagerFoot(sibs, i, a.part);

    // Inside a Part that has panels, the article is read in the same shell the
    // Part page uses - the rail on the left keeps the section, its articles and
    // its map one click away instead of a page away.
    if (railed) {
      return '<div class="part-split art-split">' +
        partRail(a.part, secs, mySec, 'article', a.num) +
        '<div class="part-body">' + railTab() + s + '</div></div>';
    }
    return s;
  }

  // The pager at the top is a pair of buttons beside the breadcrumb, kept
  // short. At the foot there is room to say where each one goes, which is
  // where a reader who has read to the end actually decides.
  function pagerFoot(sibs, i, part) {
    function end(t) { return '<span class="pf empty">' + t + '</span>'; }
    function link(a, dir) {
      return '<a class="pf ' + dir + '" href="#/article/' + a.num + '">' +
        '<span class="pf-d">' + (dir === 'prev' ? '&larr; Previous' : 'Next &rarr;') + '</span>' +
        '<span class="pf-n">Article ' + esc(a.num) + '</span>' +
        '<span class="pf-t">' + esc(a.heading) + '</span></a>';
    }
    return '<nav class="pager-foot" aria-label="Previous and next article">' +
      (i > 0 ? link(sibs[i - 1], 'prev') : end('Start of Part ' + esc(part))) +
      (i >= 0 && i < sibs.length - 1 ? link(sibs[i + 1], 'next')
        : end('End of Part ' + esc(part))) +
      '</nav>';
  }

  // Split in two. The plain reading comes first, then the bare text it is a
  // reading of, then the qualifications — so a reader meets the provision
  // already knowing roughly what it does.
  function explainSays(ex) {
    return tag('In plain language', 'written') + '<div class="explain">' +
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

  function caseBlock(list, heading) {
    if (!list || !list.length) return '';
    var s = tag(heading || 'Landmark judgments', 'written');
    list.forEach(function (c) {
      var st = STATUS[c.status] || STATUS.good;
      s += '<article class="case">' +
        '<header><h4>' + esc(c.case) + '</h4><div class="case-meta">' +
        '<span class="pill grey">' + esc(c.year) + '</span>' +
        (c.bench ? '<span class="pill blue">' + esc(c.bench) + '</span>' : '') +
        '<span class="pill ' + st.pill + '">' + esc(st.label) + '</span>' +
        '</div></header>' +
        (c.full && c.full !== c.case ? '<p class="case-full">' + esc(c.full) + '</p>' : '') +
        '<dl class="case-body">' +
        '<dt>What happened</dt><dd>' + para(c.facts) + '</dd>' +
        '<dt>What the Court held</dt><dd>' + para(c.held) + '</dd>' +
        '<dt>Why it matters</dt><dd>' + para(c.why) + '</dd>' +
        '</dl></article>';
    });
    return s;
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
    return tag('What the examiners ask', 'written') +
      '<section class="exam"><header class="exam-head">' + examPills(entry) + '</header>' +
      examBody(entry) + '</section>';
  }

  // Clicking a row opens the note in place, the way a landmark judgment does,
  // rather than dropping the reader into the middle of a long article page.
  function openExam(key) {
    var e = EXAM_BY_KEY[key];
    if (!e) return;
    closeSheet();
    _lastFocus = document.activeElement;

    var box = document.createElement('div');
    box.className = 'sheet-wrap';
    box.innerHTML =
      '<div class="sheet-back" data-close="1"></div>' +
      '<div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheetName">' +
      '<button class="sheet-x" type="button" data-close="1" aria-label="Close">&times;</button>' +
      '<div class="sheet-body">' +
      '<div class="sheet-head">' +
      '<a class="cc-where" href="' + e.href + '">' + esc(e.label) + ' &rarr;</a>' +
      '<h2 id="sheetName">' + esc(e.sub) + '</h2>' +
      '<div class="case-meta">' + examPills(e.x) + '</div>' +
      '</div>' +
      examBody(e.x) +
      '<div class="sheet-foot"><a class="chip" href="' + e.href + '">Read ' +
      esc(e.label) + ' in full &rarr;</a>' +
      '<button class="chip" type="button" data-close="1">Close</button></div>' +
      '</div></div>';

    document.body.appendChild(box);
    document.body.classList.add('sheet-open');
    box.querySelector('.sheet-x').focus();
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

  function pageExam() {
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
      '<button data-tier="all" class="on">All ' + EXAM_LIST.length + '</button>' +
      '<button data-tier="1">Core ' + n1 + '</button>' +
      '<button data-tier="2">Recurs ' + n2 + '</button>' +
      '<button data-tier="3">Worth holding ' + (EXAM_LIST.length - n1 - n2) + '</button>' +
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

  function notesBlock(notes, amds) {
    if ((!notes || !notes.length) && (!amds || !amds.length)) return '';
    var s = tag('Amendment history, as footnoted in the official text', 'source');
    if (amds && amds.length) {
      s += '<div class="chiprow" style="margin-bottom:12px">';
      amds.forEach(function (m) {
        var n = amendNumber(m);
        s += n
          ? '<button class="chip peek" type="button" data-peek="amd:' + n + '">' + esc(m) + '</button>'
          : '<span class="chip">' + esc(m) + '</span>';
      });
      s += '</div>';
    }
    if (notes && notes.length) {
      s += '<ul class="fn-list">';
      notes.forEach(function (n) {
        s += '<li><span class="fn-n">' + n.n + '</span><span>' + esc(n.text) + '</span></li>';
      });
      s += '</ul>';
    }
    return s;
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

  function pageSchedule(id) {
    var sc = SCHEDULES.filter(function (x) { return x.id === id; })[0];
    if (!sc) return '<p class="empty">No such Schedule.</p>';
    var ex = EXPLAIN['sch' + id];
    var s = '<div class="crumbs"><a href="#/schedules">Schedules</a><span>&rsaquo;</span>' + esc(sc.name) + '</div>' +
      '<div class="art-head"><div class="eyebrow">' + esc(sc.name) + '</div><h1>' + esc(sc.title) + '</h1>' +
      (sc.articles ? '<div class="tagline"><span class="pill grey">Attached to article ' + esc(sc.articles) + '</span></div>' : '') +
      '</div>';
    if (ex) s += explainBlock(ex);
    if (MAPS['sch' + id]) s += tag('Picture it', 'written') + renderDiagram(MAPS['sch' + id]);

    sc.sections.forEach(function (sec) {
      if (sec.title) s += tag(sec.title, 'source');
      else s += tag('Text', 'source');
      s += '<table class="sched">';
      sec.blocks.forEach(function (b) {
        s += '<tr><td class="n">' + esc(b.n || '') + '</td><td>' + bareHTML(b.t, sc.notes) + '</td></tr>';
      });
      s += '</table>';
    });
    s += caseBlock(CASES['sch' + id]);
    s += examBlock(EXAM['sch' + id]);
    s += notesBlock(sc.notes);
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

  // every case, flattened, with the article it hangs off
  function allCases() {
    var out = [];
    Object.keys(CASES).forEach(function (key) {
      var art = BY_NUM[key], where, sortN;
      if (key === 'preamble') {
        where = { href: '#/preamble', label: 'Preamble' };
        sortN = -1;
      } else if (key.indexOf('sch') === 0) {
        var id = key.slice(3);
        var sc = SCHEDULES.filter(function (x) { return x.id === id; })[0];
        where = { href: '#/schedule/' + id, label: sc ? sc.name : id + ' Schedule' };
        sortN = 1e4 + SCHEDULES.map(function (x) { return x.id; }).indexOf(id);
      } else {
        where = { href: '#/article/' + key, label: 'Art. ' + key };
        sortN = art ? art.n : 9e3;
      }
      CASES[key].forEach(function (c) {
        out.push({ c: c, key: key, where: where, sortN: sortN });
      });
    });
    return out;
  }

  // the flattened list the case grid and the overlay both index into
  var CASE_LIST = [];

  function caseSorters(list) {
    return {
      order: list.slice().sort(function (a, b) {
        return a.sortN - b.sortN || (+a.c.year) - (+b.c.year);
      }),
      year: list.slice().sort(function (a, b) {
        return (+b.c.year) - (+a.c.year) || a.sortN - b.sortN;
      })
    };
  }

  function caseCard(x, i) {
    var st = STATUS[x.c.status] || STATUS.good;
    return '<button class="case-card" data-ci="' + i + '" type="button">' +
      '<span class="cc-top"><span class="cc-where">' + esc(x.where.label) + '</span>' +
      (x.c.status && x.c.status !== 'good'
        ? '<span class="pill ' + st.pill + '">' + esc(st.label) + '</span>' : '') +
      '</span>' +
      '<span class="cc-name">' + esc(x.c.case) + '</span>' +
      '<span class="cc-meta">' + esc(x.c.year) +
      (x.c.bench ? ' &middot; ' + esc(x.c.bench) : '') + '</span>' +
      '<span class="cc-why">' + esc(x.c.why) + '</span></button>';
  }

  function pageCases() {
    CASE_LIST = allCases();
    var sorted = caseSorters(CASE_LIST);
    var uniq = {};
    CASE_LIST.forEach(function (x) { uniq[x.c.case] = 1; });

    var s = '<div class="page-head"><div class="eyebrow">Case law</div>' +
      '<h1>Landmark judgments</h1><p class="lede">' + Object.keys(uniq).length +
      ' judgments that changed what an article means. Click any card to read it here — what the ' +
      'dispute was, what the Court decided, and why it still matters — without leaving this page. ' +
      'A few appear under more than one article, because they did more than one thing.</p></div>';

    s += '<div class="case-tools">' +
      '<input id="caseFilter" type="search" placeholder="Filter by case, article or year — try Kesavananda, or 1978" autocomplete="off" spellcheck="false">' +
      '<div class="case-sort" role="group" aria-label="Sort">' +
      '<button type="button" class="on" data-sort="order">Constitutional order</button>' +
      '<button type="button" data-sort="year">Newest first</button>' +
      '</div></div>';

    s += '<div class="case-count" id="caseCount"></div>';
    s += '<div class="case-grid" id="caseGrid">' +
      sorted.order.map(function (x) { return caseCard(x, CASE_LIST.indexOf(x)); }).join('') +
      '</div>';
    return s;
  }

  /* ---------- the case overlay ---------- */

  var _lastFocus = null;

  function openCase(i) {
    var x = CASE_LIST[i];
    if (!x) return;
    var c = x.c, st = STATUS[c.status] || STATUS.good;
    closeSheet();
    _lastFocus = document.activeElement;

    var box = document.createElement('div');
    box.className = 'sheet-wrap';
    box.innerHTML =
      '<div class="sheet-back" data-close="1"></div>' +
      '<div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheetName">' +
      '<button class="sheet-x" type="button" data-close="1" aria-label="Close">&times;</button>' +
      '<div class="sheet-body">' +
      '<div class="sheet-head">' +
      '<a class="cc-where" href="' + x.where.href + '">' + esc(x.where.label) + ' &rarr;</a>' +
      '<h2 id="sheetName">' + esc(c.case) + '</h2>' +
      '<div class="case-meta"><span class="pill grey">' + esc(c.year) + '</span>' +
      (c.bench ? '<span class="pill blue">' + esc(c.bench) + '</span>' : '') +
      '<span class="pill ' + st.pill + '">' + esc(st.label) + '</span></div>' +
      (c.full && c.full !== c.case ? '<p class="case-full">' + esc(c.full) + '</p>' : '') +
      '</div>' +
      '<dl class="case-body">' +
      '<dt>What happened</dt><dd>' + para(c.facts) + '</dd>' +
      '<dt>What the Court held</dt><dd>' + para(c.held) + '</dd>' +
      '<dt>Why it matters</dt><dd>' + para(c.why) + '</dd>' +
      '</dl>' +
      '<div class="sheet-foot"><a class="chip" href="' + x.where.href + '">' +
      'Read ' + esc(x.where.label) + ' in full &rarr;</a>' +
      '<button class="chip" type="button" data-close="1">Close</button></div>' +
      '</div></div>';

    document.body.appendChild(box);
    document.body.classList.add('sheet-open');
    box.querySelector('.sheet-x').focus();
  }

  function closeSheet() {
    var open = $('.sheet-wrap');
    if (!open) return;
    open.remove();
    document.body.classList.remove('sheet-open');
    if (_lastFocus && _lastFocus.focus) _lastFocus.focus();
    _lastFocus = null;
  }

  function filterCases() {
    var box = $('#caseFilter'), grid = $('#caseGrid'), count = $('#caseCount');
    if (!grid) return;
    var q = (box ? box.value : '').trim().toLowerCase();
    var shown = 0;
    [].slice.call(grid.children).forEach(function (card) {
      var x = CASE_LIST[+card.getAttribute('data-ci')];
      var hay = (x.c.case + ' ' + (x.c.full || '') + ' ' + x.c.year + ' ' +
        (x.c.bench || '') + ' ' + x.where.label + ' ' + x.c.why).toLowerCase();
      var hit = !q || q.split(/\s+/).every(function (t) { return hay.includes(t); });
      card.hidden = !hit;
      if (hit) shown++;
    });
    count.textContent = q
      ? shown + ' of ' + CASE_LIST.length + ' judgments'
      : CASE_LIST.length + ' judgments, ' + Object.keys(CASE_LIST.reduce(function (m, x) {
          m[x.c.case] = 1; return m;
        }, {})).length + ' distinct';
  }

  function sortCases(mode) {
    var grid = $('#caseGrid');
    if (!grid) return;
    var sorted = caseSorters(CASE_LIST)[mode] || CASE_LIST;
    grid.innerHTML = sorted.map(function (x) {
      return caseCard(x, CASE_LIST.indexOf(x));
    }).join('');
    document.querySelectorAll('.case-sort button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-sort') === mode);
    });
    filterCases();
  }

  // Where a map's key points. A section key carries the Part and the section
  // name - "partV.IV:The Union Judiciary" - and the section's position in the
  // Part is what the route needs.
  function mapTarget(k) {
    if (k === 'preamble') return '#/preamble';
    if (k.indexOf('sch') === 0) return '#/schedule/' + k.slice(3);
    if (k.indexOf('part') !== 0) return '#/article/' + k;
    var rest = k.slice(4);
    var m = rest.match(/^([IVXAB]+)(?:\.[IVX]+)?:(.*)$/);
    if (!m) return '#/part/' + rest;
    var secs = partSections(m[1]);
    for (var i = 0; i < secs.length; i++) {
      if (secs[i].label === m[2]) return '#/part/' + m[1] + '/' + i;
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

  /* ---------- router ---------- */

  function route() {
    var h = location.hash || '#/';
    var main = $('#main'), out;
    var m;
    if ((m = h.match(/^#\/article\/(.+)$/))) out = pageArticle(decodeURIComponent(m[1]));
    else if ((m = h.match(/^#\/part\/([^\/]+)(?:\/([^\/]+))?$/)))
      out = pagePart(decodeURIComponent(m[1]), m[2]);
    else if ((m = h.match(/^#\/schedule\/(.+)$/))) out = pageSchedule(decodeURIComponent(m[1]));
    else if ((m = h.match(/^#\/search\/(.*)$/))) out = pageSearch(decodeURIComponent(m[1]));
    else if (h === '#/parts') out = pageParts();
    else if (h === '#/preamble') out = pagePreamble();
    else if (h === '#/schedules') out = pageSchedules();
    else if (h === '#/amendments') out = pageAmendments();
    else if (h === '#/cases') out = pageCases();
    else if (h === '#/exam') out = pageExam();
    else if (h === '#/about') out = pageAbout();
    else if (h === '#/maps') out = pageMaps();
    else out = pageHome();

    closeSheet();
    main.innerHTML = out + siteFooter();
    markActive(h);
    document.body.classList.remove('nav-open');
    if (!h.startsWith('#/search')) window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
    if (h === '#/cases') filterCases();
    if (h === '#/exam') filterExam();

    // The rail scrolls independently of the page, so on a long section the
    // article being read can sit below its fold. Bring it into the rail
    // without moving the page itself.
    var cur = main.querySelector('.pn-art.cur');
    if (cur) {
      var rail = cur.closest('.part-nav');
      if (rail && rail.scrollHeight > rail.clientHeight) {
        rail.scrollTop = Math.max(0, cur.offsetTop - rail.clientHeight / 2 + cur.offsetHeight / 2);
      }
    }
  }

  /* ---------- wiring ---------- */

  function init() {
    buildSidebar();

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
          go(top.sc ? '#/schedule/' + top.sc.id : '#/article/' + top.a.num);
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
      if (e.target.closest && e.target.closest('[data-close]')) { closeSheet(); return; }
      var card = e.target.closest && e.target.closest('.case-card');
      if (card) { openCase(+card.getAttribute('data-ci')); return; }
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
      // Only a Part page's rail switches panels in place; on an article page
      // the same items are ordinary links and must be left alone.
      var pn = e.target.closest && e.target.closest('.pn-item[data-sec]');
      if (pn) {
        var want = pn.getAttribute('data-sec');
        document.querySelectorAll('.pn-item').forEach(function (b) {
          b.classList.toggle('on', b === pn);
        });
        document.querySelectorAll('.part-sec').forEach(function (sec) {
          sec.hidden = !(want === 'all' || sec.getAttribute('data-sec') === want);
        });
        var body = document.querySelector('.part-body');
        if (body) window.scrollTo(0, Math.max(0, body.getBoundingClientRect().top + window.scrollY - 80));
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
    document.addEventListener('input', function (e) {
      if (e.target.id === 'caseFilter') filterCases();
      if (e.target.id === 'examFilter') filterExam();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && $('.sheet-wrap')) { e.stopPropagation(); closeSheet(); }
    });

    // Under 900px the sidebar is a drawer over the page; above it, it is a
    // column that folds away. One button, two behaviours, and the wide-screen
    // choice is remembered.
    $('#menuBtn').addEventListener('click', function () {
      if (window.matchMedia('(max-width: 900px)').matches) {
        document.body.classList.toggle('nav-open');
        return;
      }
      var off = document.body.classList.toggle('side-off');
      try { localStorage.setItem('coi-side', off ? 'off' : 'on'); } catch (err) { /* private mode */ }
    });
    $('#scrim').addEventListener('click', function () {
      document.body.classList.remove('nav-open');
    });

    try {
      if (localStorage.getItem('coi-side') === 'off') document.body.classList.add('side-off');
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
