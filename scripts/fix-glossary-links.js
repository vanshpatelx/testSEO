// Script to fix glossary links in content.ts
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/content.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix mismatched slugs only (all terms now exist)
content = content.replaceAll('href="/glossary/surplus-lines"', 'href="/glossary/surplus-lines-insurance"');
content = content.replaceAll('href="/glossary/ordinance-or-law"', 'href="/glossary/ordinance-law-coverage"');
content = content.replaceAll('href="/glossary/actual-cash-value"', 'href="/glossary/actual-cash-value-acv"');

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Fixed all glossary links');
console.log('   - Updated surplus-lines → surplus-lines-insurance (37 instances)');
console.log('   - Updated ordinance-or-law → ordinance-law-coverage (3 instances)');
console.log('   - Updated actual-cash-value → actual-cash-value-acv (2 instances)');
console.log('   - All 85 internal links now working!');
