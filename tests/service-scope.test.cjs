const assert = require('node:assert/strict');
const { readFileSync, existsSync, readdirSync } = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const root = path.resolve(__dirname, '..');
const read = file => readFileSync(path.join(root, file), 'utf8');
const offerFiles = ['README.md', 'PARTNERSHIPS.md', 'docs/selected-projects.md',
  'docs/service-scope.md', 'guides/first-checks/README.md', 'index.html'];

test('current offer surfaces contain no historical or invented service prices', () => {
  for (const file of offerFiles) {
    const amounts = [...read(file).matchAll(/\$(\d[\d,]*(?:\.\d+)?)/g)].map(m => m[1]);
    assert.ok(amounts.every(amount => amount === '89' || (file === 'index.html' && amount === '0')),
      `${file}: unexpected offer amount ${amounts}`);
  }
});

test('residential offer and business readiness stay separate across public docs', () => {
  for (const file of ['README.md', 'docs/selected-projects.md', 'docs/service-scope.md',
    'guides/first-checks/README.md']) {
    const text = read(file).replace(/\*/g, '').replace(/\s+/g, ' ');
    assert.match(text, /\$89[^.\n]*one PC[^.\n]*one main issue[^.\n]*60 minutes/i, file);
    assert.match(text, /by quote/i, file);
    assert.match(text, /being prepared/i, file);
    assert.match(text, /no (?:approved )?recurring (?:business )?rate|no approved recurring business price/i, file);
    assert.match(text, /existing (?:customer )?agreements|existing commitments|signed agreement/i, file);
  }
});

test('no client-ready historical promises or signable templates remain in the app', () => {
  const text = read('index.html');
  for (const phrase of ['Print & Sign', 'Print and sign', 'Show clients', 'cancel anytime',
    'No surprise charges. Ever.', 'months of recurring revenue', 'passwords on a card',
    'reap3risgodawful', 'What to charge', 'WAVE APP SETUP', 'Azure AD join']) {
    assert.ok(!text.toLowerCase().includes(phrase.toLowerCase()), phrase);
  }
  assert.match(text, /not a contract/i);
  assert.match(text, /fictional records/i);
  assert.match(text, /commercial tool rights/i);
  assert.match(text, /one main issue, up to 60 minutes/);
});

test('all card triggers support keyboard activation and drawer has accessible controls', () => {
  const text = read('index.html');
  const cards = [...text.matchAll(/<div\s+class="card"[^>]*onclick=[^>]+>/g)];
  assert.ok(cards.length >= 12);
  for (const [tag] of cards) {
    assert.match(tag, /role="button"/);
    assert.match(tag, /tabindex="0"/);
    assert.match(tag, /onkeydown=/);
  }
  assert.match(text, /role="dialog" aria-modal="true" aria-labelledby="drawer-title"/);
  assert.match(text, /aria-label="Close guide"/);
  assert.match(text, /event.key === 'Escape'/);
});

function filesBelow(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === '.git') return [];
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(full) : [full];
  });
}

test('local Markdown links resolve and canonical repository URLs are used', () => {
  for (const file of filesBelow(root).filter(file => file.endsWith('.md'))) {
    const text = readFileSync(file, 'utf8');
    assert.ok(!text.includes('github.com/reap3risgodawful/'), file);
    for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0];
      if (!target || /^[a-z]+:/i.test(target)) continue;
      assert.ok(existsSync(path.resolve(path.dirname(file), target)), `${file}: ${target}`);
    }
  }
});
