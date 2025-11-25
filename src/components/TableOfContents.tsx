import React, { useState } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Only show H2 headings to avoid overwhelming users
  const h2Headings = headings.filter(heading => heading.level === 2);
  
  if (h2Headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 sticky top-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-4"
      >
        <div className="flex items-center gap-2">
          <List className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-slate-900">Table of Contents</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-slate-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-500" />
        )}
      </button>
      
      {isOpen && (
        <nav>
          <ul className="space-y-2">
            {h2Headings.map((heading, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className="text-left w-full hover:text-blue-600 transition-colors text-slate-900 font-medium"
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
