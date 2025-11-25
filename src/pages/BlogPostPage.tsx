import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2 } from 'lucide-react';
import { getBlogPostBySlug } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';
import { generateBlogPostSEOData } from '../utils/seo';
import DOMPurify from 'dompurify';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { isFormOpen, openForm, closeForm } = useIntakeForm();
  
  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const seoData = generateBlogPostSEOData(post);

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        ogImage={post.featuredImage}
        ogType="article"
        jsonLd={seoData.jsonLd}
      />
      
      <Breadcrumb items={[
        { label: 'Blog', href: '/blog' },
        { label: post.title }
      ]} />

      {/* Article Content */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-video rounded-2xl overflow-hidden mb-8">
              <img
                src={post.featuredImage}
                alt={`Featured image for ${post.title} - Professional guide to ${post.title.toLowerCase()}`}
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share Button */}
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Share2 className="h-4 w-4" />
              Share Article
            </button>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ 
                __html: DOMPurify.sanitize(post.content
                  .replace(/\n/g, '<br>')
                  .replace(/#{1,6}\s/g, (match) => {
                    const level = match.trim().length;
                    return `<h${level} class="text-${4-level}xl font-bold text-slate-900 mt-8 mb-4">`;
                  })
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>'))
              }} 
            />
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with Your Insurance Situation?</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Don't navigate high-risk insurance alone. Get connected with specialists 
              who understand your specific situation and can find the right coverage.
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