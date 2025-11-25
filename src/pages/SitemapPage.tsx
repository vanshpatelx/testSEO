import React from 'react';
import { Download, FileText, Globe, Calendar } from 'lucide-react';
import { 
  generateSitemap, 
  generateCompleteSitemap,
  downloadSitemap,
  downloadMainSitemap,
  downloadStatesSitemap,
  downloadBlogSitemap,
  downloadGlossarySitemap,
  downloadVideosSitemap,
  downloadSpecialtySitemap
} from '../utils/sitemap';
import { STATES } from '../data/states';
import { BLOG_POSTS } from '../data/blogPosts';
import { GLOSSARY_TERMS } from '../data/glossaryTerms';
import { VIDEO_PAGES } from '../data/videoPages';
import SEOHead from '../components/SEOHead';

export default function SitemapPage() {
  const handleDownload = () => {
    downloadSitemap();
  };

  const handleViewXML = () => {
    window.open('/sitemap_index.xml', '_blank');
  };

  const stats = {
    states: STATES.length,
    blogPosts: BLOG_POSTS.filter(post => post.published).length,
    glossaryTerms: GLOSSARY_TERMS.length,
    videoPages: VIDEO_PAGES.length,
    staticPages: 13
  };

  const totalPages = stats.states + stats.blogPosts + stats.glossaryTerms + stats.videoPages + stats.staticPages;

  return (
    <>
      <SEOHead 
        title="Sitemap | HighRiskHomeowners.com"
        description="XML sitemap for HighRiskHomeowners.com including all state pages, blog posts, glossary terms, and video content."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-20 w-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Site
              <span className="block text-blue-600">Sitemap</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Complete XML sitemap for all pages on HighRiskHomeowners.com including state pages, 
              blog posts, glossary terms, and video content.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Stats */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sitemap Overview</h2>
            <p className="text-xl text-slate-600">Total pages included in sitemap</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.states}</div>
              <div className="text-sm text-slate-600">State Pages</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.blogPosts}</div>
              <div className="text-sm text-slate-600">Blog Posts</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{stats.glossaryTerms}</div>
              <div className="text-sm text-slate-600">Glossary Terms</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{stats.videoPages}</div>
              <div className="text-sm text-slate-600">Video Pages</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{stats.staticPages}</div>
              <div className="text-sm text-slate-600">Static Pages</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">{totalPages}</div>
              <div className="text-sm text-slate-600">Total Pages</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownload}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Complete Sitemap (All 115+ Pages)
            </button>
            <a
              href="/sitemap_index.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="h-5 w-5" />
              View Complete XML
            </a>
          </div>
          
          {/* Individual Sitemap Downloads */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">Download Individual Sitemaps</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button
                onClick={() => {
                  downloadMainSitemap();
                }}
                className="bg-white border border-slate-300 text-slate-700 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-sm"
              >
                Main Pages
              </button>
              <button
                onClick={() => {
                  downloadStatesSitemap();
                }}
                className="bg-white border border-slate-300 text-slate-700 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-sm"
              >
                State Pages
              </button>
              <button
                onClick={() => {
                  downloadBlogSitemap();
                }}
                className="bg-white border border-slate-300 text-slate-700 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-sm"
              >
                Blog Posts
              </button>
              <button
                onClick={() => {
                  downloadGlossarySitemap();
                }}
                className="bg-white border border-slate-300 text-slate-700 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-sm"
              >
                Glossary
              </button>
              <button
                onClick={() => {
                  downloadVideosSitemap();
                }}
                className="bg-white border border-slate-300 text-slate-700 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-sm"
              >
                Videos
              </button>
              <button
                onClick={() => {
                  downloadSpecialtySitemap();
                }}
                className="bg-white border border-slate-300 text-slate-700 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-sm"
              >
                Specialty Pages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Page Categories */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Categories</h2>
            <p className="text-xl text-slate-600">What's included in our sitemap</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">State Pages</h3>
              <p className="text-slate-600 text-sm mb-3">
                Individual pages for each state we serve with localized content and agent information.
              </p>
              <div className="text-xs text-slate-500">
                Priority: 0.8 | Frequency: Weekly
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Blog Posts</h3>
              <p className="text-slate-600 text-sm mb-3">
                Educational articles about high-risk insurance, FAIR Plans, and coverage options.
              </p>
              <div className="text-xs text-slate-500">
                Priority: 0.6 | Frequency: Monthly
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Glossary Terms</h3>
              <p className="text-slate-600 text-sm mb-3">
                Comprehensive definitions of insurance terms and concepts for better understanding.
              </p>
              <div className="text-xs text-slate-500">
                Priority: 0.5 | Frequency: Monthly
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Video Content</h3>
              <p className="text-slate-600 text-sm mb-3">
                Educational videos covering high-risk insurance topics and guidance.
              </p>
              <div className="text-xs text-slate-500">
                Priority: 0.6 | Frequency: Monthly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Info */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Technical Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Sitemap Details</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• XML format compliant with sitemaps.org protocol</li>
                  <li>• Includes lastmod, changefreq, and priority</li>
                  <li>• Automatically generated from site data</li>
                  <li>• Updated dynamically as content changes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">SEO Benefits</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Helps search engines discover all pages</li>
                  <li>• Indicates page importance and update frequency</li>
                  <li>• Improves crawling efficiency</li>
                  <li>• Supports better indexation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}