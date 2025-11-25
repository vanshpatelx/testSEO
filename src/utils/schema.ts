import type { State } from '../types';
import { STATES } from '../data/states';

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": "https://highriskhomeowners.com/#organization",
    "name": "HighRiskHomeowners.com",
    "legalName": "High Risk Homeowners Insurance Specialists",
    "url": "https://highriskhomeowners.com",
    "image": "https://highriskhomeowners.com/logo.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://highriskhomeowners.com/logo.png",
      "width": 250,
      "height": 60
    },
    "description": "Specialized insurance agency connecting homeowners with high-risk properties to licensed insurance agents across 44 states. Free referral service for nonrenewals, FAIR Plans, coastal, and wildfire coverage.",
    "foundingDate": "2008",
    "email": "info@highriskhomeowners.com",
    "telephone": "+1-888-795-6550",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-888-795-6550",
        "contactType": "customer service",
        "email": "info@highriskhomeowners.com",
        "areaServed": "US",
        "availableLanguage": ["English"],
        "contactOption": "TollFree"
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "info@highriskhomeowners.com",
        "areaServed": "US",
        "availableLanguage": ["English"]
      }
    ],
    "areaServed": STATES.map(state => ({
      "@type": "State",
      "name": state.name,
      "containedIn": {
        "@type": "Country",
        "name": "United States"
      }
    })),
    "sameAs": [
      "https://www.facebook.com/highriskhomeowners",
      "https://www.linkedin.com/company/highriskhomeowners"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "Free"
  };
};

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://highriskhomeowners.com/#service",
    "serviceType": "Insurance Referral Service",
    "provider": {
      "@id": "https://highriskhomeowners.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "High-Risk Insurance Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Risk Homeowners Insurance Referrals",
            "description": "Connect with licensed agents specializing in high-risk property insurance including older homes, homes with claims history, and properties in high-risk areas."
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nonrenewal Insurance Assistance",
            "description": "Expert guidance and agent connections for homeowners facing insurance nonrenewal or cancellation."
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FAIR Plan Alternatives",
            "description": "Find competitive alternatives to state FAIR Plans with better coverage and pricing options."
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Coastal Insurance Referrals",
            "description": "Specialized coverage for coastal properties including hurricane, flood, and wind insurance."
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wildfire Insurance Coverage",
            "description": "Insurance solutions for properties in wildfire-prone areas with specialized carrier access."
          },
          "price": "0",
          "priceCurrency": "USD"
        }
      ]
    }
  };
};

export const generateProfessionalServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://highriskhomeowners.com/#professionalservice",
    "name": "High-Risk Homeowners Insurance Specialists",
    "image": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "priceRange": "Free",
    "telephone": "+1-888-795-6550",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "US"
    },
    "url": "https://highriskhomeowners.com",
    "paymentAccepted": "Free Service",
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 09:00-18:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    }
  };
};

export const generateProductSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "High-Risk Homeowners Insurance Referral Service",
    "description": "Free referral service connecting homeowners with high-risk properties to licensed insurance specialists across 44 states.",
    "image": [
      "https://highriskhomeowners.com/logo.png"
    ],
    "brand": {
      "@type": "Brand",
      "name": "HighRiskHomeowners.com"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://highriskhomeowners.com",
      "priceCurrency": "USD",
      "price": "0.00",
      "itemCondition": "https://schema.org/NewCondition",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0.00",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        }
      },
      "seller": {
        "@id": "https://highriskhomeowners.com/#organization"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247",
      "bestRating": "5"
    },
    "category": "Insurance Services"
  };
};

export const generateReviewSchema = () => {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://highriskhomeowners.com/#organization"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "After being dropped by my previous carrier, I was connected with an agent who found me coverage within days. Excellent service for high-risk properties.",
      "datePublished": "2024-09-15"
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://highriskhomeowners.com/#organization"
      },
      "author": {
        "@type": "Person",
        "name": "Michael R."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "My coastal home was impossible to insure until I found this service. They connected me with a specialist who understood my unique situation.",
      "datePublished": "2024-08-22"
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://highriskhomeowners.com/#organization"
      },
      "author": {
        "@type": "Person",
        "name": "Jennifer L."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Free service that actually works! Got multiple quotes for my older home that other agencies wouldn't touch.",
      "datePublished": "2024-10-05"
    }
  ];
};

export const generateStateServiceSchema = (state: State) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${state.name} High-Risk Homeowners Insurance Referral`,
    "serviceType": "Insurance Referral",
    "provider": {
      "@id": "https://highriskhomeowners.com/#organization"
    },
    "areaServed": {
      "@type": "State",
      "name": state.name,
      "containedIn": {
        "@type": "Country",
        "name": "United States"
      }
    },
    "description": `Licensed insurance agents in ${state.name} specializing in high-risk homeowners insurance, nonrenewals, FAIR Plan alternatives, and difficult-to-place coverage.`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };
};

export const generateWebPageSchema = (title: string, description: string, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "HighRiskHomeowners.com",
      "url": "https://highriskhomeowners.com"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    "publisher": {
      "@id": "https://highriskhomeowners.com/#organization"
    }
  };
};

export const generateStateFAQSchema = (stateName: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What counts as "high-risk" for homeowners insurance in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Properties in high-risk areas, homes with older roofs or outdated systems, properties with prior claims history, vacant homes, homes near fire zones, coastal properties, and homes with unique construction materials are typically considered high-risk in ${stateName}.`
        }
      },
      {
        "@type": "Question",
        "name": `Does ${stateName} have a FAIR Plan for homeowners insurance?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `FAIR Plans vary by state. If ${stateName} has a FAIR Plan and you're having trouble finding coverage, our specialists can help you navigate FAIR Plan options or find better alternatives through specialty carriers.`
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve my chances of approval and lower my premium?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Upgrade your roof to impact-resistant materials, install security systems, update electrical and plumbing, maintain good credit, clear vegetation around your property, and document all home improvements and maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between standard and nonstandard or E&S home insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard policies from admitted carriers follow state-approved rates and forms. E&S (Excess and Surplus) policies are designed for unique or higher-risk properties with more flexible underwriting. They often cover homes that standard carriers decline."
        }
      },
      {
        "@type": "Question",
        "name": `Can I get affordable high-risk homeowners insurance in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. While high-risk insurance typically costs more than standard coverage, our specialists shop multiple markets to find competitive rates. Pricing depends on location, construction quality, roof condition, claims history, and available mitigation credits.`
        }
      },
      {
        "@type": "Question",
        "name": "I was non-renewed after an inspection. What should I do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Request the inspection report, address any issues identified (especially roof, electrical, or structural concerns), document all repairs with receipts and photos, and work with our specialists who can present your improvements to carriers that recognize completed mitigation work."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with homes that have been declined coverage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in placing homes that standard carriers decline. We have access to specialty markets, surplus lines carriers, and programs designed specifically for challenging properties."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help if I had a lapse in coverage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A coverage lapse limits your options but doesn't eliminate them. We work with carriers that may accept properties with prior lapses, especially when you can document the reasons and show current insurability."
        }
      }
    ]
  };
};

export const generateCoastalFAQSchema = (stateName: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What types of coastal insurance coverage are available in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Coastal properties in ${stateName} typically need wind and hail coverage, flood insurance through NFIP or private carriers, hurricane coverage, and standard homeowners insurance. Many coastal policies separate wind coverage from other perils.`
        }
      },
      {
        "@type": "Question",
        "name": "Do I need separate flood insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Standard homeowners insurance doesn't cover flood damage. Coastal properties should have flood insurance through the National Flood Insurance Program (NFIP) or private flood carriers, especially if you're in a flood zone."
        }
      },
      {
        "@type": "Question",
        "name": "What is wind-only or wind/hail separate coverage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many coastal states, standard carriers exclude wind and hail damage. You'll need a separate wind/hail policy from a state wind pool or private carrier. This splits your coverage between multiple policies."
        }
      },
      {
        "@type": "Question",
        "name": `How much does coastal insurance cost in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Coastal insurance costs vary significantly based on distance from water, elevation, construction quality, wind mitigation features, and flood zone. Premiums can range from several thousand to tens of thousands annually depending on these factors.`
        }
      },
      {
        "@type": "Question",
        "name": "What are wind mitigation discounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wind mitigation features like impact-resistant windows, reinforced roof decking, roof-to-wall attachments, secondary water resistance, and opening protections can significantly reduce your wind insurance premiums. A wind mitigation inspection documents these features."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get coverage if I'm in a high-risk flood zone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Properties in high-risk flood zones (A, V, VE zones) can get coverage, though it may be more expensive. Mortgage lenders typically require flood insurance for properties in Special Flood Hazard Areas (SFHAs)."
        }
      },
      {
        "@type": "Question",
        "name": "What if my home was damaged by a previous hurricane?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prior storm damage and claims can affect your insurability, but proper repairs documented with permits, photos, and contractor invoices can help. Our specialists work with carriers that consider homes with repaired prior damage."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly do I need coastal insurance coverage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Don't wait for hurricane season. Many carriers impose waiting periods or binding restrictions during active storms or hurricane season. Purchase coverage during off-season for best rates and availability."
        }
      }
    ]
  };
};

export const generateWildfireFAQSchema = (stateName: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is wildfire insurance and do I need it in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Wildfire coverage is typically included in standard homeowners insurance, but many carriers are restricting coverage in high fire-risk areas in ${stateName}. Properties near the Wildland-Urban Interface (WUI) or in high fire severity zones may need specialty coverage.`
        }
      },
      {
        "@type": "Question",
        "name": "What is the Wildland-Urban Interface (WUI)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The WUI is where homes and wildland vegetation meet or intermix. Properties in the WUI face elevated wildfire risk. Many insurers use WUI classifications and fire severity scores to determine insurability and pricing."
        }
      },
      {
        "@type": "Question",
        "name": "How can I make my property more insurable in fire-prone areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Create defensible space by clearing vegetation within 100 feet of structures, install Class A fire-resistant roofing, use ember-resistant vents, enclose eaves, remove combustible materials from the home exterior, and maintain access roads for fire equipment."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Fire Protection Score and how does it affect my insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fire Protection Class (FPC) rates fire department capabilities from 1 (best) to 10 (worst). Properties farther from fire stations or hydrants have higher scores, affecting insurance availability and cost. Some rural areas are rated 10, making standard coverage difficult."
        }
      },
      {
        "@type": "Question",
        "name": `Are there FAIR Plans available for wildfire coverage in ${stateName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Some states offer FAIR Plans as last-resort coverage for high-risk properties. FAIR Plans typically provide basic coverage at higher rates. Our specialists can help you explore FAIR Plans or find better alternatives through specialty carriers in ${stateName}.`
        }
      },
      {
        "@type": "Question",
        "name": "My insurance was non-renewed due to fire risk. What now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non-renewals in fire-prone areas are increasingly common. Document any mitigation work you've completed, create defensible space, and work with our specialists who have access to carriers that specialize in wildfire-exposed properties."
        }
      },
      {
        "@type": "Question",
        "name": "What is Firewise certification and does it help with insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Firewise USA is a program recognizing communities taking action to reduce wildfire risk. Firewise certification and individual home hardening can improve insurability and may qualify for discounts with some carriers."
        }
      },
      {
        "@type": "Question",
        "name": "How much does wildfire insurance cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wildfire insurance costs vary dramatically based on fire severity score, defensible space, roof type, distance to fire protection, and prior wildfire history in the area. Premiums can range from standard rates to 3-5x standard rates for very high-risk properties."
        }
      }
    ]
  };
};

export const generateMarylandFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes a Maryland home high-risk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coastal wind exposure, worn or near-end-of-life roofs, prior roof or water claims, and outdated electrical or plumbing systems are common drivers. Drainage problems and finished basements without backups add water-loss potential that underwriters dislike. Documentation and well-targeted mitigation frequently expand your options back into standard markets."
        }
      },
      {
        "@type": "Question",
        "name": "Does Maryland have a FAIR Plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the Maryland FAIR Plan provides access to essential coverage when private options are limited. It is intended as a safety net while you complete upgrades or gather documentation that standard carriers require. We review limits, deductibles, and exclusions with you and map a path to re-enter admitted markets when feasible."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reduce premium?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start by maintaining a compliant roof, improving drainage, and adding a battery-backed sump pump and water-leak sensors. Update electrical and plumbing where needed, and consider a smart shutoff valve to reduce water-loss risk. Finally, choose a thoughtful deductible strategy—potentially pairing a higher all-perils deductible with a percentage named-storm or hurricane deductible in coastal areas."
        }
      },
      {
        "@type": "Question",
        "name": "Is flood included in homeowners insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, standard homeowners policies exclude flood, which is defined as rising water from outside the home. You need a separate flood policy, either through the NFIP or a private market, to protect your building and contents. We quote both options and help align limits and waiting-period considerations with your lender's requirements and your risk tolerance."
        }
      },
      {
        "@type": "Question",
        "name": "Can I find affordable high-risk homeowners insurance in Maryland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Affordability depends on mitigation, roof condition, location, fire protection, and your claims history. By addressing the one or two issues blocking placement and documenting the fixes, you often unlock more competitive carriers. We then shop widely and apply available credits to land on the best value for your situation."
        }
      },
      {
        "@type": "Question",
        "name": "I was non-renewed after an inspection. What now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Obtain the inspection report and list the carrier's specific findings by priority, then complete repairs with invoices and before/after photos. We package your documentation and present it to carriers that value completed work and clear maintenance plans. In many cases, this turns a non-renewal into a new placement with stronger terms and long-term stability."
        }
      }
    ]
  };
};

// Dynamic Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// WebSite Schema with SearchAction
export const generateWebSiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://highriskhomeowners.com/#website",
    "url": "https://highriskhomeowners.com",
    "name": "HighRiskHomeowners.com",
    "description": "Find high-risk homeowners insurance specialists across 44 states. Free referral service for nonrenewals, FAIR Plans, coastal, and wildfire coverage.",
    "publisher": {
      "@id": "https://highriskhomeowners.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://highriskhomeowners.com/states?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};

// ItemList Schema for States Page
export const generateStatesListSchema = (states: Array<{ name: string; slug: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "High-Risk Home Insurance by State",
    "description": "Licensed insurance agents specializing in high-risk homeowners insurance across 44 states",
    "numberOfItems": states.length,
    "itemListElement": states.map((state, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": `${state.name} High-Risk Home Insurance`,
        "url": `https://highriskhomeowners.com/${state.slug}-high-risk-home-insurance`,
        "description": `Licensed agents in ${state.name} specializing in high-risk homeowners insurance`
      }
    }))
  };
};

// VideoObject Schema
export const generateVideoSchema = (video: {
  title: string;
  description: string;
  videoId: string;
  duration: string;
  publishedAt: string;
  transcript: string;
  thumbnailUrl?: string;
}) => {
  // Convert duration from MM:SS to ISO 8601 format (PT#M#S)
  const [minutes, seconds] = video.duration.split(':').map(Number);
  const isoDuration = `PT${minutes}M${seconds}S`;
  
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl || `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
    "uploadDate": video.publishedAt,
    "duration": isoDuration,
    "contentUrl": `https://www.youtube.com/watch?v=${video.videoId}`,
    "embedUrl": `https://www.youtube.com/embed/${video.videoId}`,
    "publisher": {
      "@id": "https://highriskhomeowners.com/#organization"
    },
    "transcript": video.transcript
  };
};

// ImageObject Schema with proper metadata
export const generateImageSchema = (imageUrl: string, alt: string, width?: number, height?: number) => {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": imageUrl,
    "description": alt,
    ...(width && { "width": width }),
    ...(height && { "height": height }),
    "inLanguage": "en-US"
  };
};
