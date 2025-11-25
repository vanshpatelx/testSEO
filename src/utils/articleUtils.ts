// Extract headings from HTML article content for Table of Contents
export const extractHeadings = (htmlContent: string): Array<{ id: string; text: string; level: number }> => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const headings = doc.querySelectorAll('h2, h3');
  
  return Array.from(headings).map((heading, index) => {
    const text = heading.textContent || '';
    const id = text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    return {
      id: id || `heading-${index}`,
      text,
      level: parseInt(heading.tagName.charAt(1))
    };
  });
};

// Add IDs to headings in HTML content
export const addHeadingIds = (htmlContent: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const headings = doc.querySelectorAll('h2, h3');
  
  headings.forEach((heading, index) => {
    const text = heading.textContent || '';
    const id = text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    heading.id = id || `heading-${index}`;
  });
  
  return doc.body.innerHTML;
};

// Calculate reading time based on word count
export const calculateReadingTime = (htmlContent: string): number => {
  const text = htmlContent.replace(/<[^>]*>/g, ' ');
  const words = text.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  return Math.ceil(words / wordsPerMinute);
};

// Format date for display
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};
