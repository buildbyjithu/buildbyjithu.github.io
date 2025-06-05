// SEO utility functions for dynamic meta tag management
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export const updatePageSEO = (seoData: SEOData) => {
  // Update title
  document.title = seoData.title;
  
  // Update meta description
  updateMetaTag('name', 'description', seoData.description);
  
  // Update keywords if provided
  if (seoData.keywords) {
    updateMetaTag('name', 'keywords', seoData.keywords);
  }
  
  // Update Open Graph tags
  updateMetaTag('property', 'og:title', seoData.title);
  updateMetaTag('property', 'og:description', seoData.description);
  
  if (seoData.ogImage) {
    updateMetaTag('property', 'og:image', seoData.ogImage);
  }
  
  // Update Twitter Card tags
  updateMetaTag('name', 'twitter:title', seoData.title);
  updateMetaTag('name', 'twitter:description', seoData.description);
  
  if (seoData.ogImage) {
    updateMetaTag('name', 'twitter:image', seoData.ogImage);
  }
  
  // Update canonical URL if provided
  if (seoData.canonical) {
    updateCanonicalLink(seoData.canonical);
  }
};

const updateMetaTag = (attribute: string, attributeValue: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

const updateCanonicalLink = (href: string) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', href);
};

// SEO data for different sections
export const seoData = {
  home: {
    title: 'Jithendranath Gupta Yenduri - Software Architect & Full-Stack Developer',
    description: 'Software Architect with 11+ years of experience building scalable applications, cloud security solutions, and 0-1 products. Expert in Node.js, React, AWS, and startup engineering.',
    keywords: 'software architect, full stack developer, cloud security, node.js, react, aws, startup engineer, jithendranath gupta, buildbyjithu',
    canonical: 'https://portfolio.jithendranath.dev/'
  },
  about: {
    title: 'About Jithendranath Gupta Yenduri - Software Architecture Experience',
    description: 'Learn about my 11+ years of experience in software architecture, full-stack development, cloud security, and building scalable enterprise applications.',
    keywords: 'about jithendranath gupta, software architect experience, full stack developer background, cloud security expert',
    canonical: 'https://portfolio.jithendranath.dev/#about'
  },
  projects: {
    title: 'Software Architecture Projects - Cloud Security & Full-Stack Development',
    description: 'Explore my portfolio of software architecture projects including cloud risk discovery, detection engines, authentication systems, and scalable applications.',
    keywords: 'software architecture projects, cloud security projects, full stack development portfolio, scalable applications',
    canonical: 'https://portfolio.jithendranath.dev/#projects'
  },
  skills: {
    title: 'Technical Skills - Node.js, React, AWS, Cloud Security Expert',
    description: 'Comprehensive overview of my technical skills including Node.js, React, AWS, cloud security, graph databases, and modern development tools.',
    keywords: 'node.js expert, react developer, aws architect, cloud security skills, graph databases, software architecture skills',
    canonical: 'https://portfolio.jithendranath.dev/#skills'
  },
  contact: {
    title: 'Contact Jithendranath Gupta Yenduri - Software Architecture Consultant',
    description: 'Get in touch for software architecture consulting, full-stack development projects, or cloud security solutions. Available for consulting and full-time opportunities.',
    keywords: 'contact software architect, hire full stack developer, cloud security consultant, software architecture consulting',
    canonical: 'https://portfolio.jithendranath.dev/#contact'
  }
};