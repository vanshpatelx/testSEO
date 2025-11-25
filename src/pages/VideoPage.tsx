import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Clock, Tag, ExternalLink, Calendar } from 'lucide-react';
import { getVideoPageBySlug, getRelatedVideos } from '../data/videoPages';
import SEOHead from '../components/SEOHead';
import IntakeForm from '../components/IntakeForm';
import { useIntakeForm } from '../hooks/useIntakeForm';
import Breadcrumb from '../components/Breadcrumb';
import { generateOrganizationSchema, generateVideoSchema, generateBreadcrumbSchema, generateWebPageSchema } from '../utils/schema';
import DOMPurify from 'dompurify';

export default function VideoPage() {
  const { slug } = useParams<{ slug: string }>();
  const { isFormOpen, openForm, closeForm } = useIntakeForm();
  
  const video = slug ? getVideoPageBySlug(slug) : null;

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Video Not Found</h1>
          <p className="text-muted-foreground mb-6">The video you're looking for doesn't exist.</p>
          <Link 
            to="/video-library"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Back to Video Library
          </Link>
        </div>
      </div>
    );
  }

  const relatedVideos = getRelatedVideos(video.slug, video.relatedVideos);

  const videoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebPageSchema(
        `${video.title} | HighRiskHomeowners.com`,
        video.metaDescription,
        `https://highriskhomeowners.com/video-library/${video.slug}`
      ),
      generateVideoSchema({
        title: video.title,
        description: video.description,
        videoId: video.videoId,
        duration: video.duration,
        publishedAt: video.publishedAt,
        transcript: video.transcript
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://highriskhomeowners.com" },
        { name: "Video Library", url: "https://highriskhomeowners.com/video-library" },
        { name: video.title, url: `https://highriskhomeowners.com/video-library/${video.slug}` }
      ])
    ]
  };

  return (
    <>
      <SEOHead 
        title={`${video.title} | HighRiskHomeowners.com`}
        description={video.metaDescription}
        canonical={`https://highriskhomeowners.com/video-library/${video.slug}`}
        jsonLd={videoSchema}
      />
      
      <Breadcrumb items={[
        { label: 'Video Library', href: '/video-library' },
        { label: video.title }
      ]} />

      {/* Video Content */}
      <article className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden mb-8">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* Video Info */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    <Tag className="h-3 w-3 mr-1" />
                    {video.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {video.duration}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(video.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {video.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {video.description}
                </p>

                {/* Tags */}
                {video.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {video.tags.map(tag => (
                      <span 
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-foreground text-sm rounded-full"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Transcript */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Video Transcript</h3>
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-slate-700 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(video.transcript.replace(/\n/g, '<br>')) }}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground mb-8">
                <h3 className="text-xl font-bold mb-4">Need Personal Help?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Get connected with licensed agents who specialize in your specific situation.
                </p>
                <button
                  onClick={() => openForm()}
                  className="w-full bg-background text-primary px-6 py-3 rounded-xl font-semibold hover:bg-background/90 transition-colors"
                >
                  Find Specialists
                </button>
              </div>

              {/* Related Videos */}
              {relatedVideos.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Related Videos</h3>
                  <div className="space-y-4">
                    {relatedVideos.map((relatedVideo) => (
                      <Link
                        key={relatedVideo.id}
                        to={`/video-library/${relatedVideo.slug}`}
                        className="group block"
                      >
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-20 h-14 bg-slate-900 rounded-lg overflow-hidden relative">
                              <img
                                src={`https://img.youtube.com/vi/${relatedVideo.videoId}/hqdefault.jpg`}
                                alt={relatedVideo.title}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Play className="h-4 w-4 text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                              {relatedVideo.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <span>{relatedVideo.duration}</span>
                              <span>•</span>
                              <span>{relatedVideo.category}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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