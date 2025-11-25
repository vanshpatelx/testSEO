import type { State } from '../types';

// Helper function to create wildfire-specific content
const createWildfireContent = (name: string, code: string, customizations: any = {}) => {
  return {
    name,
    code,
    hero: customizations.hero || {
      title: `Wildfires in ${name}: Understanding the Risk and Protecting Your Home`,
      description: customizations.market_overview || `${name}'s mountains, forests, and deserts create conditions where wildfires can ignite and spread quickly. Homeowners need to understand this risk and how it affects both safety and insurance.`
    },
    sections: customizations.sections || [],
    takeaways: customizations.takeaways || [
      `We connect ${name} homeowners with wildfire insurance specialists`,
      "WUI (Wildland-Urban Interface) properties require specialized coverage",
      "Defensible space and fire-resistant improvements can improve coverage options"
    ],
    market_overview: customizations.market_overview || `${name}'s wildfire insurance market requires specialized expertise due to increasing wildfire risks. Our licensed agents understand WUI properties and work with carriers that specialize in wildfire-prone areas. We help homeowners navigate both private market options and state programs when needed.`,
    fair_vs_private: "Private market carriers with wildfire expertise are explored first. State programs or FAIR Plans are considered only when private options aren't available.",
    eligibility: "Eligibility depends on property location within WUI zones, defensible space compliance, construction materials, and fire mitigation measures implemented.",
    risk_factors: customizations.risk_factors || [
      "Location within Wildland-Urban Interface (WUI) zones",
      "Defensible space and vegetation management",
      "Roof materials and fire-resistant construction",
      "Access for emergency vehicles and firefighting equipment",
      "Previous fire damage or proximity to recent fires"
    ],
    how_it_works: [
      "Complete our wildfire property assessment form",
      "We connect you with agents specializing in WUI properties",
      "Agents evaluate private market wildfire coverage options",
      "If needed, in the states that have one, agents can refer you to FAIR Plan or residual market options"
    ],
    disclaimer: "This is a referral service connecting homeowners with licensed insurance agents specializing in wildfire insurance. Coverage availability depends on individual property characteristics and wildfire risk assessments."
  };
};

// Create content for wildfire states
export const WILDFIRE_CONTENT: Record<string, any> = {};

// State-specific wildfire content
const wildfireSpecificContent: Record<string, any> = {
  "AZ": {
    hero: {
      title: "Wildfires in Arizona: Understanding the Risk and Protecting Your Home",
      description: "Arizona's mountains, forests, and deserts create conditions where wildfires can ignite and spread quickly. Hotter summers, long dry spells, and vegetation that cures into fine fuels have extended the fire season. Homeowners in places such as Prescott, Flagstaff, Payson, Show Low, and Sedona should understand this risk and how it affects both safety and insurance."
    },
    sections: [
      {
        title: "Why Wildfires Are Increasing in Arizona",
        content: "Higher temperatures and variable precipitation promote fast vegetation growth followed by drought that dries fuels. Development has expanded into the wildland urban interface, where homes are interspersed with forests and grasslands. Wind events can carry embers over long distances, creating spot fires and rapid spread."
      },
      {
        title: "How Wildfire Risk Affects Homeowners Insurance",
        content: "Underwriters evaluate vegetation density, slope, access for fire response, roof and siding materials, and distance to hydrants or stations. Homes in high-exposure zones may face higher premiums, inspection requirements, or non-renewal. Some properties are placed with excess and surplus lines carriers that specialize in elevated risk. Documented mitigation can improve eligibility."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Request the reason in writing. Address correctable issues such as brush clearance, roof condition, or access. Provide photos and receipts for completed work. Work with an agent experienced in wildfire zones to locate markets that consider mitigation and to avoid a coverage lapse."
      },
      {
        title: "How to Make a Home More Fire Resistant",
        isList: true,
        content: [
          "Create defensible space by clearing vegetation and debris 30 to 100 feet from structures, adjusting for slope and terrain.",
          "Install and maintain a Class A fire-rated roof and keep gutters free of needles and leaves.",
          "Screen attic and crawl-space vents with fine metal mesh to block embers.",
          "Use non-combustible siding and decks and separate wooden fences from the home with a non-combustible break.",
          "Remove ladder fuels by pruning lower branches and spacing plants.",
          "Ensure driveways are accessible for firefighting vehicles and that addresses are clearly visible."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Join or form Firewise USA programs to coordinate fuel reduction and evacuation planning. Follow local burn restrictions and red-flag warnings. Keep emergency alerts enabled and prepare a go-kit, including copies of insurance documents and an up-to-date home inventory."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Wildfires will remain part of Arizona's landscape. By combining mitigation, defensible space, and continuous insurance coverage, homeowners can reduce risk and improve resilience during future seasons."
      }
    ],
    market_overview: "Arizona's mountains, forests, and deserts create conditions where wildfires can ignite and spread quickly. Hotter summers, long dry spells, and vegetation that cures into fine fuels have extended the fire season."
  },
  "NV": {
    hero: {
      title: "Wildfires in Nevada: Understanding the Risk and Protecting Your Home",
      description: "Nevada's high desert, rangelands, and forested mountains face recurring wildfire seasons. Fine grasses dry rapidly and carry fire across long distances, while wind and terrain increase spread. Homeowners near Reno, Carson City, Elko, and the eastern Sierra foothills should plan for prevention and recovery."
    },
    sections: [
      {
        title: "Why Wildfires Are Increasing in Nevada",
        content: "Cycles of wet growth followed by summer drought create abundant fuels. More homes are located in the wildland urban interface, and human-caused ignitions add to lightning-driven starts. Steep canyons and valley winds accelerate fire behavior."
      },
      {
        title: "How Wildfire Risk Affects Homeowners Insurance",
        content: "Insurers assess fuel loads, slope, access, and construction class. High-exposure properties may see higher premiums, required inspections, or non-renewal. Some risks are placed with excess and surplus lines carriers. Providing mitigation documentation and access improvements can improve outcomes."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Get the reason in writing, correct identified issues, and resubmit with evidence. An agent experienced in wildfire risk can identify carriers that recognize mitigation and help avoid a lapse."
      },
      {
        title: "How to Make a Home More Fire Resistant",
        isList: true,
        content: [
          "Establish defensible space to at least 30 to 100 feet, removing dead vegetation and spacing plants.",
          "Use a Class A roof and clear gutters and roof valleys regularly.",
          "Install ember-resistant vents and seal gaps around eaves and soffits.",
          "Use non-combustible materials for siding, decks, and fencing that touches the home.",
          "Store firewood and propane away from structures.",
          "Provide turnarounds and visible address markers for responders."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Participate in neighborhood fuel-reduction days and evacuation drills. Sign up for county alerts and follow red-flag warnings. Maintain water sources and hose lines where feasible, and coordinate with local fire agencies."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Through defensible space, hardened construction, and continuous coverage, Nevada homeowners can reduce wildfire losses and recover more quickly after events."
      }
    ],
    market_overview: "Nevada's high desert, rangelands, and forested mountains face recurring wildfire seasons. Fine grasses dry rapidly and carry fire across long distances, while wind and terrain increase spread."
  },
  "NM": {
    hero: {
      title: "Wildfires in New Mexico: Understanding the Risk and Protecting Your Home",
      description: "New Mexico's forests, canyons, and grasslands are prone to fast-moving wildfires. Extended drought, below-average snowpack, and strong seasonal winds have lengthened fire seasons and increased intensity. Homes near the Sangre de Cristo, Jemez, and Gila regions face elevated exposure."
    },
    sections: [
      {
        title: "Why Wildfires Are Increasing in New Mexico",
        content: "Dry winters and hot summers dry fuels earlier in the year. Lightning and human activity can quickly ignite brush, and winds carry embers across canyons and ridgelines. Development in the wildland urban interface increases the number of structures at risk."
      },
      {
        title: "How Wildfire Risk Affects Homeowners Insurance",
        content: "Underwriters consider vegetation management, roof class, siding type, slope, and access for firefighting. High-risk properties may face higher premiums or non-renewal and may need placement with excess and surplus carriers. Verified mitigation can improve eligibility."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Request a written explanation and address listed conditions such as brush clearance or roof replacement. Provide before-and-after documentation. Work with wildfire-experienced agents to find markets that credit mitigation and to prevent lapses."
      },
      {
        title: "How to Make a Home More Fire Resistant",
        isList: true,
        content: [
          "Clear defensible space and maintain fuel breaks along driveways and property lines.",
          "Install Class A roofing and ember-resistant vents.",
          "Use non-combustible siding and deck materials.",
          "Trim trees to remove ladder fuels and maintain spacing from structures.",
          "Stage hoses and tools and confirm adequate water supply and access."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Join Firewise USA efforts, coordinate neighborhood cleanups, and plan evacuation routes. Enable emergency alerts and prepare a go-bag with essential items and insurance records."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Mitigation, preparation, and continuous insurance protection help New Mexico homeowners remain resilient through changing fire seasons."
      }
    ],
    market_overview: "New Mexico's forests, canyons, and grasslands are prone to fast-moving wildfires. Extended drought, below-average snowpack, and strong seasonal winds have lengthened fire seasons and increased intensity."
  },
  "CO": {
    hero: {
      title: "Wildfires in Colorado: Understanding the Risk and Protecting Your Home",
      description: "Colorado's forests, foothills, and grasslands experience frequent wildfire activity. Hotter summers, variable snowpack, and strong downslope winds have increased the likelihood of large, fast-moving fires that affect both rural and suburban areas."
    },
    sections: [
      {
        title: "Why Wildfires Are Increasing in Colorado",
        content: "Prolonged dryness and wind events promote ember transport and rapid spread, especially along the Front Range and mountain communities. Expansion into the wildland urban interface has added more structures in high-exposure zones."
      },
      {
        title: "How Wildfire Risk Affects Homeowners Insurance",
        content: "Insurers assess roof class, siding, vegetation management, and fire access. Some homes face higher premiums, inspections, or non-renewal, while others are placed with excess and surplus carriers. Thorough mitigation documentation can improve underwriting decisions."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Obtain the reason in writing, complete corrective actions, and submit proof. Engage an agent experienced with wildfire risks to locate carriers open to mitigated properties and maintain continuous coverage."
      },
      {
        title: "How to Make a Home More Fire Resistant",
        isList: true,
        content: [
          "Maintain defensible space with reduced fuels within 30 to 100 feet of structures.",
          "Install a Class A roof and clean roofs and gutters regularly.",
          "Use ember-resistant vents and seal gaps at eaves and soffits.",
          "Choose non-combustible siding and deck materials.",
          "Remove ladder fuels and thin tree canopies near structures.",
          "Ensure roads and driveways allow fire apparatus access."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Participate in local mitigation grants and neighborhood fuel-reduction projects. Subscribe to local alerts and prepare evacuation plans. Keep an updated inventory and off-site copies of important documents."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "With defensible space, hardening, and appropriate insurance, Colorado homeowners can reduce wildfire impact and improve recovery outcomes."
      }
    ],
    market_overview: "Colorado's forests, foothills, and grasslands experience frequent wildfire activity. Hotter summers, variable snowpack, and strong downslope winds have increased the likelihood of large, fast-moving fires that affect both rural and suburban areas."
  },
  "OR": {
    hero: {
      title: "Wildfires in Oregon: Understanding the Risk and Protecting Your Home",
      description: "Oregon's forests and rangelands have seen larger and more frequent wildfires affecting both rural and suburban communities. Hot, dry summers, wind events, and heavy fuel loads have extended fire seasons across much of the state."
    },
    sections: [
      {
        title: "Why Wildfires Are Increasing in Oregon",
        content: "Lower humidity, drought, and seasonal winds push fires rapidly across slopes and canyons. More homes in forested foothills and river corridors increase structure exposure and complicate suppression."
      },
      {
        title: "How Wildfire Risk Affects Homeowners Insurance",
        content: "Carriers review siding and roof materials, vegetation clearance, and community risk scores. High-exposure properties may face increased premiums or non-renewal, with some placed in excess and surplus markets. Demonstrated mitigation can improve availability and terms."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Ask for a written explanation, complete the listed mitigation, and provide evidence. Work with an agent who regularly places wildfire-exposed homes to identify receptive markets and avoid lapses."
      },
      {
        title: "How to Make a Home More Fire Resistant",
        isList: true,
        content: [
          "Create defensible space, removing dead vegetation and maintaining ignition-resistant zones near structures.",
          "Install Class A roofing and clear roofs and gutters.",
          "Fit ember-resistant vents and seal gaps.",
          "Use non-combustible siding and deck materials and break wooden fence connections at the home.",
          "Maintain access and water sources where possible."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Support local fire-adapted community programs, fuel reduction, and evacuation planning. Keep emergency alerts active and practice readiness during peak season."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Hardening, defensible space, and suitable insurance coverage help Oregon homeowners protect property and safety during wildfire seasons."
      }
    ],
    market_overview: "Oregon's forests and rangelands have seen larger and more frequent wildfires affecting both rural and suburban communities. Hot, dry summers, wind events, and heavy fuel loads have extended fire seasons across much of the state."
  },
  "ID": {
    hero: {
      title: "Wildfires in Idaho: Understanding the Risk and Protecting Your Home",
      description: "Idaho's forests and rangelands experience frequent lightning-driven fires each summer. Steep terrain, fine fuels, and shifting winds can move flames quickly toward developed areas. Homeowners should prioritize prevention and ensure clear access for responders."
    },
    sections: [
      {
        title: "Why Wildfires Are Increasing in Idaho",
        content: "Hot, dry summers and increased vegetation growth after wet periods create abundant fuels. Expansion into forested valleys and foothills places more homes in high-risk zones."
      },
      {
        title: "How Wildfire Risk Affects Homeowners Insurance",
        content: "Insurers evaluate fuel clearance, roof and siding class, access roads, and water availability. High-risk properties may face higher premiums or non-renewal and need placement with surplus carriers. Evidence of mitigation can improve outcomes."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Request the reason in writing. Correct brush, roofing, or access issues and resubmit with documentation. Engage agents who work routinely with wildfire exposures to avoid gaps in coverage."
      },
      {
        title: "How to Make a Home More Fire Resistant",
        isList: true,
        content: [
          "Establish defensible space, remove ladder fuels, and maintain spacing.",
          "Install Class A roofing and keep roofs and gutters clean.",
          "Use ember-resistant vents and non-combustible siding and decks.",
          "Store firewood away from structures and maintain a clear address marker.",
          "Ensure driveways allow engine access and turnouts."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Join Firewise efforts, participate in neighborhood cleanup days, and coordinate evacuation routes. Monitor alerts and prepare go-kits and document backups."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Mitigation and continuous insurance coverage help Idaho homeowners reduce losses and recover faster after wildfire events."
      }
    ],
    market_overview: "Idaho's forests and rangelands experience frequent lightning-driven fires each summer. Steep terrain, fine fuels, and shifting winds can move flames quickly toward developed areas."
  },
  "WA": {
    hero: {
      title: "Wildfires in Washington: Understanding the Risk and Protecting Your Home",
      description: "Washington experiences wildfires across eastern plains, central valleys, and some western foothill areas. Drier summers, wind events, and fine fuels have increased the likelihood of fast-moving fires near communities."
    },
    sections: [
      {
        title: "Why Wildfires Are Increasing in Washington",
        content: "Higher temperatures, lower humidity, and expanded development in the wildland urban interface contribute to larger fire footprints. Wind canyons and slopes promote ember transport and rapid spread."
      },
      {
        title: "How Wildfire Risk Affects Homeowners Insurance",
        content: "Carriers assess vegetation clearance, building materials, access, and proximity to firefighting resources. Elevated-risk homes may see higher premiums, inspections, or non-renewal, with some placed in surplus markets. Verified mitigation helps."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Request a written explanation and correct listed items. Provide documentation and engage an agent experienced with wildfire-prone properties to locate receptive markets and maintain continuity."
      },
      {
        title: "How to Make a Home More Fire Resistant",
        isList: true,
        content: [
          "Clear defensible space 30 to 100 feet from structures and remove dead debris.",
          "Use Class A roofing and clean gutters often.",
          "Install ember-resistant vents and seal eaves and gaps.",
          "Choose non-combustible siding and deck materials.",
          "Maintain accessible driveways and visible addresses."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Participate in Firewise programs, follow burn bans, and sign up for county alerts. Keep evacuation kits and practice routes during peak season."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Property hardening, defensible space, and appropriate insurance help Washington homeowners manage wildfire exposure effectively."
      }
    ],
    market_overview: "Washington experiences wildfires across eastern plains, central valleys, and some western foothill areas. Drier summers, wind events, and fine fuels have increased the likelihood of fast-moving fires near communities."
  },
  "UT": {
    hero: {
      title: "Wildfires in Utah: Understanding the Risk and Protecting Your Home",
      description: "Utah's mountains, plateaus, and desert valleys face recurring wildfire seasons driven by heat, drought, and wind. Expansion near canyons and foothills increases exposure for many communities along the Wasatch Front and in southern Utah."
    },
    sections: [
      {
        title: "Why Wildfires Are Increasing in Utah",
        content: "Extended dry periods and below-average snowpack leave vegetation parched by early summer. Lightning and human-caused ignitions can quickly spread under canyon winds and steep terrain."
      },
      {
        title: "How Wildfire Risk Affects Homeowners Insurance",
        content: "Underwriters consider roof and siding class, defensible space, slope, and access. High-risk properties may face premium adjustments or non-renewal and may be placed with excess and surplus lines carriers. Documented mitigation often improves results."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Obtain the reason in writing and address identified items such as brush clearance or roof replacement. Provide photos and receipts. Work with agents who routinely place wildfire risks to avoid coverage gaps."
      },
      {
        title: "How to Make a Home More Fire Resistant",
        isList: true,
        content: [
          "Establish and maintain defensible space by removing ladder fuels and spacing vegetation.",
          "Install Class A roofing and keep roofs and gutters clean.",
          "Use ember-resistant vents and ignition-resistant siding and decks.",
          "Screen openings and store combustibles away from structures.",
          "Ensure clear, wide driveways for fire engines and mark addresses."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Coordinate with neighbors on fuel reduction and evacuation planning. Monitor local alerts and red-flag warnings. Keep an emergency kit and digital copies of important documents."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Mitigation, planning, and continuous insurance coverage help Utah homeowners remain resilient during wildfire season."
      }
    ],
    market_overview: "Utah's mountains, plateaus, and desert valleys face recurring wildfire seasons driven by heat, drought, and wind. Expansion near canyons and foothills increases exposure for many communities along the Wasatch Front and in southern Utah."
  }
};

// State names mapping for wildfire states
const wildfireStateNames: Record<string, string> = {
  "AZ": "Arizona", "NV": "Nevada", "NM": "New Mexico", "CO": "Colorado",
  "OR": "Oregon", "ID": "Idaho", "WA": "Washington", "UT": "Utah"
};

// Generate content for wildfire states
Object.keys(wildfireStateNames).forEach(code => {
  const name = wildfireStateNames[code];
  const customizations = wildfireSpecificContent[code] || {};
  WILDFIRE_CONTENT[code] = createWildfireContent(name, code, customizations);
});