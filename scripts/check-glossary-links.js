#!/usr/bin/env node

/**
 * This script extracts all glossary links from content.ts and checks them
 * against the list of valid glossary terms.
 * 
 * Run with: node scripts/check-glossary-links.js
 */

const fs = require('fs');
const path = require('path');

// Read glossary terms
const glossaryPath = path.join(__dirname, '../src/data/glossaryTerms.ts');
const glossaryContent = fs.readFileSync(glossaryPath, 'utf-8');

// Extract all slugs from glossary terms
const slugMatches = glossaryContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
const validSlugs = new Set();
for (const match of slugMatches) {
  validSlugs.add(match[1]);
}

console.log(`Found ${validSlugs.size} valid glossary terms\n`);
console.log('Valid slugs:', Array.from(validSlugs).sort().join(', '));
console.log('\n' + '='.repeat(80) + '\n');

// Read content.ts
const contentPath = path.join(__dirname, '../src/data/content.ts');
const contentData = fs.readFileSync(contentPath, 'utf-8');

// Extract all glossary links
const linkMatches = contentData.matchAll(/href="\/glossary\/([^"]+)"/g);
const foundLinks = new Set();
const linkOccurrences = new Map();

for (const match of linkMatches) {
  const slug = match[1];
  foundLinks.add(slug);
  linkOccurrences.set(slug, (linkOccurrences.get(slug) || 0) + 1);
}

console.log(`Found ${foundLinks.size} unique glossary links referenced in content.ts\n`);

// Check for broken links
const brokenLinks = [];
const workingLinks = [];

for (const link of foundLinks) {
  if (validSlugs.has(link)) {
    workingLinks.push(link);
  } else {
    brokenLinks.push(link);
  }
}

// Report
if (brokenLinks.length === 0) {
  console.log('✅ SUCCESS: All glossary links are valid!\n');
} else {
  console.log(`❌ FOUND ${brokenLinks.length} BROKEN LINK(S):\n`);
  brokenLinks.forEach(link => {
    console.log(`   ❌ /glossary/${link} (used ${linkOccurrences.get(link)} time(s))`);
  });
  console.log('\n');
}

if (workingLinks.length > 0) {
  console.log(`✅ Working links (${workingLinks.length}):\n`);
  workingLinks.sort().forEach(link => {
    console.log(`   ✅ /glossary/${link} (used ${linkOccurrences.get(link)} time(s))`);
  });
  console.log('\n');
}

console.log('='.repeat(80));

// Exit with error code if broken links found
if (brokenLinks.length > 0) {
  process.exit(1);
}
