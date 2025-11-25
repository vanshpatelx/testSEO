#!/bin/bash
# Backup and fix glossary links

cd "$(dirname "$0")/.."

# Create backup
cp src/data/content.ts src/data/content.ts.backup

# Apply fixes using sed
sed -i.tmp 's|href="/glossary/surplus-lines"|href="/glossary/surplus-lines-insurance"|g' src/data/content.ts
sed -i.tmp 's|href="/glossary/ordinance-or-law"|href="/glossary/ordinance-law-coverage"|g' src/data/content.ts  
sed -i.tmp 's|href="/glossary/actual-cash-value"|href="/glossary/actual-cash-value-acv"|g' src/data/content.ts

# Remove temp files
rm -f src/data/content.ts.tmp

echo "✅ Fixed all glossary links!"
echo "   - surplus-lines → surplus-lines-insurance"
echo "   - ordinance-or-law → ordinance-law-coverage"
echo "   - actual-cash-value → actual-cash-value-acv"
echo ""
echo "Backup saved at: src/data/content.ts.backup"
