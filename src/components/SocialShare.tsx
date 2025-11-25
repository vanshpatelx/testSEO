import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    if (platform === 'email') {
      window.location.href = shareLinks.email;
    } else {
      window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-slate-900">Share This Article</h3>
      </div>
      
      <div className="flex gap-3">
        <button
          onClick={() => handleShare('facebook')}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
          <span className="text-sm font-medium">Facebook</span>
        </button>
        
        <button
          onClick={() => handleShare('twitter')}
          className="flex items-center justify-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
          <span className="text-sm font-medium">Twitter</span>
        </button>
        
        <button
          onClick={() => handleShare('linkedin')}
          className="flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
          <span className="text-sm font-medium">LinkedIn</span>
        </button>
        
        <button
          onClick={() => handleShare('email')}
          className="flex items-center justify-center gap-2 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
          aria-label="Share via Email"
        >
          <Mail className="h-4 w-4" />
          <span className="text-sm font-medium">Email</span>
        </button>
      </div>
    </div>
  );
}
