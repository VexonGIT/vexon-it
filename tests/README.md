# Field tracker regression checks

Run from the repository root with Node.js (no npm dependencies):

```sh
node --test tests/*.test.cjs
```

The test harness extracts and executes the actual inline script from `index.html` using Node's VM and synthetic DOM/localStorage objects. It covers normal saved records, malformed JSON and invalid record shapes, explicit storage recovery, storage failures, HTML-sensitive names and cities, nonnegative decimal rates including zero, and adding/removing records.

The expanded harness also covers cent-based totals, unsafe-number limits, name validation, all 12 drawer/copy paths and clipboard failures. Service-scope checks reject historical price cards, verify residential/business wording, local documentation links and keyboard/drawer markup.

These are synthetic behavior and source-contract checks, not browser rendering, accessibility certification, legal review or real customer-data acceptance. All records are fictional; tests do not open a browser, make requests or access browser storage. See [release gates](../docs/release-2026-10-19.md).
