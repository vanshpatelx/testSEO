import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Tag, Search, Filter } from 'lucide-react';
import { VIDEO_PAGES, getAllCategories } from '../data/videoPages';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';

export default function VideoLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...getAllCategories()];
  
  const filteredVideos = useMemo(() => {
    let videos = VIDEO_PAGES;
    
    if (selectedCategory !== 'All') {
      videos = videos.filter(video => video.category === selectedCategory);
    }
    
    if (searchTerm) {
      videos = videos.filter(video => 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return videos;
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <SEOHead 
        title="High-Risk Insurance Video Library | HighRiskHomeowners.com"
        description="Watch expert videos on high-risk home insurance topics including FAIR Plans, nonrenewals, coastal properties, and finding coverage."
        canonical="https://highriskhomeowners.com/video-library"
      />
      
      <Breadcrumb items={[{ label: 'Video Library' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-20 w-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Play className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              High-Risk Insurance
              <span className="block text-primary">Video Library</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert guidance on high-risk home insurance topics including FAIR Plans, 
              nonrenewals, coastal properties, and finding the right coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-slate-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
                >
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-slate-900 relative overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="h-16 w-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-slate-900 ml-1" />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm font-medium">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {video.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="h-3 w-3" />
                        {video.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3 text-sm">
                      {video.description}
                    </p>
                    
                    {video.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {video.tags.slice(0, 3).map(tag => (
                          <span 
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                          >
                            <Tag className="h-2 w-2" />
                            {tag}
                          </span>
                        ))}
                        {video.tags.length > 3 && (
                          <span className="text-xs text-slate-500">
                            +{video.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No videos found matching your search.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-slate-600">Find videos organized by topic</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.filter(cat => cat !== 'All').map((category) => {
              const videoCount = VIDEO_PAGES.filter(video => video.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all text-left group"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {category}
                  </h3>
                  <p className="text-sm text-slate-600">{videoCount} videos</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Personal Guidance?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            While our videos provide valuable information, sometimes you need personalized help. 
            Get connected with specialists who understand your specific situation.
          </p>
          <Link 
            to="/states"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            <Play className="h-5 w-5" />
            Find a Specialist
          </Link>
        </div>
      </section>
    </>
  );
}