export interface State {
  code: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  tags: string[];
  published: boolean;
  featuredImage?: string;
  metaDescription: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  slug: string;
  definition: string;
  content: string;
  category: string;
  relatedTerms: string[];
  metaDescription: string;
  publishedAt?: string;
  updatedAt?: string;
}

export interface VideoPage {
  id: string;
  title: string;
  slug: string;
  description: string;
  videoId: string;
  duration: string;
  category: string;
  tags: string[];
  metaDescription: string;
  publishedAt: string;
  transcript: string;
  relatedVideos: string[];
}

export interface StatePost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

export interface StateImage {
  id: string;
  url: string;
  caption: string;
  alt: string;
}