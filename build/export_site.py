"""Write the parsed Constitution out as plain .js data files.

The site has to work from a double-clicked index.html, and file:// blocks
fetch(), so the data ships as `window.X = {...}` script files rather than JSON.
"""
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent / "site" / "data"
OUT.mkdir(parents=True, exist_ok=True)

ARTREF = re.compile(r"\barticles?\s+((?:\d{1,3}[A-Z]{0,3})(?:\s*\([^)]{1,12}\))?"
                    r"(?:\s*(?:,|and|or|to)\s*\d{1,3}[A-Z]{0,3}(?:\s*\([^)]{1,12}\))?)*)", re.I)
SCHEDREF = re.compile(r"\b(First|Second|Third|Fourth|Fifth|Sixth|Seventh|Eighth|Ninth|"
                      r"Tenth|Eleventh|Twelfth)\s+Schedule\b")


def dump(name, var, obj):
    body = json.dumps(obj, ensure_ascii=False, separators=(",", ":"))
    (OUT / name).write_text("window.%s = %s;\n" % (var, body), encoding="utf-8")
    print("%-22s %8.1f KB" % (name, (OUT / name).stat().st_size / 1024))


def main():
    data = json.load(open(HERE / "articles.json", encoding="utf-8"))
    scheds = json.load(open(HERE / "schedules.json", encoding="utf-8"))
    amds = json.load(open(HERE / "amendments.json", encoding="utf-8"))

    known = {a["num"] for a in data["articles"]}
    for a in data["articles"]:
        blob = " ".join(p["t"] for p in a["paras"])
        refs, seen = [], {a["num"]}
        for m in ARTREF.finditer(blob):
            for n in re.findall(r"\d{1,3}[A-Z]{0,3}", m.group(1)):
                if n in known and n not in seen:
                    seen.add(n)
                    refs.append(n)
        a["refs"] = refs[:14]
        a["schedRefs"] = sorted(set(SCHEDREF.findall(blob)))
        a["chars"] = sum(len(p["t"]) for p in a["paras"])

    dump("constitution.js", "COI", {
        "source": {
            "title": "The Constitution of India",
            "edition": "As on 1st May, 2024",
            "publisher": "Legislative Department, Ministry of Law and Justice, Government of India",
            "updatedTo": "The Constitution (One Hundred and Sixth Amendment) Act, 2023",
            "currency": ("The 106th is still the last amendment enacted, so this text is "
                         "the Constitution as it stands. Later Amendment Bills - including "
                         "the 129th and 131st - have not become law."),
            "url": "https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf",
        },
        "parts": data["parts"],
        "preamble": data["preamble"],
        "articles": data["articles"],
    })
    dump("schedules.js", "COI_SCHEDULES", scheds)
    dump("amendments.js", "COI_AMENDMENTS", amds)

    live = [a for a in data["articles"] if not a["omitted"]]
    print("articles:", len(data["articles"]), "live:", len(live))
    print("with cross-refs:", sum(1 for a in data["articles"] if a["refs"]))


if __name__ == "__main__":
    main()
