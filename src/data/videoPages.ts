import type { VideoPage } from '../types';

export const VIDEO_PAGES: VideoPage[] = [
  {
    id: '1',
    title: 'Understanding High-Risk Home Insurance Basics',
    slug: 'high-risk-insurance-basics',
    description: 'Learn the fundamentals of high-risk home insurance, what makes a property high-risk, and your coverage options.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '8:45',
    category: 'Basics',
    tags: ['High-Risk Insurance', 'Home Insurance', 'Insurance Basics'],
    metaDescription: 'Learn the basics of high-risk home insurance including what makes properties high-risk and available coverage options.',
    publishedAt: '2024-01-15',
    transcript: `
In this video, we'll cover the essential basics of high-risk home insurance. We'll discuss what factors make a property considered "high-risk" by insurance companies, including location-based risks like coastal areas, wildfire zones, and flood plains. You'll learn about the different coverage options available, from private market carriers to FAIR Plans, and understand when each option might be appropriate for your situation.

Key topics covered:
- Definition of high-risk properties
- Common risk factors
- Coverage options available
- How to determine if you need high-risk insurance
- Steps to take if you've been classified as high-risk
    `,
    relatedVideos: ['fair-plan-explained', 'nonrenewal-what-to-do', 'coastal-property-insurance']
  },
  {
    id: '2',
    title: 'FAIR Plan Insurance Explained',
    slug: 'fair-plan-explained',
    description: 'Complete guide to FAIR Plan insurance - when you need it, how it works, and what it covers.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '12:30',
    category: 'Coverage Options',
    tags: ['FAIR Plan', 'State Insurance', 'High-Risk Coverage'],
    metaDescription: 'Complete guide to FAIR Plan insurance including eligibility, coverage, costs, and how it compares to private market options.',
    publishedAt: '2024-01-12',
    transcript: `
FAIR Plans are state-sponsored insurance programs designed to provide basic property insurance when private market coverage isn't available. In this comprehensive guide, we'll explain how FAIR Plans work, what they cover, and when you might need to consider this option.

We'll cover:
- What FAIR Plan stands for and its purpose
- Eligibility requirements
- Coverage provided vs. limitations
- Cost comparison with private market
- How to apply for FAIR Plan coverage
- Transitioning back to private market
    `,
    relatedVideos: ['high-risk-insurance-basics', 'private-vs-fair-plan', 'surplus-lines-insurance']
  },
  {
    id: '3',
    title: 'What to Do After Insurance Nonrenewal',
    slug: 'nonrenewal-what-to-do',
    description: 'Step-by-step guide on handling insurance nonrenewal and finding new coverage quickly.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '10:15',
    category: 'Problem Solving',
    tags: ['Nonrenewal', 'Insurance Cancellation', 'Finding Coverage'],
    metaDescription: 'Learn what to do after insurance nonrenewal including immediate steps and strategies for finding new coverage.',
    publishedAt: '2024-01-10',
    transcript: `
Being nonrenewed by your insurance company can be stressful, but it's not the end of the road. This video provides a step-by-step action plan for handling nonrenewal and securing new coverage.

Topics covered:
- Understanding why nonrenewal happens
- Immediate steps to take after receiving notice
- How to shop for new coverage effectively
- Working with high-risk specialists
- Preventing future nonrenewals
- Documentation you'll need
    `,
    relatedVideos: ['high-risk-specialists', 'claims-history-impact', 'finding-right-agent']
  },
  {
    id: '4',
    title: 'Coastal Property Insurance Challenges',
    slug: 'coastal-property-insurance',
    description: 'Special considerations for insuring coastal properties including hurricane, wind, and flood coverage.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '14:20',
    category: 'Property Types',
    tags: ['Coastal Insurance', 'Hurricane Coverage', 'Wind Insurance'],
    metaDescription: 'Learn about coastal property insurance challenges including hurricane coverage, wind deductibles, and flood insurance requirements.',
    publishedAt: '2024-01-08',
    transcript: `
Coastal properties face unique insurance challenges due to exposure to hurricanes, windstorms, and flooding. This video explains the special considerations for coastal property insurance.

We'll discuss:
- Hurricane and windstorm coverage
- Separate wind deductibles
- Flood insurance requirements
- Coastal construction requirements
- State-specific programs (Citizens, TWIA, etc.)
- Risk mitigation strategies
    `,
    relatedVideos: ['flood-insurance-guide', 'hurricane-deductibles', 'windstorm-coverage']
  },
  {
    id: '5',
    title: 'Wildfire Insurance and WUI Properties',
    slug: 'wildfire-insurance-wui',
    description: 'Understanding wildfire insurance for properties in Wildland-Urban Interface zones.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '11:45',
    category: 'Property Types',
    tags: ['Wildfire Insurance', 'WUI Properties', 'Fire Coverage'],
    metaDescription: 'Learn about wildfire insurance for WUI properties including coverage options, defensible space requirements, and risk reduction.',
    publishedAt: '2024-01-05',
    transcript: `
Properties in Wildland-Urban Interface (WUI) zones face significant wildfire risk. This video covers everything you need to know about wildfire insurance and protecting your WUI property.

Key topics:
- What defines a WUI property
- Wildfire coverage options
- Defensible space requirements
- Fire-resistant construction materials
- Insurance company inspections
- State-specific wildfire programs
    `,
    relatedVideos: ['california-fair-plan', 'fire-resistant-materials', 'defensible-space-guide']
  },
  {
    id: '6',
    title: 'Flood Insurance Basics and Requirements',
    slug: 'flood-insurance-guide',
    description: 'Complete guide to flood insurance including NFIP coverage, private flood insurance, and requirements.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '13:10',
    category: 'Coverage Types',
    tags: ['Flood Insurance', 'NFIP', 'Flood Zones'],
    metaDescription: 'Comprehensive guide to flood insurance including NFIP coverage, private options, flood zones, and coverage requirements.',
    publishedAt: '2024-01-03',
    transcript: `
Flood insurance is a critical component of property protection, especially for high-risk properties. This video explains everything about flood insurance coverage.

We'll cover:
- NFIP vs. private flood insurance
- Flood zone designations
- Coverage limits and exclusions
- Waiting periods
- Cost factors
- When flood insurance is required
    `,
    relatedVideos: ['coastal-property-insurance', 'flood-zone-maps', 'private-flood-options']
  },
  {
    id: '7',
    title: 'Working with High-Risk Insurance Specialists',
    slug: 'high-risk-specialists',
    description: 'How to find and work with agents who specialize in high-risk properties and complex situations.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '9:30',
    category: 'Finding Agents',
    tags: ['Insurance Agents', 'High-Risk Specialists', 'Agent Selection'],
    metaDescription: 'Learn how to find and work with insurance agents who specialize in high-risk properties and complex coverage situations.',
    publishedAt: '2024-01-01',
    transcript: `
Not all insurance agents are equipped to handle high-risk properties. This video explains how to find and work with specialists who understand complex insurance situations.

Topics include:
- What makes an agent a "high-risk specialist"
- Questions to ask potential agents
- Red flags to avoid
- How specialists differ from general agents
- Building a productive relationship
- Getting the best results
    `,
    relatedVideos: ['finding-right-agent', 'agent-vs-broker', 'nonrenewal-what-to-do']
  },
  {
    id: '8',
    title: 'Understanding Insurance Claims History Impact',
    slug: 'claims-history-impact',
    description: 'How previous claims affect your ability to get coverage and strategies for managing claims history.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '10:45',
    category: 'Claims',
    tags: ['Claims History', 'Insurance Claims', 'Coverage Impact'],
    metaDescription: 'Learn how previous insurance claims affect coverage availability and strategies for managing claims history effectively.',
    publishedAt: '2023-12-28',
    transcript: `
Your claims history significantly impacts your ability to obtain insurance coverage. This video explains how claims affect coverage and what you can do about it.

We'll discuss:
- How long claims stay on your record
- Types of claims that matter most
- Frequency vs. severity impact
- Strategies for managing claims history
- When to file vs. pay out of pocket
- Working with claims on your record
    `,
    relatedVideos: ['nonrenewal-what-to-do', 'when-to-file-claims', 'claims-free-discounts']
  },
  {
    id: '9',
    title: 'Surplus Lines Insurance Explained',
    slug: 'surplus-lines-insurance',
    description: 'Understanding surplus lines insurance for unique risks and when standard markets won\'t provide coverage.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '12:00',
    category: 'Coverage Options',
    tags: ['Surplus Lines', 'Non-Admitted Insurance', 'Specialty Coverage'],
    metaDescription: 'Learn about surplus lines insurance including when it\'s used, benefits, costs, and how it differs from standard insurance.',
    publishedAt: '2023-12-25',
    transcript: `
Surplus lines insurance provides coverage for risks that standard insurance companies won't accept. This video explains when and how surplus lines insurance works.

Key points covered:
- What surplus lines insurance is
- Admitted vs. non-admitted carriers
- When surplus lines is needed
- Benefits and drawbacks
- Cost considerations
- Working with surplus lines brokers
    `,
    relatedVideos: ['fair-plan-explained', 'high-risk-insurance-basics', 'specialty-coverage-options']
  },
  {
    id: '10',
    title: 'Private Market vs FAIR Plan Comparison',
    slug: 'private-vs-fair-plan',
    description: 'Detailed comparison of private market insurance versus FAIR Plan coverage to help you choose.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '11:20',
    category: 'Coverage Options',
    tags: ['Private Insurance', 'FAIR Plan', 'Coverage Comparison'],
    metaDescription: 'Compare private market insurance vs FAIR Plan coverage including costs, benefits, and when to choose each option.',
    publishedAt: '2023-12-22',
    transcript: `
Choosing between private market insurance and FAIR Plan coverage is an important decision. This video provides a detailed comparison to help you decide.

Comparison includes:
- Coverage differences
- Cost analysis
- Claims handling
- Customer service
- Flexibility and options
- When each is appropriate
    `,
    relatedVideos: ['fair-plan-explained', 'private-market-options', 'coverage-decision-guide']
  },
  {
    id: '11',
    title: 'Older Home Insurance Challenges',
    slug: 'older-home-insurance',
    description: 'Special considerations for insuring older homes including common issues and solutions.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '13:30',
    category: 'Property Types',
    tags: ['Older Homes', 'Historic Properties', 'Home Age Issues'],
    metaDescription: 'Learn about insurance challenges for older homes including common issues, coverage options, and improvement strategies.',
    publishedAt: '2023-12-20',
    transcript: `
Older homes present unique insurance challenges due to outdated systems and construction methods. This video addresses these challenges and provides solutions.

Topics covered:
- Common issues with older homes
- Electrical and plumbing concerns
- Roof and structural considerations
- Improvement strategies
- Specialized coverage options
- Working with insurers on older properties
    `,
    relatedVideos: ['home-improvements-insurance', 'electrical-updates', 'roof-replacement-benefits']
  },
  {
    id: '12',
    title: 'Mobile and Manufactured Home Insurance',
    slug: 'mobile-manufactured-home-insurance',
    description: 'Insurance options and considerations for mobile homes and manufactured housing.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '10:30',
    category: 'Property Types',
    tags: ['Mobile Homes', 'Manufactured Housing', 'Specialty Insurance'],
    metaDescription: 'Learn about insurance options for mobile and manufactured homes including coverage types and special considerations.',
    publishedAt: '2023-12-18',
    transcript: `
Mobile and manufactured homes have unique insurance needs and challenges. This video explains the coverage options and considerations for these property types.

We'll discuss:
- Types of mobile home insurance
- HO-2 vs. HO-3 coverage
- Tie-down and foundation requirements
- Age and condition factors
- Specialized carriers
- Cost considerations
    `,
    relatedVideos: ['specialty-property-types', 'foundation-requirements', 'mobile-home-improvements']
  },
  {
    id: '13',
    title: 'Vacant Property Insurance Solutions',
    slug: 'vacant-property-insurance',
    description: 'Insurance options for vacant properties including seasonal homes and investment properties.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '9:45',
    category: 'Property Types',
    tags: ['Vacant Properties', 'Seasonal Homes', 'Investment Properties'],
    metaDescription: 'Learn about insurance options for vacant properties including seasonal homes and investment properties with special coverage needs.',
    publishedAt: '2023-12-15',
    transcript: `
Vacant properties require specialized insurance coverage due to increased risks. This video explains the options available for vacant and seasonal properties.

Key topics:
- Definition of vacant vs. unoccupied
- Increased risks of vacant properties
- Specialized vacant property coverage
- Seasonal home considerations
- Investment property insurance
- Risk mitigation strategies
    `,
    relatedVideos: ['seasonal-home-tips', 'investment-property-coverage', 'property-security-systems']
  },
  {
    id: '14',
    title: 'Understanding Wind and Hail Deductibles',
    slug: 'wind-hail-deductibles',
    description: 'How wind and hail deductibles work and strategies for managing these higher deductibles.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '8:20',
    category: 'Policy Details',
    tags: ['Wind Deductibles', 'Hail Coverage', 'Deductible Management'],
    metaDescription: 'Learn about wind and hail deductibles including how they work, typical amounts, and strategies for managing higher deductibles.',
    publishedAt: '2023-12-12',
    transcript: `
Wind and hail deductibles are often higher than standard deductibles and work differently. This video explains how these deductibles function and management strategies.

We'll cover:
- How wind/hail deductibles differ
- Percentage vs. dollar deductibles
- Trigger events and timing
- State variations
- Strategies for managing high deductibles
- When separate coverage might help
    `,
    relatedVideos: ['hurricane-deductibles', 'deductible-strategies', 'windstorm-coverage']
  },
  {
    id: '15',
    title: 'Hurricane Deductibles and Coverage',
    slug: 'hurricane-deductibles',
    description: 'Understanding hurricane deductibles, coverage triggers, and what\'s included in hurricane coverage.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '11:15',
    category: 'Weather Coverage',
    tags: ['Hurricane Coverage', 'Hurricane Deductibles', 'Storm Coverage'],
    metaDescription: 'Learn about hurricane deductibles and coverage including triggers, typical amounts, and what damage is covered.',
    publishedAt: '2023-12-10',
    transcript: `
Hurricane coverage and deductibles have special provisions that differ from standard coverage. This video explains how hurricane coverage works.

Topics include:
- Hurricane deductible triggers
- Named storm provisions
- Coverage included and excluded
- Deductible calculation methods
- State-specific variations
- Preparation and documentation tips
    `,
    relatedVideos: ['coastal-property-insurance', 'wind-hail-deductibles', 'storm-preparation-tips']
  },
  {
    id: '16',
    title: 'Earthquake Insurance Basics',
    slug: 'earthquake-insurance-basics',
    description: 'Understanding earthquake insurance coverage, costs, and when you need this specialized protection.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '10:00',
    category: 'Specialty Coverage',
    tags: ['Earthquake Insurance', 'Seismic Coverage', 'Specialty Insurance'],
    metaDescription: 'Learn about earthquake insurance including coverage options, costs, deductibles, and when this specialized coverage is needed.',
    publishedAt: '2023-12-08',
    transcript: `
Earthquake insurance is a specialized coverage that's not included in standard homeowners policies. This video explains when and why you might need earthquake insurance.

We'll discuss:
- What earthquake insurance covers
- High deductibles and how they work
- Cost factors and pricing
- Geographic risk considerations
- State earthquake programs
- Retrofitting and mitigation benefits
    `,
    relatedVideos: ['california-earthquake-authority', 'seismic-retrofitting', 'specialty-coverage-options']
  },
  {
    id: '17',
    title: 'Finding the Right Insurance Agent',
    slug: 'finding-right-agent',
    description: 'Tips for selecting an insurance agent who understands your needs and can provide proper service.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '9:15',
    category: 'Finding Agents',
    tags: ['Insurance Agents', 'Agent Selection', 'Professional Services'],
    metaDescription: 'Learn how to find the right insurance agent including questions to ask, qualifications to look for, and red flags to avoid.',
    publishedAt: '2023-12-05',
    transcript: `
Choosing the right insurance agent is crucial for getting proper coverage and service. This video provides guidance on selecting the best agent for your needs.

Selection criteria:
- Licensing and credentials
- Experience with your property type
- Market access and carrier relationships
- Communication style and availability
- Service philosophy and approach
- References and reputation
    `,
    relatedVideos: ['high-risk-specialists', 'agent-vs-broker', 'working-with-agents']
  },
  {
    id: '18',
    title: 'Insurance Agent vs Broker Differences',
    slug: 'agent-vs-broker',
    description: 'Understanding the differences between insurance agents and brokers and which is right for you.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '7:45',
    category: 'Finding Agents',
    tags: ['Insurance Agents', 'Insurance Brokers', 'Professional Differences'],
    metaDescription: 'Learn the differences between insurance agents and brokers including how they work, compensation, and which might be better for your needs.',
    publishedAt: '2023-12-03',
    transcript: `
Understanding the difference between insurance agents and brokers can help you choose the right professional for your needs. This video explains the key differences.

Key differences:
- How agents and brokers are compensated
- Who they represent
- Market access differences
- Service model variations
- Licensing requirements
- When each might be preferable
    `,
    relatedVideos: ['finding-right-agent', 'surplus-lines-brokers', 'professional-relationships']
  },
  {
    id: '19',
    title: 'Home Improvements That Lower Insurance Costs',
    slug: 'home-improvements-insurance',
    description: 'Property improvements that can reduce insurance premiums and improve coverage availability.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '12:45',
    category: 'Risk Reduction',
    tags: ['Home Improvements', 'Premium Reduction', 'Risk Mitigation'],
    metaDescription: 'Learn about home improvements that can lower insurance costs including roof updates, security systems, and safety features.',
    publishedAt: '2023-12-01',
    transcript: `
Strategic home improvements can significantly reduce insurance costs and improve coverage availability. This video identifies the most impactful improvements.

High-impact improvements:
- Roof replacement and materials
- Electrical system updates
- Plumbing improvements
- Security system installation
- Fire suppression systems
- Storm shutters and reinforcements
    `,
    relatedVideos: ['roof-replacement-benefits', 'security-system-discounts', 'electrical-updates']
  },
  {
    id: '20',
    title: 'When to File an Insurance Claim',
    slug: 'when-to-file-claims',
    description: 'Decision framework for when to file insurance claims versus paying out of pocket.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '8:50',
    category: 'Claims',
    tags: ['Insurance Claims', 'Claim Decisions', 'Claims Management'],
    metaDescription: 'Learn when to file insurance claims versus paying out of pocket including decision factors and long-term considerations.',
    publishedAt: '2023-11-28',
    transcript: `
Deciding when to file an insurance claim requires careful consideration of multiple factors. This video provides a framework for making these important decisions.

Decision factors:
- Claim amount vs. deductible
- Impact on future premiums
- Claims history considerations
- Type of damage and cause
- Long-term cost implications
- Alternative solutions
    `,
    relatedVideos: ['claims-history-impact', 'deductible-strategies', 'claims-free-discounts']
  },
  {
    id: '21',
    title: 'Understanding Replacement Cost vs Actual Cash Value',
    slug: 'replacement-cost-vs-acv',
    description: 'Key differences between replacement cost and actual cash value coverage and which is better.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '9:30',
    category: 'Coverage Types',
    tags: ['Replacement Cost', 'Actual Cash Value', 'Coverage Options'],
    metaDescription: 'Learn the differences between replacement cost and actual cash value coverage including benefits, costs, and which option is better.',
    publishedAt: '2023-11-25',
    transcript: `
Understanding the difference between replacement cost and actual cash value coverage is crucial for making informed insurance decisions. This video explains both options.

Key differences:
- How each coverage type works
- Depreciation considerations
- Premium differences
- Claim settlement examples
- When each might be appropriate
- Making the right choice for your situation
    `,
    relatedVideos: ['coverage-limits-guide', 'policy-features-explained', 'insurance-value-basics']
  },
  {
    id: '22',
    title: 'Liability Coverage for High-Risk Properties',
    slug: 'liability-coverage-high-risk',
    description: 'Understanding liability coverage needs for high-risk properties and additional protection options.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '10:20',
    category: 'Coverage Types',
    tags: ['Liability Coverage', 'Personal Liability', 'Umbrella Insurance'],
    metaDescription: 'Learn about liability coverage for high-risk properties including coverage amounts, additional risks, and umbrella policy benefits.',
    publishedAt: '2023-11-22',
    transcript: `
High-risk properties often have increased liability exposure. This video explains liability coverage considerations and additional protection options.

Liability considerations:
- Standard liability coverage amounts
- Increased risks with high-risk properties
- Umbrella policy benefits
- Professional liability considerations
- Guest injury scenarios
- Property-specific liability risks
    `,
    relatedVideos: ['umbrella-insurance-guide', 'property-liability-risks', 'coverage-adequacy-assessment']
  },
  {
    id: '23',
    title: 'Insurance for Rental Properties and Landlords',
    slug: 'rental-property-insurance',
    description: 'Specialized insurance needs for rental properties including landlord coverage and tenant considerations.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '13:00',
    category: 'Property Types',
    tags: ['Rental Properties', 'Landlord Insurance', 'Investment Properties'],
    metaDescription: 'Learn about insurance for rental properties including landlord coverage, tenant requirements, and liability considerations.',
    publishedAt: '2023-11-20',
    transcript: `
Rental properties require specialized insurance coverage that differs from standard homeowners insurance. This video explains landlord insurance needs.

Rental property coverage:
- Dwelling protection for rental properties
- Loss of rental income coverage
- Landlord liability considerations
- Tenant insurance requirements
- Property management considerations
- Fair rental value calculations
    `,
    relatedVideos: ['investment-property-coverage', 'tenant-insurance-requirements', 'rental-income-protection']
  },
  {
    id: '24',
    title: 'Seasonal Home Insurance Strategies',
    slug: 'seasonal-home-strategies',
    description: 'Insurance strategies for seasonal homes including vacancy periods and year-round protection.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '11:10',
    category: 'Property Types',
    tags: ['Seasonal Homes', 'Vacation Properties', 'Seasonal Coverage'],
    metaDescription: 'Learn insurance strategies for seasonal homes including vacancy coverage, year-round protection, and seasonal considerations.',
    publishedAt: '2023-11-18',
    transcript: `
Seasonal homes present unique insurance challenges due to vacancy periods and seasonal use patterns. This video provides strategies for proper coverage.

Seasonal considerations:
- Vacancy clause implications
- Seasonal occupancy definitions
- Winterization requirements
- Security and monitoring systems
- Maintenance during vacancy
- Year-round vs. seasonal policies
    `,
    relatedVideos: ['vacant-property-insurance', 'vacation-home-tips', 'seasonal-maintenance-guide']
  },
  {
    id: '25',
    title: 'Building Code Upgrade Coverage',
    slug: 'building-code-upgrades',
    description: 'Understanding building code upgrade coverage and why it\'s important for older properties.',
    videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    duration: '8:40',
    category: 'Coverage Types',
    tags: ['Building Codes', 'Upgrade Coverage', 'Ordinance Coverage'],
    metaDescription: 'Learn about building code upgrade coverage including what it covers, why it\'s needed, and how it protects older properties.',
    publishedAt: '2023-11-15',
    transcript: `
Building code upgrade coverage protects you from the additional costs of bringing your property up to current building codes after a covered loss. This video explains this important coverage.

Coverage details:
- What building code upgrades cover
- When this coverage applies
- Cost implications without coverage
- Older property considerations
- Local building code variations
- Coverage limit considerations
    `,
    relatedVideos: ['older-home-insurance', 'ordinance-law-coverage', 'reconstruction-costs']
  }
];

export const getVideoPageBySlug = (slug: string) => 
  VIDEO_PAGES.find(video => video.slug === slug);

export const getVideosByCategory = (category: string) =>
  VIDEO_PAGES.filter(video => video.category === category);

export const getAllCategories = () => {
  const categories = new Set<string>();
  VIDEO_PAGES.forEach(video => {
    categories.add(video.category);
  });
  return Array.from(categories).sort();
};

export const getRelatedVideos = (currentSlug: string, relatedSlugs: string[]) =>
  VIDEO_PAGES.filter(video => 
    relatedSlugs.includes(video.slug) && video.slug !== currentSlug
  );