import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MapPin, Phone, CheckCircle, ArrowRight, Users, Shield, Clock } from 'lucide-react';
import { getStateBySlug, STATES } from '../data/states';
import { STATE_CONTENT } from '../data/content';
import { generateSEOData } from '../utils/seo';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';
import { generateStateFAQSchema, generateBreadcrumbSchema, generateMarylandFAQSchema } from '../utils/schema';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { getRelatedStates } from '../utils/relatedStates';
import { buildStatePath } from '../utils/seo';
import { Link } from 'react-router-dom';
import { extractHeadings, addHeadingIds, calculateReadingTime } from '../utils/articleUtils';
import TableOfContents from '../components/TableOfContents';
import ArticleMetadata from '../components/ArticleMetadata';
import SocialShare from '../components/SocialShare';
import { useMemo } from 'react';
import DOMPurify from 'dompurify';

export default function StatePage() {
  const { slug } = useParams<{ slug: string }>();
  const { isFormOpen, openForm, closeForm } = useIntakeForm();
  
  if (!slug) {
    return <Navigate to="/states" replace />;
  }

  // Extract state slug from URL pattern (e.g., "florida-high-risk-home-insurance" -> "florida")
  const stateSlug = slug.replace('-high-risk-home-insurance', '');
  const state = getStateBySlug(stateSlug);
  
  if (!state) {
    return <Navigate to="/states" replace />;
  }

  const content = STATE_CONTENT[state.code] || STATE_CONTENT['GA']; // Fallback to Georgia
  const seoData = generateSEOData(state, content);
  const relatedStates = content.relatedStates?.length > 0 
    ? content.relatedStates.map((code: string) => STATES.find(s => s.code === code)).filter(Boolean)
    : getRelatedStates(state.code, 3);

  // Process article content if it exists
  const articleData = useMemo(() => {
    if (!content.article) return null;
    
    const headings = extractHeadings(content.article);
    const articleWithIds = addHeadingIds(content.article);
    const readingTime = calculateReadingTime(content.article);
    
    return { headings, articleWithIds, readingTime };
  }, [content.article]);

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        ogImage={content.heroImage ? `https://highriskhomeowners.com${content.heroImage}` : undefined}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            seoData.jsonLd,
            state.code === 'MD' ? generateMarylandFAQSchema() : generateStateFAQSchema(state.name),
            generateBreadcrumbSchema([
              { name: "Home", url: "https://highriskhomeowners.com" },
              { name: "States", url: "https://highriskhomeowners.com/states" },
              { name: `${state.name} High-Risk Insurance`, url: seoData.canonical || `https://highriskhomeowners.com/${slug}` }
            ])
          ]
        }}
      />
      
      <Breadcrumb items={[
        { label: 'States', href: '/states' },
        { label: `${state.name} High-Risk Insurance` }
      ]} />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[hsl(var(--gray-50))] to-[hsl(var(--accent))] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-20 w-20 bg-[hsl(var(--primary))] rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-2xl">
              {state.code}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {state.name} High-Risk
              <span className="block text-[hsl(var(--primary))]">Home Insurance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect with licensed agents in {state.name} who specialize in high-risk properties, 
              nonrenewals, and difficult-to-place coverage.
            </p>
            <button 
              onClick={() => openForm(state.name)}
              className="bg-[hsl(var(--primary))] text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <MapPin className="h-5 w-5" />
              Find {state.name} Agents
            </button>
          </div>
        </div>
      </section>

      {/* Hero Image & Article Section */}
      {(content.heroImage || content.article) && (
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {content.heroImage && (
              <div className="mb-12 rounded-2xl overflow-hidden shadow-lg aspect-[21/9]">
                <img
                  src={content.heroImage}
                  alt={content.heroImageAlt || `${state.name} landscape`}
                  loading="lazy"
                  width="1920"
                  height="823"
                  className="w-full h-full object-cover"
                  itemProp="image"
                />
              </div>
            )}

            {content.article && articleData && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Table of Contents - Sidebar */}
                <aside className="lg:col-span-1">
                  <TableOfContents headings={articleData.headings} />
                </aside>

                {/* Article Content */}
                <div className="lg:col-span-3">
                  {/* Article Metadata */}
                  <ArticleMetadata 
                    lastModified={content.lastModified}
                    readingTime={articleData.readingTime}
                  />

                  {/* Article Body */}
                  <article 
                    className="prose prose-lg max-w-none
                      [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mb-6 [&_h2]:mt-12 [&_h2]:scroll-mt-24
                      [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:scroll-mt-24
                      [&_p]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed
                      [&_ul]:my-6 [&_li]:text-muted-foreground
                      [&_strong]:font-bold [&_strong]:text-foreground
                      [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80"
                    itemScope
                    itemType="https://schema.org/Article"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(articleData.articleWithIds) }}
                  />

                  {/* Social Share */}
                  <SocialShare 
                    title={`${state.name} High-Risk Homeowners Insurance Guide`}
                    url={seoData.canonical}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {content.faqs && content.faqs.length > 0 && (
        <section className="py-20 bg-[hsl(var(--gray-50))]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Common questions about {state.name} high-risk home insurance</p>
            </div>
            
            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {content.faqs.map((faq: any, index: number) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                    <AccordionTrigger className="px-6 py-5 text-left hover:bg-muted [&[data-state=open]]:bg-muted">
                      <span className="text-lg font-semibold text-card-foreground pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Key Takeaways */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Points for {state.name} Homeowners</h2>
            <p className="text-xl text-slate-600">What you need to know about high-risk insurance in {state.name}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.takeaways.map((takeaway: string, index: number) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-slate-700 font-medium">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You Might Be Wondering */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">You Might Be Wondering...</h2>
            <p className="text-xl text-slate-600">Common concerns from {state.name} homeowners</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="text-2xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                "How quickly can I get connected with an agent in {state.name}?"
              </h3>
              <p className="text-slate-600 mb-4">
                Most {state.name} homeowners are connected with specialists within 24 hours. 
                Our agents understand the urgency of your situation and prioritize quick response times.
              </p>
              <p className="text-sm text-blue-600 font-semibold">
                ✓ Same-day connections available
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="text-2xl mb-4">🏛️</div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                "Do these agents really understand {state.name}'s specific risks?"
              </h3>
              <p className="text-slate-600 mb-4">
                Absolutely. Our {state.name} specialists deal with local risk factors daily. They understand regional weather patterns, building codes, 
                and market conditions specific to {state.name}.
              </p>
              <p className="text-sm text-blue-600 font-semibold">
                ✓ Local expertise you can trust
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="text-2xl mb-4">❌</div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                "What if I've been turned down by multiple companies already?"
              </h3>
              <p className="text-slate-600 mb-4">
                That's exactly why our specialists exist. They work with carriers that other agents 
                don't have access to, including surplus lines markets and specialty programs designed 
                for challenging properties.
              </p>
              <p className="text-sm text-blue-600 font-semibold">
                ✓ Access to specialty markets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              {state.name} Insurance Market Overview
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {content.market_overview}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Common Risk Factors in {state.name}</h3>
                  <ul className="space-y-2">
                    {content.risk_factors.map((factor: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">How Our Process Works</h3>
                  <ul className="space-y-2">
                    {content.how_it_works.map((step: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-6 w-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-slate-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Help {state.name} Homeowners</h2>
            <p className="text-xl text-slate-600">Professional service tailored to your state</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Licensed {state.name} Agents</h3>
              <p className="text-slate-600">
                All our agents are properly licensed in {state.name} and understand local 
                regulations, market conditions, and risk factors.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
              <div className="h-16 w-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">High-Risk Expertise</h3>
              <p className="text-slate-600">
                Our {state.name} specialists focus specifically on challenging properties 
                and complex insurance situations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibent text-slate-900 mb-4">Fast Response</h3>
              <p className="text-slate-600">
                Quick connections and rapid response times to help you secure 
                coverage when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Coverage in {state.name}?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't let a high-risk property leave you without protection. Get connected 
            with {state.name} specialists who understand your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openForm(state.name)}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Connected Now
            </button>
            <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-slate-500 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Call 888-795-6550
            </button>
          </div>
          
          <div className="mt-8 text-sm text-slate-400">
            {content.disclaimer}
          </div>
        </div>
      </section>

      {/* Related States Section */}
      {relatedStates.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Coverage in Nearby States</h2>
              <p className="text-xl text-slate-600">We also serve homeowners in these neighboring states</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStates.map((relatedState: any) => (
                <Link
                  key={relatedState.code}
                  to={buildStatePath(relatedState.slug)}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {relatedState.code}
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {relatedState.name}
                  </h3>
                  <p className="text-sm text-slate-600">
                    High-risk homeowners insurance specialists in {relatedState.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      </main>

      <IntakeForm
        isOpen={isFormOpen}
        onClose={closeForm}
        initialState={state.name}
      />
    </>
  );
}