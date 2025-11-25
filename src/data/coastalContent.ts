import type { State } from '../types';

// Helper function to create coastal-specific content
const createCoastalContent = (name: string, code: string, customizations: any = {}) => {
  return {
    name,
    code,
    hero: customizations.hero || {
      title: `Coastal Insurance in ${name}: Understanding the Risk and Protecting Your Home`,
      description: customizations.market_overview || `${name}'s coastal areas face hurricane and wind risks. Homeowners need to understand these exposures and how they affect both safety and insurance.`,
      seoTitle: `Coastal Insurance in ${name} | Risk, Prevention, and Home Safety`,
      seoDescription: `Learn how ${name} homeowners can reduce coastal risk, protect their homes, and maintain insurance coverage through prevention and mitigation.`,
      altText: `${name} Coastal Insurance`
    },
    sections: customizations.sections || [],
    takeaways: customizations.takeaways || [
      `We connect ${name} homeowners with coastal insurance specialists`,
      "Hurricane and wind coverage requires specialized expertise",
      "Private market options often available despite coastal location"
    ],
    market_overview: customizations.market_overview || `${name}'s coastal insurance market requires specialized knowledge due to hurricane and wind exposure. Our licensed agents understand coastal risks and work with carriers that specialize in waterfront and hurricane-prone properties. We help homeowners navigate both private market options and state programs when needed.`,
    fair_vs_private: "Private market carriers with coastal expertise are explored first. State programs or FAIR Plans are considered only when private options aren't available.",
    eligibility: "Eligibility depends on property location relative to coast, construction materials, elevation, and hurricane mitigation measures implemented.",
    risk_factors: customizations.risk_factors || [
      "Hurricane and tropical storm exposure",
      "Wind damage and storm surge risks",
      "Flood zone designation and requirements",
      "Coastal construction and elevation requirements",
      "Previous storm damage or proximity to recent hurricanes"
    ],
    how_it_works: [
      "Complete our coastal property assessment form",
      "We connect you with agents specializing in coastal properties",
      "Agents evaluate private market coastal coverage options",
      "If needed, in the states that have one, agents can refer you to FAIR Plan or residual market options"
    ],
    disclaimer: "This is a referral service connecting homeowners with licensed insurance agents specializing in coastal insurance. Coverage availability depends on individual property characteristics and coastal risk assessments."
  };
};

// Create content for coastal states
export const COASTAL_CONTENT: Record<string, any> = {};

// State-specific coastal content
const coastalSpecificContent: Record<string, any> = {
  "TX": {
    hero: {
      title: "Coastal Property Risks in Texas: Understanding the Challenges and Protecting Your Home",
      description: "Texas has more than 350 miles of Gulf coastline, stretching from the Louisiana border to South Padre Island. This region's combination of warm Gulf waters and flat terrain makes it one of the most storm-prone areas in the country. Hurricanes, tropical storms, and heavy rain events bring strong winds, flooding, and storm surge that can cause serious property damage. For coastal Texas homeowners, understanding these risks and maintaining the right insurance coverage is essential to long-term protection."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in Texas",
        content: "Over the past several decades, population growth and development along the Texas coast have expanded into areas highly exposed to hurricane impacts. Rising sea levels and more intense storm systems have increased the potential for flooding and wind-related damage. Communities such as Galveston, Corpus Christi, Port Aransas, and the Houston–Galveston Bay region are especially vulnerable when tropical systems make landfall. Even inland areas can experience significant rainfall and wind after major storms.\n\nThe combination of storm surge, coastal erosion, and wind damage makes property losses unpredictable and widespread. Flooding from hurricanes such as Harvey and Ike highlighted the challenges of both storm surge and heavy rainfall, leading to major changes in flood insurance participation and building codes."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Homeowners along the Texas coast face unique insurance challenges. Most standard homeowners policies exclude flood damage, which must be purchased separately through the National Flood Insurance Program or private flood carriers. In certain coastal counties, private insurers limit wind coverage or require it to be purchased through the Texas Windstorm Insurance Association, a state-backed insurer of last resort for wind and hail.\n\nUnderwriters evaluate a property's elevation, distance from the shoreline, and construction type. Homes built to meet current windstorm certification standards and those with reinforced roofing or storm shutters are often easier to insure. Properties that do not meet these requirements may only qualify for coverage through surplus lines markets, which tend to be more expensive."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "If your insurer decides not to renew your policy, request the reason in writing. In many cases, mitigation improvements can help restore eligibility. Roof replacement, window protection systems, or verified compliance with windstorm construction standards may make a difference. Keep documentation of all upgrades, including inspection reports and certification forms.\n\nIf standard carriers still decline coverage, a specialist familiar with coastal insurance can help navigate available options through the Texas Windstorm Insurance Association, the National Flood Insurance Program, and private markets. Maintaining continuous coverage is essential, as gaps in insurance can limit future eligibility or increase premiums."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Use hurricane straps or clips to secure roofs to structural framing.",
          "Install impact-resistant windows or permanent storm shutters.",
          "Elevate utilities and critical systems above base flood elevation.",
          "Anchor outdoor structures and maintain drainage systems to prevent water accumulation.",
          "Replace older siding and roofing materials with those rated for high wind speeds.",
          "Seal exterior openings and vents to reduce wind-driven rain intrusion."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Coastal safety in Texas depends on preparedness at both the household and community level. Local emergency management offices issue evacuation orders when hurricanes threaten the coast. Residents should follow official guidance, have a plan for leaving early, and maintain a supply kit with essentials and insurance documents.\n\nCommunities can also reduce collective risk through updated building codes, shoreline protection projects, and proper drainage maintenance. Working together strengthens resilience and shortens recovery times after a storm."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Coastal living in Texas carries undeniable benefits but also unique risks. Hurricanes, flooding, and wind damage are part of life along the Gulf, yet these challenges can be managed through preparation, proper construction, and the right insurance coverage. By investing in mitigation, maintaining continuous protection, and staying informed, Texas homeowners can preserve both safety and peace of mind."
      }
    ],
    market_overview: "Texas has more than 350 miles of Gulf coastline, stretching from the Louisiana border to South Padre Island. This region's combination of warm Gulf waters and flat terrain makes it one of the most storm-prone areas in the country.",
    takeaways: [
      "Texas coastal homeowners need specialized hurricane and wind coverage",
      "TWIA available but private market options often provide better value",
      "Windstorm deductibles and coverage require expert guidance"
    ],
    risk_factors: [
      "Hurricane exposure along the Gulf Coast",
      "Windstorm and hail damage risks",
      "Flood zone requirements and NFIP coverage",
      "Coastal construction standards and elevation",
      "Previous hurricane damage or proximity to storm-affected areas"
    ]
  },
  "LA": {
    hero: {
      title: "Coastal Property Risks in Louisiana: Understanding the Challenges and Protecting Your Home",
      description: "Louisiana's coastal region is known for its natural beauty, culture, and proximity to the Gulf of Mexico. It is also one of the most hurricane-exposed areas in the United States. Frequent tropical storms, heavy rainfall, and coastal erosion have made property protection a continuing challenge for homeowners. Understanding these risks and taking steps to safeguard both homes and insurance coverage is essential for residents across southern Louisiana."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in Louisiana",
        content: "Louisiana's geography makes it particularly vulnerable to wind and water damage. Much of the state's southern coastline lies at or below sea level, protected by an extensive system of levees and flood barriers. Rising sea levels, stronger storms, and ongoing land loss have placed many communities at increased risk of flooding and storm surge. Areas such as New Orleans, Houma, Lake Charles, and Grand Isle face regular exposure during hurricane season.\n\nIn addition to hurricanes, Louisiana experiences heavy rainfall and flash flooding from slow-moving weather systems. These events can cause widespread water damage even far inland from the coast. Combined with coastal erosion and subsidence, these factors have increased both the frequency and severity of flood events."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Insurers in Louisiana closely monitor coastal exposure. Standard homeowners policies exclude flood damage, which must be insured separately through the National Flood Insurance Program or a private flood carrier. In many coastal parishes, private companies have reduced wind coverage or introduced stricter building requirements. Some homeowners must purchase separate windstorm coverage through the Louisiana Citizens Property Insurance Corporation, the state-backed insurer of last resort.\n\nUnderwriters evaluate each home's elevation, location relative to flood zones, and construction quality. Properties built to modern wind and flood standards, such as elevated foundations and reinforced roofs, are generally easier to insure. Homes that do not meet these standards or that have previous claims may require coverage through specialty or surplus lines markets."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "If you receive a non-renewal notice from your insurer, request the reason in writing. Often, coverage can be restored by addressing specific issues such as outdated roofing, insufficient elevation, or a lack of wind mitigation features. Replacing older materials, improving drainage, or elevating mechanical systems can reduce future risk. Keep documentation of any upgrades or repairs, including photos, receipts, and contractor certifications.\n\nIf standard carriers decline to renew your policy, an insurance professional experienced with coastal properties can help identify other options. Depending on your location, a combination of private markets, the National Flood Insurance Program, and Louisiana Citizens coverage may provide full protection. Maintaining continuous coverage is important to prevent gaps that can affect future eligibility or rates."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a reinforced or Class A roof with hurricane straps or clips.",
          "Use impact-rated doors and windows to withstand debris.",
          "Elevate living areas and utilities above base flood elevation.",
          "Seal exterior walls and openings to reduce water intrusion.",
          "Replace or strengthen siding with wind-resistant materials.",
          "Maintain gutters, downspouts, and drainage around the home to divert water effectively."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Preparedness at the community level is critical in Louisiana, where storm impacts are often widespread. Parishes and municipalities work with emergency management agencies to issue evacuation orders and maintain flood control systems. Homeowners should stay informed during hurricane season, review local evacuation routes, and prepare emergency kits that include important documents and supplies.\n\nParticipation in community programs such as levee district meetings or local resilience initiatives helps residents stay updated on mitigation efforts. Neighborhoods that cooperate on drainage maintenance and debris removal can reduce shared risks before and after storms."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Coastal living in Louisiana comes with both rewards and responsibilities. The same waters that support the state's culture and economy also present significant hazards. While storms and flooding cannot be avoided, their impact can be managed through preparation, construction quality, and proper insurance coverage. By taking preventive measures, maintaining their properties, and working with knowledgeable insurance professionals, homeowners can continue to live safely and confidently along Louisiana's coast."
      }
    ],
    market_overview: "Louisiana's coastal region is known for its natural beauty, culture, and proximity to the Gulf of Mexico. It is also one of the most hurricane-exposed areas in the United States."
  },
  "MS": {
    hero: {
      title: "Coastal Property Risks in Mississippi: Understanding the Challenges and Protecting Your Home",
      description: "Mississippi's Gulf Coast offers a mix of natural beauty, coastal living, and economic opportunity. However, it is also exposed to the full strength of hurricanes, tropical storms, and storm surge from the Gulf of Mexico. High winds, flooding, and saltwater intrusion can cause significant property damage. For homeowners along Mississippi's coast, preparation and proper insurance planning are key to long-term protection."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in Mississippi",
        content: "Although Mississippi's coastline is shorter than that of neighboring states, its exposure to hurricane landfalls and storm surge remains high. Communities such as Gulfport, Biloxi, Bay St. Louis, and Pascagoula have experienced repeated hurricane impacts. Rising sea levels, stronger tropical systems, and increased coastal development have all contributed to higher risk. Even moderate storms can bring flooding from heavy rainfall and waves that reach far inland.\n\nAs more homes are built near the shoreline, potential losses increase. Flooding, erosion, and infrastructure strain create ongoing challenges that make risk reduction essential for coastal homeowners."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Insurance carriers closely evaluate exposure in coastal Mississippi. Standard homeowners insurance does not cover flood damage, which must be insured separately through the National Flood Insurance Program or private flood markets. In some coastal counties, windstorm coverage may also be excluded from standard policies and must be purchased through the Mississippi Windstorm Underwriting Association, the state-backed insurer of last resort.\n\nUnderwriters consider a home's elevation, distance from open water, roof quality, and construction type. Homes that meet current building codes and are elevated above base flood elevation are often easier to insure. Older homes or those with prior losses may only qualify through surplus or excess and surplus lines carriers. Documentation of wind mitigation features can improve underwriting outcomes."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "If your insurer decides not to renew your policy, request the reason in writing. The cause may involve roof condition, lack of mitigation, or regional exposure limits. Many issues can be corrected by replacing an aging roof, installing hurricane shutters, or providing flood elevation certificates. Keep detailed records of all improvements, including receipts and photos.\n\nIf standard carriers remain unavailable, an insurance professional familiar with Mississippi's coastal markets can help explore options. Depending on location, a combination of coverage from the Mississippi Windstorm Underwriting Association, the National Flood Insurance Program, and private insurers may be required for full protection. Continuous coverage is important, as lapses can make future policies more difficult or costly to obtain."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a Class A or metal roof secured with hurricane clips or straps.",
          "Use impact-rated windows or permanent storm shutters.",
          "Elevate living spaces and utilities above base flood elevation.",
          "Replace older siding with wind-rated or moisture-resistant materials.",
          "Seal vents, joints, and eaves to prevent water intrusion.",
          "Maintain proper drainage to prevent pooling around foundations."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Coastal safety depends on both personal preparation and community involvement. Residents should follow evacuation guidance issued by local emergency agencies and monitor weather alerts during hurricane season. Preparing an emergency supply kit and keeping digital copies of insurance documents can make recovery smoother.\n\nCommunities can reduce shared risk through drainage improvements, enforcement of updated building codes, and participation in resilience programs. Coordinated efforts strengthen recovery and reduce losses across neighborhoods."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Mississippi's Gulf Coast is both beautiful and exposed. Hurricanes and flooding will remain part of coastal life, but homeowners can manage these challenges through preparation, maintenance, and comprehensive insurance planning. By taking mitigation steps, staying informed, and keeping continuous coverage, Mississippi residents can enjoy coastal living while protecting what matters most."
      }
    ],
    market_overview: "Mississippi's Gulf Coast offers a mix of natural beauty, coastal living, and economic opportunity. However, it is also exposed to the full strength of hurricanes, tropical storms, and storm surge from the Gulf of Mexico."
  },
  "AL": {
    hero: {
      title: "Coastal Property Risks in Alabama: Understanding the Challenges and Protecting Your Home",
      description: "Alabama's Gulf Coast provides a high quality of life and economic growth opportunities, but it also faces regular threats from hurricanes, tropical storms, and flooding. The region's low-lying geography and proximity to the Gulf make wind and water damage recurring risks for homeowners. Understanding these exposures and maintaining proper insurance are essential for long-term protection."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in Alabama",
        content: "Communities such as Gulf Shores, Orange Beach, and Dauphin Island are particularly vulnerable to storm surge and high winds during hurricane season. Rising sea levels and heavier rainfall have expanded flood-prone areas. As development increases, more homes are located in zones that require flood or windstorm coverage to remain protected."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Standard homeowners insurance policies exclude flood damage, which must be insured separately through the National Flood Insurance Program or private flood markets. In high-risk areas, wind coverage may also be limited and purchased through the Alabama Insurance Underwriting Association, the state's windstorm insurer of last resort. Underwriters consider elevation, construction type, roof quality, and distance from open water when determining eligibility."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "If your insurer issues a non-renewal notice, request the reason in writing. Many factors can be corrected through mitigation improvements such as roof replacement, added storm shutters, or wind certification. Keep detailed records of completed work and inspection results. If standard carriers remain unavailable, an insurance professional experienced with coastal properties can help find alternatives. Continuous coverage is crucial to maintaining eligibility and avoiding higher costs later."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a Class A or metal roof secured with hurricane straps or clips.",
          "Use impact-rated windows or storm shutters.",
          "Elevate living spaces and utilities above base flood elevation.",
          "Anchor decks, carports, and exterior structures.",
          "Seal vents and openings to prevent water intrusion.",
          "Replace older siding with materials rated for wind and salt resistance.",
          "Maintain gutters and drainage systems to prevent pooling water."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Residents should review local evacuation routes, sign up for weather alerts, and prepare an emergency supply kit before hurricane season begins. Communities can strengthen resilience by maintaining drainage systems, supporting flood mitigation projects, and following updated building codes. Cooperation at the neighborhood level can significantly reduce shared losses."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Living near Alabama's coast offers many benefits, but it also comes with predictable seasonal risks. Through preparation, maintenance, and comprehensive insurance coverage, homeowners can safeguard their property, remain insurable, and recover quickly when severe weather strikes."
      }
    ],
    market_overview: "Alabama's Gulf Coast provides a high quality of life and economic growth opportunities, but it also faces regular threats from hurricanes, tropical storms, and flooding."
  },
  "GA": {
    hero: {
      title: "Coastal Property Risks in Georgia: Understanding the Challenges and Protecting Your Home",
      description: "Georgia's coastal region, from Savannah to St. Marys, combines scenic beauty with exposure to hurricanes, tropical storms, and tidal flooding. Homeowners along the Atlantic must prepare for both wind and water hazards and ensure their insurance coverage reflects those risks."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in Georgia",
        content: "Georgia's low-lying barrier islands and marshlands are highly vulnerable to surge and flooding. Rising sea levels, heavier rainfall, and stronger storms have increased coastal losses. Communities such as Tybee Island, Brunswick, and St. Simons Island experience more frequent high-tide flooding and storm impacts than in the past."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Standard homeowners insurance does not cover flood losses, which must be purchased separately through the National Flood Insurance Program or private carriers. In some coastal ZIP codes, insurers may apply separate hurricane or wind deductibles. Underwriters evaluate a property's elevation, roof construction, and proximity to open water when determining eligibility and price."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Request the reason in writing and address any issues such as roof condition, vegetation management, or drainage. Making upgrades like installing shutters or reinforcing roofing can improve insurability. Keep photos and receipts for all work completed. An insurance professional familiar with coastal markets can identify new carrier options if a non-renewal occurs. Maintain continuous coverage to protect against interruptions and higher costs."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a Class A or metal roof secured with hurricane straps.",
          "Use impact-rated windows or approved shutters.",
          "Elevate HVAC systems and electrical panels above base flood elevation.",
          "Anchor decks and outbuildings to resist high winds.",
          "Replace older siding with wind-resistant materials.",
          "Seal vents and openings to block wind-driven rain.",
          "Maintain grading and gutters for proper drainage."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Local emergency management agencies in coastal Georgia issue evacuation orders when storms approach. Residents should review routes annually, maintain supplies, and ensure all household members know the plan. Communities that maintain infrastructure and promote resilience programs are better able to reduce shared risk and recover quickly after severe weather."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "While living along Georgia's coast comes with exposure to wind and flood hazards, homeowners can manage these risks through careful maintenance, smart construction choices, and proper insurance. Preparation and prevention are the foundation of safe and resilient coastal living."
      }
    ],
    market_overview: "Georgia's coastal region, from Savannah to St. Marys, combines scenic beauty with exposure to hurricanes, tropical storms, and tidal flooding."
  },
  "SC": {
    hero: {
      title: "Coastal Property Risks in South Carolina: Understanding the Challenges and Protecting Your Home",
      description: "South Carolina's coastal region is home to thriving communities, historic cities, and popular beaches. However, it also faces ongoing exposure to hurricanes, tropical storms, and tidal flooding. Homeowners need to understand these risks and take proactive steps to protect their properties."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in South Carolina",
        content: "Population growth, rising sea levels, and stronger storms have increased flooding frequency in coastal cities and barrier islands. Communities such as Charleston, Hilton Head, and Myrtle Beach experience recurrent high-tide flooding and erosion. Marshlands and low elevations contribute to greater storm surge vulnerability."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Flood damage is excluded from standard homeowners insurance and must be insured separately through the National Flood Insurance Program or private flood carriers. Insurers also apply separate hurricane or wind deductibles near the coast. Underwriters evaluate roof age, structure, and elevation when determining coverage terms. Homes built to newer standards are easier to insure, while older ones may need updates or specialty coverage."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "If you receive a non-renewal notice, request the reason in writing. Many issues can be corrected through maintenance or upgrades, such as replacing a roof or adding shutters. Keep records of improvements and inspection reports. An insurance agent familiar with coastal properties can help locate other markets if needed. Continuous coverage prevents gaps that may complicate future insurance applications."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a Class A or metal roof with hurricane clips.",
          "Add impact-rated windows or storm shutters.",
          "Elevate utilities and living areas above base flood elevation.",
          "Replace siding with wind- and moisture-resistant materials.",
          "Anchor decks, carports, and exterior features.",
          "Seal vents and joints to prevent water intrusion.",
          "Maintain gutters and downspouts to direct water away from foundations."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Local governments maintain evacuation routes and emergency alerts. Homeowners should stay informed, prepare a supply kit, and participate in community drainage and flood prevention projects. These efforts strengthen collective safety and reduce losses during major storms."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Coastal living in South Carolina comes with challenges, but proper planning, building maintenance, and comprehensive insurance allow homeowners to reduce risk and protect their property year after year."
      }
    ],
    market_overview: "South Carolina's coastal region is home to thriving communities, historic cities, and popular beaches. However, it also faces ongoing exposure to hurricanes, tropical storms, and tidal flooding."
  },
  "FL": {
    market_overview: "Florida's coastal insurance market is highly specialized due to extreme hurricane exposure. Our agents work with carriers experienced in Florida coastal properties and understand Citizens Property Insurance, private market options, and hurricane mitigation requirements.",
  },
  "NC": {
    hero: {
      title: "Coastal Property Risks in North Carolina: Understanding the Challenges and Protecting Your Home",
      description: "North Carolina's Outer Banks and coastal plains provide scenic beauty and recreation but face frequent exposure to hurricanes, tropical storms, and flooding. Strong winds and storm surge make preparation and proper coverage essential for homeowners."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in North Carolina",
        content: "Rising sea levels, heavier rainfall, and barrier island erosion increase exposure in communities such as Wilmington, Morehead City, and New Bern. Even when storms remain offshore, they often bring damaging tides and flooding to inland areas."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Standard homeowners insurance excludes flood damage. Homeowners must obtain flood coverage separately. In many coastal counties, wind coverage is provided by the North Carolina Insurance Underwriting Association. Underwriters evaluate elevation, proximity to open water, and construction quality before approving coverage."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Request the reason in writing, complete recommended repairs, and document improvements. If traditional carriers are unavailable, an experienced agent can access the Coastal Property Insurance Pool or private markets. Maintaining continuous coverage is key to protecting eligibility and controlling costs."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a wind-rated roof with hurricane straps or clips.",
          "Add impact windows or shutters.",
          "Elevate living areas and mechanical systems.",
          "Use wind-resistant siding and seal vents.",
          "Anchor decks and improve site drainage."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Local officials manage evacuation routes and issue storm alerts. Homeowners should review plans annually and maintain an emergency kit with key documents. Community dune and drainage maintenance efforts strengthen neighborhood safety and recovery."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Through mitigation, continuous insurance coverage, and cooperation with local programs, North Carolina homeowners can manage coastal exposure effectively and maintain resilient properties."
      }
    ],
    market_overview: "North Carolina's Outer Banks and coastal plains provide scenic beauty and recreation but face frequent exposure to hurricanes, tropical storms, and flooding."
  },
  "VA": {
    hero: {
      title: "Coastal Property Risks in Virginia: Understanding the Challenges and Protecting Your Home",
      description: "Virginia's Chesapeake Bay and Atlantic shoreline provide beautiful views and recreation, but they also bring risk from hurricanes, tropical storms, and nor'easters. Rising sea levels and stronger storms are creating new challenges for homeowners in the coastal region."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in Virginia",
        content: "Communities such as Norfolk, Hampton, Virginia Beach, and the Eastern Shore face frequent tidal flooding and storm surge. Subsidence and higher water levels make low-lying neighborhoods more vulnerable. Coastal storms can also bring high winds that damage roofs and siding far inland."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Flood damage is excluded from standard homeowners coverage and must be insured separately through the National Flood Insurance Program or private flood markets. Some coastal ZIP codes include hurricane or wind deductibles. Underwriters assess elevation, roof type, and construction quality when determining coverage."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Request the reason in writing. Upgrading roofs, improving drainage, or adding storm shutters can help restore eligibility. Keep documentation of all improvements. If standard markets remain limited, a specialist can identify options through private or surplus carriers while maintaining coverage continuity."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a Class A or metal roof with hurricane clips.",
          "Use impact-rated windows and doors.",
          "Elevate living areas and utilities.",
          "Seal vents and exterior openings.",
          "Anchor decks and porches.",
          "Replace aging siding with wind-rated materials."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Homeowners should know local evacuation routes and sign up for flood and weather alerts. Community projects that preserve wetlands and improve drainage reduce storm impacts. Coordination between neighbors strengthens local resilience."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Preparation, mitigation, and continuous insurance protection allow Virginia homeowners to enjoy coastal living while reducing storm-related losses."
      }
    ],
    market_overview: "Virginia's Chesapeake Bay and Atlantic shoreline provide beautiful views and recreation, but they also bring risk from hurricanes, tropical storms, and nor'easters."
  },
  "NJ": {
    hero: {
      title: "Coastal Property Risks in New Jersey: Understanding the Challenges and Protecting Your Home",
      description: "New Jersey's shore communities are a cornerstone of the state's identity but face regular exposure to hurricanes, nor'easters, and tidal flooding. Storm surge, erosion, and high winds pose serious risks to homes and infrastructure."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in New Jersey",
        content: "Rising sea levels and stronger storms have increased flood frequency from Cape May to Sandy Hook. Nor'easters bring prolonged high water and wave action that can cause damage across barrier islands and back bays. Expanding development in flood-prone areas has further raised potential losses."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Flood must be covered separately through the National Flood Insurance Program or private flood insurers. Many homeowners also face special hurricane or wind deductibles. Underwriters consider elevation, proximity to water, and construction quality when setting rates or determining eligibility."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Obtain the reason in writing, make recommended improvements such as roof upgrades or elevation adjustments, and document them with photos. Insurance professionals can help combine private, flood, and surplus options to maintain complete coverage. Continuous insurance is vital to protecting affordability and access to future coverage."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a Class A or metal roof secured with clips.",
          "Elevate living spaces and utilities.",
          "Use impact-resistant windows or shutters.",
          "Seal exterior openings and anchor decks.",
          "Maintain drainage systems and use corrosion-resistant materials."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Dune restoration, stormwater upgrades, and strong building codes help reduce losses. Homeowners should keep evacuation plans updated and store key documents securely in digital form."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Preparation, structural improvements, and continuous coverage help New Jersey homeowners protect their homes and communities from coastal hazards."
      }
    ],
    market_overview: "New Jersey's shore communities are a cornerstone of the state's identity but face regular exposure to hurricanes, nor'easters, and tidal flooding."
  },
  "CT": {
    hero: {
      title: "Coastal Property Risks in Connecticut: Understanding the Challenges and Protecting Your Home",
      description: "Connecticut's Long Island Sound coastline combines natural charm with exposure to hurricanes, tropical systems, and nor'easters. These events bring heavy rain, wind, and coastal flooding that can impact homes throughout the region."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in Connecticut",
        content: "Rising tides and stronger storms are increasing flood frequency along communities such as Stamford, Norwalk, New Haven, Old Saybrook, and Groton. Many older homes were built before modern floodplain standards and may require upgrades to remain insurable."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Standard homeowners insurance does not include flood damage. Flood coverage is obtained through the National Flood Insurance Program or private flood carriers. Many coastal areas also have hurricane or wind deductibles. Elevation and roof quality strongly influence underwriting decisions."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Ask for a written explanation, correct noted issues such as roof or drainage concerns, and keep documentation. An insurance specialist can assist with private and surplus market options to maintain continuous coverage."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a wind-rated roof with straps or clips.",
          "Use impact windows or storm shutters.",
          "Elevate utilities and living spaces.",
          "Replace siding with wind- and moisture-resistant materials.",
          "Anchor exterior structures and maintain drainage."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Local governments are improving floodplain management and emergency communication. Homeowners should review evacuation routes and keep digital backups of important documents. Community cooperation reduces shared risk during severe weather events."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Through mitigation, preparedness, and reliable coverage, Connecticut homeowners can reduce exposure and protect property from future coastal storms."
      }
    ],
    market_overview: "Connecticut's Long Island Sound coastline combines natural charm with exposure to hurricanes, tropical systems, and nor'easters."
  },
  "NH": {
    hero: {
      title: "Coastal Property Risks in New Hampshire: Understanding the Challenges and Protecting Your Home",
      description: "New Hampshire's short seacoast is central to its economy and lifestyle but faces increasing exposure to storms, flooding, and erosion. Homeowners near the ocean must plan ahead to manage these evolving risks and keep insurance coverage secure."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in New Hampshire",
        content: "Rising sea levels, stronger nor'easters, and more frequent tidal flooding have increased risk along the coast. Communities such as Hampton, Rye, and Portsmouth experience repeated high-tide flooding and wave damage. Erosion and saltwater intrusion affect infrastructure and foundations, raising the importance of mitigation."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Standard homeowners policies exclude flood damage, which must be insured separately through the National Flood Insurance Program or private flood carriers. In coastal ZIP codes, insurers may apply hurricane or wind deductibles. Underwriters consider elevation, distance from open water, and building materials when determining eligibility."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "Request the reason in writing. Address correctable issues such as roof age, drainage, or lack of storm protection, and keep detailed documentation. If standard carriers are unavailable, an insurance specialist familiar with coastal properties can help find options through private or surplus markets. Maintaining continuous coverage avoids future cost increases or coverage gaps."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a wind-rated roof with hurricane straps or clips.",
          "Use impact-resistant windows or shutters.",
          "Elevate living areas and utilities above base flood elevation.",
          "Replace siding with wind- and moisture-resistant materials.",
          "Seal vents and exterior openings to prevent water intrusion.",
          "Anchor decks and exterior structures to resist uplift.",
          "Maintain gutters and grading to direct water away from the foundation."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "New Hampshire towns enforce floodplain regulations and maintain evacuation plans. Homeowners should register for emergency alerts, review routes annually, and prepare emergency kits with essential documents. Cooperative drainage and shoreline projects help communities recover faster after coastal storms."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Coastal living in New Hampshire offers natural beauty and opportunity but requires preparation. Through mitigation, maintenance, and continuous insurance coverage, homeowners can remain resilient and safeguard their homes against changing coastal conditions."
      }
    ],
    market_overview: "New Hampshire's short seacoast is central to its economy and lifestyle but faces increasing exposure to storms, flooding, and erosion."
  },
  "ME": {
    hero: {
      title: "Coastal Property Risks in Maine: Understanding the Challenges and Protecting Your Home",
      description: "Maine's rugged coastline is one of the most recognizable in the country, stretching for thousands of miles along rocky shores, coves, and islands. Its natural beauty attracts residents and visitors alike, but living near the coast also means dealing with powerful storms, flooding, and erosion. As weather patterns shift and sea levels rise, homeowners along Maine's coast face growing challenges in protecting their property and maintaining affordable insurance coverage."
    },
    sections: [
      {
        title: "Why Coastal Risk Is Increasing in Maine",
        content: "Maine's coastal weather can be unpredictable and severe. The state frequently experiences nor'easters, winter storms, and remnants of hurricanes that bring heavy rain, high winds, and strong waves. These systems can produce storm surge that floods low-lying areas and damages infrastructure. Over time, rising sea levels and increased tidal flooding have contributed to shoreline erosion and higher water tables in many coastal communities.\n\nCities and towns such as Portland, Rockland, Boothbay Harbor, Bar Harbor, and York are particularly vulnerable to coastal flooding. Even areas that were once considered safe from flooding are now affected during unusually high tides or strong storm events. The combination of aging infrastructure, narrow shorelines, and powerful coastal weather has made risk management and mitigation increasingly important for Maine homeowners."
      },
      {
        title: "How Coastal Risk Affects Homeowners Insurance",
        content: "Insurance companies that cover properties in coastal Maine take into account both wind and flood exposure. Standard homeowners policies do not include flood damage, so homeowners must purchase separate flood insurance through the National Flood Insurance Program or private flood carriers. Some insurers also apply separate hurricane or windstorm deductibles to reflect the higher exposure along the coast.\n\nUnderwriters evaluate each property based on elevation, proximity to open water, and the strength of construction materials. Homes that meet current building codes and are elevated above base flood elevation are generally easier to insure. Properties that are older or located within high-risk flood zones may require coverage through surplus or excess and surplus lines markets, which specialize in difficult-to-insure homes. Keeping clear records of property condition and mitigation measures can help when applying for coverage."
      },
      {
        title: "What to Do if Your Policy Is Not Renewed",
        content: "If your insurer decides not to renew your policy, request the reason in writing. The decision may be related to property condition, location, or underwriting exposure in the region. In many cases, improvements such as roof replacement, foundation repair, or installation of flood vents can reduce risk and restore eligibility.\n\nKeep all documentation of repairs, inspections, and mitigation work, including photographs and receipts. If private carriers remain unavailable, an insurance professional experienced in Maine's coastal market can help identify other options. Maintaining continuous coverage is essential, since even short lapses can make future insurance more expensive or harder to obtain."
      },
      {
        title: "How to Strengthen a Home Against Coastal Hazards",
        isList: true,
        content: [
          "Install a wind-rated or metal roof with hurricane straps or clips.",
          "Use impact windows or storm shutters to protect openings.",
          "Elevate utilities and living areas above the base flood elevation.",
          "Use non-combustible, moisture-resistant siding such as fiber cement.",
          "Anchor decks and porches to resist uplift and wave forces.",
          "Seal exterior openings and vents to prevent water intrusion.",
          "Maintain gutters and drainage systems to keep water away from foundations."
        ]
      },
      {
        title: "Community Preparedness and Prevention",
        content: "Coastal resilience in Maine requires coordination between homeowners and local communities. Towns and cities are investing in flood mitigation projects, seawalls, and stormwater management improvements to reduce long-term risk. Homeowners should stay informed through local emergency alerts and be familiar with evacuation routes in case of severe weather.\n\nPreparing an emergency plan, keeping important documents in a secure location, and maintaining a home inventory are simple but effective steps. Communities that work together on maintenance, drainage, and debris removal can help minimize losses and speed up recovery after storms."
      },
      {
        title: "Staying Protected in a Changing Environment",
        content: "Coastal living in Maine provides unmatched scenery and access to the ocean, but it also brings exposure to storms, flooding, and erosion. By understanding these risks and taking proactive steps to mitigate them, homeowners can strengthen both their homes and their insurance options. Through preventive maintenance, responsible construction, and continuous coverage, Maine residents can enjoy the benefits of coastal living while staying protected against the challenges of a changing environment."
      }
    ],
    market_overview: "Maine's rugged coastline is one of the most recognizable in the country, stretching for thousands of miles along rocky shores, coves, and islands."
  }
};

// State names mapping for coastal states
const coastalStateNames: Record<string, string> = {
  "TX": "Texas", "LA": "Louisiana", "MS": "Mississippi", "AL": "Alabama",
  "GA": "Georgia", "SC": "South Carolina", "NC": "North Carolina", "VA": "Virginia",
  "NJ": "New Jersey", "CT": "Connecticut", "ME": "Maine", "NH": "New Hampshire"
};

// Generate content for coastal states
Object.keys(coastalStateNames).forEach(code => {
  const name = coastalStateNames[code];
  const customizations = coastalSpecificContent[code] || {};
  COASTAL_CONTENT[code] = createCoastalContent(name, code, customizations);
});