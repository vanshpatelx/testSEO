import type { State } from '../types';
import { 
  generateOrganizationSchema, 
  generateStateServiceSchema, 
  generateWebPageSchema 
} from './schema';

export const buildStatePath = (stateSlug: string): string => {
  return `/${stateSlug}-high-risk-home-insurance`;
};

export const buildCoastalPath = (stateSlug: string): string => {
  return `/coastal-insurance/${stateSlug}/`;
};

export const buildWildfirePath = (stateSlug: string): string => {
  return `/wildfire-insurance/${stateSlug}/`;
};

export const generateSEOData = (state: State, content?: any) => {
  const title = `${state.name} High-Risk Homeowners Insurance`;
  const description = `Find licensed agents in ${state.name} who specialize in high-risk homeowners insurance, nonrenewals, and difficult-to-place coverage. Free referral service.`;
  const keywords = `${state.name} high risk homeowners insurance, ${state.name} high risk home insurance, ${state.name} FAIR plan, ${state.name} nonrenewal insurance, ${state.name} coastal insurance`;
  const canonical = `https://highriskhomeowners.com${buildStatePath(state.slug)}`;
  
  const baseGraph: any[] = [
    generateOrganizationSchema(),
    generateStateServiceSchema(state),
    generateWebPageSchema(title, description, canonical),
  ];

  // Add image schema if heroImage exists
  if (content?.heroImage) {
    baseGraph.push({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": `https://highriskhomeowners.com${content.heroImage}`,
      "url": `https://highriskhomeowners.com${content.heroImage}`,
      "description": content.heroImageAlt || `${state.name} landscape`,
      "name": `${state.name} Hero Image`,
      "representativeOfPage": true
    });
  }

  // Add Article schema if article content exists
  if (content?.article) {
    baseGraph.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `${state.name} High-Risk Homeowners Insurance Guide`,
      "description": description,
      "image": content.heroImage ? `https://highriskhomeowners.com${content.heroImage}` : undefined,
      "author": {
        "@type": "Organization",
        "name": "HighRiskHomeowners.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "HighRiskHomeowners.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://highriskhomeowners.com/favicon.ico"
        }
      },
      "datePublished": content.publishedDate || "2024-01-01",
      "dateModified": content.lastModified || new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonical
      }
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": baseGraph
  };

  return {
    title,
    description,
    keywords,
    canonical,
    jsonLd
  };
};

export const generateCoastalSEOData = (state: State, content?: any) => {
  const title = `${state.name} Coastal Homeowners Insurance | Get Covered`;
  const description = `Specialized coastal homeowners insurance in ${state.name}. Connect with licensed agents who understand hurricane, flood, and wind coverage for coastal properties. Free referral service.`;
  const keywords = `${state.name} coastal homeowners insurance, ${state.name} coastal home insurance, ${state.name} hurricane insurance, ${state.name} coastal property coverage, ${state.name} beach house insurance`;
  const canonical = `https://highriskhomeowners.com${buildCoastalPath(state.slug)}`;
  
  const baseGraph: any[] = [
    generateOrganizationSchema(),
    generateStateServiceSchema(state),
    generateWebPageSchema(title, description, canonical),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${state.name} Coastal Property Insurance`,
      "serviceType": "Coastal Insurance Referral",
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
      "description": `Specialized insurance for coastal properties in ${state.name} including hurricane, wind, and flood coverage.`,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "category": ["Hurricane Insurance", "Wind Insurance", "Coastal Property Insurance"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1247",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ];

  // Add image schema if heroImage exists
  if (content?.heroImage) {
    baseGraph.push({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": `https://highriskhomeowners.com${content.heroImage}`,
      "url": `https://highriskhomeowners.com${content.heroImage}`,
      "description": content.heroImageAlt || `${state.name} coastal landscape`,
      "name": `${state.name} Coastal Hero Image`,
      "representativeOfPage": true
    });
  }

  // Add breadcrumb schema
  baseGraph.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://highriskhomeowners.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "States",
        "item": "https://highriskhomeowners.com/states"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${state.name} Coastal Insurance`,
        "item": canonical
      }
    ]
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": baseGraph
  };

  return {
    title,
    description,
    keywords,
    canonical,
    jsonLd
  };
};

export const generateWildfireSEOData = (state: State, content?: any) => {
  const title = `${state.name} Wildfire Homeowners Insurance | Get Covered`;
  const description = `Specialized wildfire homeowners insurance in ${state.name}. Connect with licensed agents who understand fire risk, defensible space, and coverage for high-risk wildfire zones. Free referral service.`;
  const keywords = `${state.name} wildfire homeowners insurance, ${state.name} wildfire home insurance, ${state.name} fire insurance, ${state.name} wildfire property coverage, ${state.name} high fire risk insurance`;
  const canonical = `https://highriskhomeowners.com${buildWildfirePath(state.slug)}`;
  
  const baseGraph: any[] = [
    generateOrganizationSchema(),
    generateStateServiceSchema(state),
    generateWebPageSchema(title, description, canonical),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${state.name} Wildfire Property Insurance`,
      "serviceType": "Wildfire Insurance Referral",
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
      "description": `Specialized insurance for properties in ${state.name} wildfire zones including fire risk assessment, defensible space requirements, and comprehensive coverage.`,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "category": ["Wildfire Insurance", "Fire Insurance", "High-Risk Property Insurance"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1247",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ];

  // Add image schema if heroImage exists
  if (content?.heroImage) {
    baseGraph.push({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": `https://highriskhomeowners.com${content.heroImage}`,
      "url": `https://highriskhomeowners.com${content.heroImage}`,
      "description": content.heroImageAlt || `${state.name} wildfire landscape`,
      "name": `${state.name} Wildfire Hero Image`,
      "representativeOfPage": true
    });
  }

  // Add breadcrumb schema
  baseGraph.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://highriskhomeowners.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "States",
        "item": "https://highriskhomeowners.com/states"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${state.name} Wildfire Insurance`,
        "item": canonical
      }
    ]
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": baseGraph
  };

  return {
    title,
    description,
    keywords,
    canonical,
    jsonLd
  };
};

export const generateBlogPostSEOData = (post: any) => {
  const title = `${post.title} | HighRiskHomeowners.com`;
  const description = post.metaDescription;
  const keywords = post.tags.join(', ');
  const canonical = `https://highriskhomeowners.com/blog/${post.slug}`;
  
  const baseGraph: any[] = [
    generateOrganizationSchema(),
    generateWebPageSchema(title, description, canonical),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.metaDescription,
      "image": post.featuredImage,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "HighRiskHomeowners.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://highriskhomeowners.com/favicon.ico"
        }
      },
      "datePublished": post.publishedAt,
      "dateModified": post.updatedAt,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonical
      },
      "keywords": keywords,
      "articleSection": "Insurance Guides",
      "wordCount": post.content.split(' ').length,
      "inLanguage": "en-US"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://highriskhomeowners.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://highriskhomeowners.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": canonical
        }
      ]
    }
  ];

  // Add ImageObject schema if featured image exists
  if (post.featuredImage) {
    baseGraph.push({
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": post.featuredImage,
      "url": post.featuredImage,
      "description": `Featured image for ${post.title}`,
      "name": post.title,
      "representativeOfPage": true
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": baseGraph
  };

  return {
    title,
    description,
    keywords,
    canonical,
    jsonLd
  };
};

export const generateGlossaryTermSEOData = (term: any) => {
  const title = `${term.term} - Insurance Glossary | HighRiskHomeowners.com`;
  const description = term.metaDescription;
  const keywords = `${term.term}, ${term.category}, insurance terms, homeowners insurance glossary`;
  const canonical = `https://highriskhomeowners.com/glossary/${term.slug}`;
  
  const baseGraph: any[] = [
    generateOrganizationSchema(),
    generateWebPageSchema(title, description, canonical),
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.definition,
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "HighRiskHomeowners.com Insurance Glossary",
        "url": "https://highriskhomeowners.com/glossary"
      },
      "termCode": term.slug,
      "url": canonical,
      "identifier": canonical
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": term.term,
      "description": term.definition,
      "author": {
        "@type": "Organization",
        "name": "HighRiskHomeowners.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "HighRiskHomeowners.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://highriskhomeowners.com/favicon.ico"
        }
      },
      "datePublished": term.publishedAt || "2024-01-01",
      "dateModified": term.updatedAt || new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonical
      },
      "keywords": keywords,
      "articleSection": term.category,
      "inLanguage": "en-US"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://highriskhomeowners.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Glossary",
          "item": "https://highriskhomeowners.com/glossary"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": term.term,
          "item": canonical
        }
      ]
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": baseGraph
  };

  return {
    title,
    description,
    keywords,
    canonical,
    jsonLd
  };
};