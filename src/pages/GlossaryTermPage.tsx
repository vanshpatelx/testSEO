import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Tag, ExternalLink } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossaryTerms';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';
import { generateGlossaryTermSEOData } from '../utils/seo';
import DOMPurify from 'dompurify';

export default function GlossaryTermPage() {
  const { slug } = useParams<{ slug: string }>();
  const { isFormOpen, openForm, closeForm } = useIntakeForm();
  
  const term = slug ? GLOSSARY_TERMS.find(t => t.slug === slug) : null;

  if (!term) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Term Not Found</h1>
          <p className="text-muted-foreground mb-6">The glossary term you're looking for doesn't exist.</p>
          <Link 
            to="/glossary"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Back to Glossary
          </Link>
        </div>
      </div>
    );
  }

  const seoData = generateGlossaryTermSEOData(term);
  const relatedTerms = term.relatedTerms
    .map(slug => GLOSSARY_TERMS.find(t => t.slug === slug))
    .filter(Boolean);

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        ogType="article"
        jsonLd={seoData.jsonLd}
      />
      
      <Breadcrumb items={[
        { label: 'Glossary', href: '/glossary' },
        { label: term.term }
      ]} />

      {/* Term Content */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                <Tag className="h-3 w-3 mr-1" />
                {term.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {term.term}
            </h1>
            
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
              <p className="text-lg text-foreground font-medium">
                {term.definition}
              </p>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ 
                __html: DOMPurify.sanitize(term.content
                  .replace(/\n/g, '<br>')
                  .replace(/#{1,6}\s/g, match => {
                    const level = match.trim().length;
                    return `<h${level} class="text-${4-level}xl font-bold text-slate-900 mt-8 mb-4">`;
                  })
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>'))
              }} 
            />
          </div>

          {/* Related Terms */}
          {relatedTerms.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Related Terms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedTerms.map((relatedTerm) => (
                  <Link
                    key={relatedTerm!.id}
                    to={`/glossary/${relatedTerm!.slug}`}
                    className="group bg-background border border-border rounded-xl p-4 hover:border-primary hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {relatedTerm!.term}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {relatedTerm!.definition}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with Your Insurance?</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Our network of specialists can help you understand your coverage options 
              and find the right protection for your high-risk property.
            </p>
            <button
              onClick={() => openForm()}
              className="bg-background text-primary px-8 py-4 rounded-xl font-semibold hover:bg-background/90 transition-colors"
            >
              Get Connected with Specialists
            </button>
          </div>
        </div>
      </article>

      <IntakeForm 
        isOpen={isFormOpen}
        onClose={closeForm}
      />
    </>
  );
}