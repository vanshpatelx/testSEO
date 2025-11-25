import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getCoastalStateBySlug } from '../data/coastalStates';
import { COASTAL_CONTENT } from '../data/coastalContent';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';
import { generateCoastalSEOData } from '../utils/seo';

export default function CoastalInsurancePage() {
  const { slug } = useParams<{ slug: string }>();
  const { isFormOpen, openForm, closeForm } = useIntakeForm();
  
  if (!slug) {
    return <Navigate to="/states" replace />;
  }

  const state = getCoastalStateBySlug(slug);
  
  if (!state) {
    return <Navigate to="/states" replace />;
  }

  const content = COASTAL_CONTENT[state.code] || COASTAL_CONTENT['TX'];
  const seoData = generateCoastalSEOData(state, content);

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        jsonLd={seoData.jsonLd}
      />
      
      <Breadcrumb items={[
        { label: 'States', href: '/states' },
        { label: `${state.name} Coastal Insurance` }
      ]} />
      
      {content && (
      <>
      <section className="relative bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {content.hero?.title || `Coastal Insurance in ${state.name}`}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {content.hero?.description || content.market_overview}
              </p>
              <button 
                onClick={() => openForm(state.code)}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Get Coastal Coverage
              </button>
            </div>
            <div className="relative">
              <img 
                src={`/images/states/${slug}-coastal.jpg`}
                alt={content.hero?.altText || `${state.name} Coastal Insurance`}
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
                    <div className="space-y-4">
                      {section.content.split('\n\n').map((paragraph: string, pIndex: number) => (
                        <p key={pIndex} className="text-slate-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </article>
            <div className="mt-12 pt-8 border-t border-slate-200 text-center">
              <Link 
                to={`/${slug}`}
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg underline"
              >
                Get more information in {state.name}
              </Link>
            </div>
          </div>
        </section>
      )}
      </>
      )}

      <IntakeForm isOpen={isFormOpen} onClose={closeForm} initialState={state.code} />
    </>
  );
}