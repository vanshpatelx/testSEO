import type { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: '1',
    term: 'Actual Cash Value (ACV)',
    slug: 'actual-cash-value-acv',
    definition: 'The replacement cost of damaged property minus depreciation due to age, wear, and tear.',
    content: `Actual Cash Value (ACV) is the replacement cost minus depreciation. For example, if your 5-year-old roof costs $20,000 to replace but has depreciated $8,000, your ACV settlement would be $12,000.`,
    category: 'Policy Terms',
    relatedTerms: ['replacement-cost', 'depreciation'],
    metaDescription: 'Learn about Actual Cash Value (ACV) in insurance and how it differs from replacement cost coverage.',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    term: 'Replacement Cost',
    slug: 'replacement-cost',
    definition: 'The amount it would cost to replace damaged property with new property of similar kind and quality, without deducting for depreciation.',
    content: `Replacement cost coverage pays the full amount to replace damaged property with new items. Unlike ACV, there's no deduction for depreciation, providing better financial protection.`,
    category: 'Policy Terms',
    relatedTerms: ['actual-cash-value-acv', 'coverage-limit'],
    metaDescription: 'Understand replacement cost coverage and why it provides better protection than actual cash value.',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '3',
    term: 'Deductible',
    slug: 'deductible',
    definition: 'The amount you must pay out-of-pocket before your insurance coverage begins to pay for a covered loss.',
    content: `Your deductible is subtracted from claim payments. If you have a $10,000 claim and $1,000 deductible, you pay $1,000 and insurance pays $9,000.`,
    category: 'Policy Terms',
    relatedTerms: ['premium', 'coverage-limit'],
    metaDescription: 'Learn how insurance deductibles work and how to choose the right deductible amount.',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '4',
    term: 'Premium',
    slug: 'premium',
    definition: 'The amount you pay for your insurance policy, typically paid monthly, quarterly, or annually.',
    content: `Your premium is the cost of insurance coverage, based on risk factors, coverage amounts, and deductibles. Higher deductibles typically result in lower premiums.`,
    category: 'Policy Terms',
    relatedTerms: ['deductible', 'risk-assessment'],
    metaDescription: 'Understand insurance premiums and factors that affect your insurance costs.',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '5',
    term: 'FAIR Plan',
    slug: 'fair-plan',
    definition: 'State-sponsored insurance programs that provide basic property insurance when coverage is not available in the private market.',
    content: `FAIR Plans provide basic fire and extended coverage when private insurers won't offer coverage. They're typically more expensive but serve as a safety net for high-risk properties.`,
    category: 'Insurance Programs',
    relatedTerms: ['high-risk-property', 'surplus-lines-insurance'],
    metaDescription: 'Learn about FAIR Plans - state insurance programs for high-risk properties.'
  },
  {
    id: '6',
    term: 'High-Risk Property',
    slug: 'high-risk-property',
    definition: 'Properties that insurance companies consider more likely to experience losses due to location, condition, or other risk factors.',
    content: `High-risk properties include coastal homes, older properties, homes with claims history, or properties in areas prone to natural disasters. These require specialized insurance approaches.`,
    category: 'Risk Factors',
    relatedTerms: ['fair-plan', 'nonrenewal'],
    metaDescription: 'Learn what makes a property high-risk and how to find appropriate insurance coverage.'
  },
  {
    id: '7',
    term: 'Nonrenewal',
    slug: 'nonrenewal',
    definition: 'An insurance company\'s decision not to continue a policy when it expires, typically due to increased risk or claims history.',
    content: `Nonrenewal occurs at policy expiration when insurers decide not to continue coverage. Common reasons include multiple claims, increased risk, or company policy changes.`,
    category: 'Risk Factors',
    relatedTerms: ['high-risk-property', 'claims-history'],
    metaDescription: 'Understand insurance nonrenewal and steps to take to find new coverage.'
  },
  {
    id: '8',
    term: 'Underwriting',
    slug: 'underwriting',
    definition: 'The process insurance companies use to evaluate risk and determine whether to provide coverage and at what price.',
    content: `Underwriting involves assessing property risks, reviewing applications, and determining coverage eligibility and pricing. It's how insurers decide whether to offer coverage.`,
    category: 'Risk Factors',
    relatedTerms: ['risk-assessment', 'premium'],
    metaDescription: 'Learn about insurance underwriting and how companies assess risk.'
  },
  {
    id: '9',
    term: 'Surplus Lines Insurance',
    slug: 'surplus-lines-insurance',
    definition: 'Insurance coverage provided by non-admitted insurers for risks that cannot be placed with standard admitted carriers.',
    content: `Surplus lines insurers provide coverage for unique or high-risk properties that standard insurers won't cover. They offer more flexibility but aren't covered by state guaranty funds.`,
    category: 'Insurance Programs',
    relatedTerms: ['high-risk-property', 'fair-plan'],
    metaDescription: 'Learn about surplus lines insurance for high-risk properties and unique situations.'
  },
  {
    id: '10',
    term: 'Wind and Hail Deductible',
    slug: 'wind-hail-deductible',
    definition: 'A separate, often higher deductible that applies specifically to damage caused by wind and hail storms.',
    content: `Wind and hail deductibles are typically percentage-based (1-5% of dwelling coverage) and apply only to wind/hail damage. They're common in storm-prone areas.`,
    category: 'Policy Terms',
    relatedTerms: ['deductible', 'hurricane-deductible'],
    metaDescription: 'Understand wind and hail deductibles and how they work in storm-prone areas.'
  },
  {
    id: '11',
    term: 'Hurricane Deductible',
    slug: 'hurricane-deductible',
    definition: 'A separate deductible that applies to hurricane-related damage, typically higher than standard deductibles.',
    content: `Hurricane deductibles are triggered by named storms and are usually percentage-based. They apply to all hurricane damage and are common in coastal areas.`,
    category: 'Policy Terms',
    relatedTerms: ['wind-hail-deductible', 'deductible'],
    metaDescription: 'Learn about hurricane deductibles and how they apply to storm damage in coastal areas.'
  },
  {
    id: '12',
    term: 'Dwelling Coverage',
    slug: 'dwelling-coverage',
    definition: 'Insurance coverage that protects the physical structure of your home, including attached structures.',
    content: `Dwelling coverage (Coverage A) protects your home's structure, including walls, roof, foundation, and attached structures like garages. It should equal your home's replacement cost.`,
    category: 'Coverage Types',
    relatedTerms: ['replacement-cost', 'coverage-limit'],
    metaDescription: 'Understand dwelling coverage and how it protects your home\'s structure.'
  },
  {
    id: '13',
    term: 'Personal Property Coverage',
    slug: 'personal-property-coverage',
    definition: 'Insurance coverage for your personal belongings inside your home, such as furniture, clothing, and electronics.',
    content: `Personal property coverage (Coverage C) protects your belongings like furniture, clothes, and electronics. It's typically 50-70% of your dwelling coverage amount.`,
    category: 'Coverage Types',
    relatedTerms: ['dwelling-coverage', 'replacement-cost'],
    metaDescription: 'Learn about personal property coverage and how it protects your belongings.'
  },
  {
    id: '14',
    term: 'Liability Coverage',
    slug: 'liability-coverage',
    definition: 'Insurance protection against claims for bodily injury or property damage that you may cause to others.',
    content: `Liability coverage protects you if someone is injured on your property or you accidentally damage someone else's property. It includes legal defense costs.`,
    category: 'Coverage Types',
    relatedTerms: ['personal-property-coverage', 'umbrella-policy'],
    metaDescription: 'Understand liability coverage and how it protects you from lawsuits and claims.'
  },
  {
    id: '15',
    term: 'Claims History',
    slug: 'claims-history',
    definition: 'A record of insurance claims you have filed, which insurers use to assess your risk level.',
    content: `Your claims history affects insurance availability and pricing. Multiple claims, especially in recent years, can lead to higher premiums or nonrenewal.`,
    category: 'Risk Factors',
    relatedTerms: ['nonrenewal', 'underwriting'],
    metaDescription: 'Learn how claims history affects insurance coverage and pricing.'
  },
  {
    id: '16',
    term: 'Coverage Limit',
    slug: 'coverage-limit',
    definition: 'The maximum amount an insurance company will pay for a covered loss under your policy.',
    content: `Coverage limits represent the maximum financial protection your insurance policy provides. Understanding these limits is crucial for ensuring adequate protection.`,
    category: 'Policy Terms',
    relatedTerms: ['replacement-cost', 'dwelling-coverage'],
    metaDescription: 'Learn about insurance coverage limits and how to determine adequate limits for your property.'
  },
  {
    id: '17',
    term: 'Risk Assessment',
    slug: 'risk-assessment',
    definition: 'The evaluation of potential risks and hazards that could affect a property or cause insurance claims.',
    content: `Risk assessment involves analyzing location, property condition, claims history, and other factors to determine insurance eligibility and pricing.`,
    category: 'Risk Factors',
    relatedTerms: ['underwriting', 'high-risk-property'],
    metaDescription: 'Understand how insurance companies assess risk for properties and determine coverage decisions.'
  },
  {
    id: '18',
    term: 'Peril',
    slug: 'peril',
    definition: 'A specific risk or cause of loss covered by an insurance policy, such as fire, theft, or windstorm.',
    content: `Perils are the specific causes of loss that insurance policies cover. Common perils include fire, lightning, windstorm, hail, theft, and vandalism.`,
    category: 'Policy Terms',
    relatedTerms: ['coverage-limit', 'exclusion'],
    metaDescription: 'Learn about insurance perils and what causes of loss are typically covered by homeowners insurance.'
  },
  {
    id: '19',
    term: 'Exclusion',
    slug: 'exclusion',
    definition: 'Specific conditions, circumstances, or types of losses that are not covered by an insurance policy.',
    content: `Exclusions are explicitly listed in insurance policies to clarify what is not covered. Common exclusions include flood, earthquake, and normal wear and tear.`,
    category: 'Policy Terms',
    relatedTerms: ['peril', 'coverage-limit'],
    metaDescription: 'Understand insurance exclusions and what types of losses are typically not covered by standard policies.'
  },
  {
    id: '20',
    term: 'Additional Living Expenses',
    slug: 'additional-living-expenses',
    definition: 'Coverage for extra costs of living elsewhere while your home is being repaired or rebuilt after a covered loss.',
    content: `Additional Living Expenses (ALE) covers hotel bills, restaurant meals, and other extra costs when you can't live in your home due to covered damage.`,
    category: 'Coverage Types',
    relatedTerms: ['dwelling-coverage', 'coverage-limit'],
    metaDescription: 'Learn about Additional Living Expenses coverage and how it helps when you can\'t live in your home after a loss.'
  },
  {
    id: '21',
    term: 'Depreciation',
    slug: 'depreciation',
    definition: 'The decrease in value of property over time due to age, wear, tear, and obsolescence.',
    content: `Depreciation reduces the value of property over time. In insurance, it's the difference between replacement cost and actual cash value.`,
    category: 'Policy Terms',
    relatedTerms: ['actual-cash-value-acv', 'replacement-cost'],
    metaDescription: 'Understand depreciation in insurance and how it affects claim settlements and coverage values.'
  },
  {
    id: '22',
    term: 'Coinsurance',
    slug: 'coinsurance',
    definition: 'A policy provision that requires you to carry insurance equal to a specified percentage of your property\'s value.',
    content: `Coinsurance clauses require you to insure your property for a certain percentage (usually 80%) of its replacement value to avoid penalties.`,
    category: 'Policy Terms',
    relatedTerms: ['coverage-limit', 'replacement-cost'],
    metaDescription: 'Learn about coinsurance clauses and how they affect your coverage and claim payments.'
  },
  {
    id: '23',
    term: 'Umbrella Policy',
    slug: 'umbrella-policy',
    definition: 'Additional liability insurance that provides coverage above the limits of your underlying policies.',
    content: `Umbrella policies provide extra liability protection beyond your home and auto insurance limits, typically in $1 million increments.`,
    category: 'Coverage Types',
    relatedTerms: ['liability-coverage', 'coverage-limit'],
    metaDescription: 'Understand umbrella insurance policies and how they provide additional liability protection.'
  },
  {
    id: '24',
    term: 'Admitted Carrier',
    slug: 'admitted-carrier',
    definition: 'Insurance companies that are licensed and regulated by the state where they operate.',
    content: `Admitted carriers are licensed by state insurance departments, follow state regulations, and participate in state guaranty funds.`,
    category: 'Insurance Programs',
    relatedTerms: ['surplus-lines-insurance', 'fair-plan'],
    metaDescription: 'Learn about admitted insurance carriers and how they differ from surplus lines insurers.'
  },
  {
    id: '25',
    term: 'Residual Market',
    slug: 'residual-market',
    definition: 'State-sponsored insurance programs that provide coverage when the private market is unavailable.',
    content: `Residual markets include FAIR Plans and other state programs that serve as insurers of last resort for high-risk properties.`,
    category: 'Insurance Programs',
    relatedTerms: ['fair-plan', 'high-risk-property'],
    metaDescription: 'Understand residual insurance markets and state programs for high-risk properties.'
  },
  {
    id: '26',
    term: 'Catastrophe Modeling',
    slug: 'catastrophe-modeling',
    definition: 'Computer models used to estimate potential losses from natural disasters like hurricanes, earthquakes, and floods.',
    content: `Catastrophe models help insurers assess risk and set rates for properties in disaster-prone areas using historical data and scientific analysis.`,
    category: 'Risk Factors',
    relatedTerms: ['risk-assessment', 'underwriting'],
    metaDescription: 'Learn about catastrophe modeling and how insurers use it to assess natural disaster risks.'
  },
  {
    id: '27',
    term: 'Mitigation Credit',
    slug: 'mitigation-credit',
    definition: 'Premium discounts or deductible reductions offered for property improvements that reduce risk.',
    content: `Mitigation credits reward homeowners for installing storm shutters, impact-resistant roofing, security systems, and other risk-reducing improvements.`,
    category: 'Risk Factors',
    relatedTerms: ['premium', 'risk-assessment'],
    metaDescription: 'Understand mitigation credits and how property improvements can reduce insurance costs.'
  },
  {
    id: '28',
    term: 'Named Storm',
    slug: 'named-storm',
    definition: 'A tropical cyclone or hurricane that has been assigned a name by the National Hurricane Center.',
    content: `Named storms trigger special deductibles and coverage provisions in coastal areas. They're officially designated by weather services when they reach specific wind speeds.`,
    category: 'Policy Terms',
    relatedTerms: ['hurricane-deductible', 'wind-hail-deductible'],
    metaDescription: 'Learn about named storms and how they affect insurance coverage and deductibles.'
  },
  {
    id: '29',
    term: 'Wildland-Urban Interface (WUI)',
    slug: 'wildland-urban-interface-wui',
    definition: 'Areas where human development meets or intermixes with undeveloped wildland vegetation, creating elevated wildfire risk.',
    content: `WUI properties face unique wildfire risks and often require specialized insurance coverage. These areas are identified by fire departments and insurance companies for risk assessment.`,
    category: 'Risk Factors',
    relatedTerms: ['high-risk-property', 'mitigation-credit'],
    metaDescription: 'Understand Wildland-Urban Interface zones and their impact on wildfire insurance coverage.'
  },
  {
    id: '30',
    term: 'Ordinance or Law Coverage',
    slug: 'ordinance-law-coverage',
    definition: 'Coverage for additional costs to comply with current building codes when rebuilding after a covered loss.',
    content: `This coverage pays for extra costs when local building codes require upgrades during reconstruction. It's especially important for older homes that may not meet current standards.`,
    category: 'Coverage Types',
    relatedTerms: ['dwelling-coverage', 'replacement-cost'],
    metaDescription: 'Learn about ordinance or law coverage and why it\'s important for older properties and building code compliance.'
  },
  {
    id: '31',
    term: 'Water Backup Coverage',
    slug: 'water-backup-coverage',
    definition: 'Coverage for damage caused by water or sewage backing up through drains, sewers, or sump pump failures.',
    content: `Water backup coverage protects against damage when water backs up through drains, toilets, or sump pumps. This is typically excluded from standard homeowners policies but can be added as an endorsement. It's especially important in areas prone to heavy rainfall or homes with finished basements.`,
    category: 'Coverage Types',
    relatedTerms: ['dwelling-coverage', 'additional-living-expenses'],
    metaDescription: 'Learn about water backup coverage and how it protects against sewer and drain backup damage.'
  },
  {
    id: '32',
    term: 'HO-3 Policy',
    slug: 'ho-3-policy',
    definition: 'The most common homeowners insurance policy form, providing open-peril coverage for the dwelling and named-peril coverage for personal property.',
    content: `An HO-3 policy, also called a "Special Form" policy, is the most popular homeowners insurance policy. It covers your home's structure against all perils except those specifically excluded (open-peril coverage), while personal property is covered on a named-peril basis. This provides broad protection for most homeowners.`,
    category: 'Policy Terms',
    relatedTerms: ['dwelling-coverage', 'personal-property-coverage', 'peril'],
    metaDescription: 'Understand HO-3 policies and why they are the most common homeowners insurance form.'
  },
  {
    id: '33',
    term: 'Flood Insurance',
    slug: 'flood-insurance',
    definition: 'Separate insurance coverage that protects against flood damage, which is excluded from standard homeowners policies.',
    content: `Flood insurance covers damage from rising water, surface water overflow, and mudflows. Standard homeowners policies exclude flood, making separate flood coverage essential for properties in flood-prone areas. Coverage is available through the National Flood Insurance Program (NFIP) or private insurers. Most NFIP policies have a 30-day waiting period before coverage begins, so purchasing early is important.`,
    category: 'Coverage Types',
    relatedTerms: ['nfip', 'high-risk-property', 'dwelling-coverage'],
    metaDescription: 'Learn about flood insurance, why it\'s separate from homeowners insurance, and how to obtain coverage.',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '34',
    term: 'NFIP',
    slug: 'nfip',
    definition: 'The National Flood Insurance Program - a federal program providing flood insurance to property owners, renters, and businesses.',
    content: `The National Flood Insurance Program (NFIP) is managed by FEMA and provides flood insurance coverage when private insurance is not available. NFIP policies typically have a 30-day waiting period before coverage begins. The program offers coverage for buildings and contents, with specific limits and requirements. Property owners in Special Flood Hazard Areas (SFHAs) with federally backed mortgages are required to carry flood insurance.`,
    category: 'Insurance Programs',
    relatedTerms: ['flood-insurance', 'fair-plan', 'high-risk-property'],
    metaDescription: 'Understand the National Flood Insurance Program (NFIP) and how it provides flood coverage.',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15'
  }
];

export const getGlossaryTermBySlug = (slug: string) => 
  GLOSSARY_TERMS.find(term => term.slug === slug);

export const getTermsByCategory = (category: string) =>
  GLOSSARY_TERMS.filter(term => term.category === category);

export const getAllCategories = () => {
  const categories = new Set<string>();
  GLOSSARY_TERMS.forEach(term => {
    categories.add(term.category);
  });
  return Array.from(categories).sort();
};

export const getRelatedTerms = (currentSlug: string, relatedSlugs: string[]) =>
  GLOSSARY_TERMS.filter(term => 
    relatedSlugs.includes(term.slug) && term.slug !== currentSlug
  );