/* The question papers a sighting can cite.

   A sighting in the exam data is one of two things:

     "UPSC Pre 2021 — birth-based citizenship"          uncited
     { s: "UPSC Pre 2021 — birth-based citizenship",    cited
       p: "CSP-2021-GS1", q: "42" }

   `p` is a key in this file and `q` is the question number as printed on the
   paper. Keeping the papers here rather than on each sighting means a URL is
   written once and fixed in one place when UPSC moves it, and it means a typo
   in a key is a dangling reference the checker can catch:

       python build/check_citations.py

   This registry ships EMPTY on purpose. Every sighting in the dataset was
   written from recollection of the papers, not transcribed from them, and a
   citation invented from the same recollection would be worth nothing — it
   would only make an unverified claim look verified. A citation belongs here
   after somebody has opened the actual paper and read the question.

   To add one:

     1. Download the paper from upsc.gov.in (see COI_PAPERS_INDEX below).
     2. Add an entry here, keyed however you like; the convention below is
        CSP / CSM (Prelims / Mains), year, paper.
     3. On the sighting in site/data/exam-*.js, replace the string with the
        object form and point `p` at the key.
     4. Run the checker. It reports coverage and flags dangling keys.

   Example of a filled entry — the URL below is a placeholder, not a real one,
   which is why it is commented out rather than shipped:

     // 'CSP-2021-GS1': {
     //   name: 'Civil Services Prelims 2021 — General Studies Paper I',
     //   url:  'https://upsc.gov.in/sites/default/files/<the actual file>.pdf'
     // },
                                                                             */

/* Where the papers live. Verify this once; if UPSC has moved the page, fixing
   it here fixes it everywhere the site sends a reader looking for a paper. */
window.COI_PAPERS_INDEX = 'https://upsc.gov.in/examinations/previous-question-papers';

window.COI_PAPERS = {
};
