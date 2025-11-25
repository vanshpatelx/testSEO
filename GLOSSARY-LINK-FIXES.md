# Glossary Link Fixes Required

## Quick Fix Instructions

If you have the project locally, open `src/data/content.ts` and use your editor's Find & Replace:

### Replace 1:
**Find:** `href="/glossary/surplus-lines"`  
**Replace:** `href="/glossary/surplus-lines-insurance"`  
**Count:** 36 instances

### Replace 2:
**Find:** `href="/glossary/ordinance-or-law"`  
**Replace:** `href="/glossary/ordinance-law-coverage"`  
**Count:** 3 instances

### Replace 3:
**Find:** `href="/glossary/actual-cash-value"`  
**Replace:** `href="/glossary/actual-cash-value-acv"`  
**Count:** 2 instances

## Status
- ✅ Added missing glossary terms (water-backup-coverage, ho-3-policy)
- ⏳ Need to fix 41 slug mismatches in content.ts

## Result
All 85 internal glossary links will work correctly!
