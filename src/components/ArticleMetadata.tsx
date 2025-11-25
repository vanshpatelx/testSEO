import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { formatDate } from '../utils/articleUtils';

interface ArticleMetadataProps {
  lastModified: string;
  readingTime: number;
}

export default function ArticleMetadata({ lastModified, readingTime }: ArticleMetadataProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-slate-200">
      <div className="flex items-center gap-2 text-slate-600">
        <User className="h-4 w-4" />
        <span className="text-sm">HighRiskHomeowners.com Team</span>
      </div>
      
      <div className="flex items-center gap-2 text-slate-600">
        <Calendar className="h-4 w-4" />
        <span className="text-sm">Updated {formatDate(lastModified)}</span>
      </div>
      
      <div className="flex items-center gap-2 text-slate-600">
        <Clock className="h-4 w-4" />
        <span className="text-sm">{readingTime} min read</span>
      </div>
    </div>
  );
}
