// Script to verify all glossary links point to existing terms
import { GLOSSARY_TERMS } from '../src/data/glossaryTerms';
import { STATE_CONTENT } from '../src/data/content';
import * as fs from 'fs';
import * as path from 'path';

// Get all valid glossary slugs
const validSlugs = new Set(GLOSSARY_TERMS.map(term => term.slug));

// Function to extract all glossary links from HTML content
function extractGlossaryLinks(html: string): string[] {
  const linkRegex = /href="\/glossary\/([^"]+)"/g;
  const links: string[] = [];
  let match;
  
  while ((match = linkRegex.exec(html)) !== null) {
    links.push(match[1]);
  }
  
  return links;
}

// Check all state content
const brokenLinks = new Map<string, string[]>();
const allFoundLinks = new Set<string>();

console.log('Checking glossary links in state content...\n');

for (const [stateCode, content] of Object.entries(STATE_CONTENT)) {
  if (content.article) {
    const links = extractGlossaryLinks(content.article);
    links.forEach(link => allFoundLinks.add(link));
    
    const broken = links.filter(link => !validSlugs.has(link));
    if (broken.length > 0) {
      brokenLinks.set(`${content.name} (${stateCode})`, broken);
    }
  }
}

// Check other data files
const dataFiles = [
  '../src/data/coastalContent.ts',
  '../src/data/wildfireContent.ts'
];

for (const file of dataFiles) {
  try {
    const filePath = path.join(__dirname, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const links = extractGlossaryLinks(fileContent);
    
    links.forEach(link => allFoundLinks.add(link));
    
    const broken = links.filter(link => !validSlugs.has(link));
    if (broken.length > 0) {
      brokenLinks.set(path.basename(file), broken);
    }
  } catch (error) {
    console.log(`Could not read ${file}: ${error}`);
  }
}

// Report results
console.log('='.repeat(60));
console.log('GLOSSARY LINK VERIFICATION RESULTS');
console.log('='.repeat(60));
console.log();

console.log(`Total valid glossary terms: ${validSlugs.size}`);
console.log(`Total unique links found: ${allFoundLinks.size}`);
console.log();

if (brokenLinks.size === 0) {
  console.log('✅ All glossary links are valid!');
} else {
  console.log(`❌ Found broken links in ${brokenLinks.size} location(s):\n`);
  
  for (const [location, links] of brokenLinks) {
    console.log(`📍 ${location}:`);
    links.forEach(link => {
      console.log(`   - /glossary/${link}`);
    });
    console.log();
  }
  
  console.log('\nMissing glossary terms that need to be created:');
  const uniqueBroken = new Set<string>();
  brokenLinks.forEach(links => links.forEach(link => uniqueBroken.add(link)));
  uniqueBroken.forEach(link => {
    console.log(`   - ${link}`);
  });
}

console.log('\n' + '='.repeat(60));
console.log('All links referenced:');
console.log('='.repeat(60));
const sortedLinks = Array.from(allFoundLinks).sort();
sortedLinks.forEach(link => {
  const status = validSlugs.has(link) ? '✅' : '❌';
  console.log(`${status} ${link}`);
});
