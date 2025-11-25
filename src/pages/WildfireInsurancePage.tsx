import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getWildfireStateBySlug } from '../data/wildfireStates';
import { WILDFIRE_CONTENT } from '../data/wildfireContent';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';
import { generateOrganizationSchema, generateWebPageSchema, generateWildfireFAQSchema, generateBreadcrumbSchema } from '../utils/schema';

export default function WildfireInsurancePage() {
  const { slug } = useParams<{ slug: string }>();
  const { isFormOpen, openForm, closeForm } = useIntakeForm();
  
  if (!slug) {
    return <Navigate to="/states" replace />;
  }

  const state = getWildfireStateBySlug(slug);
  
  if (!state) {
    return <Navigate to="/states" replace />;
  }

  const content = WILDFIRE_CONTENT[state.code] || WILDFIRE_CONTENT['AZ'];

  const wildfireSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebPageSchema(
        `${state.name} Wildfire Insurance | HighRiskHomeowners.com`,
        `Find wildfire insurance specialists in ${state.name}. Expert help for WUI properties and high fire risk areas.`,
        `https://highriskhomeowners.com/${slug}-wildfire-insurance`
      ),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${state.name} Wildfire Insurance`,
        "serviceType": "Wildfire Insurance Referral",
        "provider": {
          "@id": "https://highriskhomeowners.com/#organization"
        },
        "areaServed": {
          "@type": "State",
          "name": state.name
        },
        "description": `Specialized insurance for wildfire-prone properties in ${state.name} including WUI areas and high fire risk zones.`,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "category": ["Wildfire Insurance", "WUI Insurance", "Fire Risk Property Insurance"]
      },
      generateWildfireFAQSchema(state.name),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://highriskhomeowners.com" },
        { name: "States", url: "https://highriskhomeowners.com/states" },
        { name: `${state.name} Wildfire Insurance`, url: `https://highriskhomeowners.com/${slug}-wildfire-insurance` }
      ])
    ]
  };

  return (
    <>
      <SEOHead 
        title={`Wildfires in ${state.name} | Risk, Prevention, and Home Safety`}
        description={`Learn how ${state.name} homeowners can reduce wildfire risk, protect their homes, and maintain insurance coverage through prevention and mitigation.`}
        keywords={`${state.name} wildfire insurance, ${state.name} WUI coverage, wildfire prevention ${state.name}`}
        canonical={`https://highriskhomeowners.com/${slug}-wildfire-insurance`}
        jsonLd={wildfireSchema}
        ogImage={`https://highriskhomeowners.com/images/states/${slug}-wildfire.jpg`}
      />
      
      <Breadcrumb items={[
        { label: 'States', href: '/states' },
        { label: `${state.name} Wildfire Insurance` }
      ]} />
      
      <section className="relative bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {content.hero?.title || `Wildfires in ${state.name}`}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {content.hero?.description || content.market_overview}
              </p>
              <button 
                onClick={() => openForm(state.code)}
                className="bg-destructive text-destructive-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Get Wildfire Coverage
              </button>
            </div>
            <div className="relative">
              <img 
                src={`/images/states/${slug}-wildfire.jpg`}
                alt={`${state.name} Wildfire Insurance`}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {content.sections && content.sections.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              {content.sections.map((section: any, index: number) => (
                <div key={index} className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {section.title}
                  </h2>
                  {section.isList ? (
                    <ul className="space-y-3 text-slate-700">
                      {section.content.map((item: string, itemIndex: number) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-700 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </article>
            <div className="mt-12 pt-8 border-t border-slate-200 text-center">
              <Link 
                to={`/${slug}`}
                className="text-orange-600 hover:text-orange-700 font-semibold text-lg underline"
              >
                Get more information in {state.name}
              </Link>
            </div>
          </div>
        </section>
      )}

      <IntakeForm isOpen={isFormOpen} onClose={closeForm} initialState={state.code} />
    </>
  );
}