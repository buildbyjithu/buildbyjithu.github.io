// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      page_title: document.title,
      page_location: window.location.href
    });
  `;
  document.head.appendChild(script2);

  console.log('Google Analytics initialized with ID:', measurementId);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url,
    page_title: title || document.title
  });
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track specific portfolio interactions
export const trackPortfolioEvent = (eventName: string, sectionName: string, additionalData?: any) => {
  trackEvent(eventName, 'Portfolio', sectionName, additionalData?.value);
  
  // Also send custom event with more details
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'portfolio_interaction', {
      custom_parameter_1: eventName,
      custom_parameter_2: sectionName,
      ...additionalData
    });
  }
};

// Track button clicks and interactions
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'Button', `${buttonName} - ${location}`);
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  trackEvent('view', 'Section', sectionName);
};

// Track contact form submissions
export const trackContactForm = (action: string) => {
  trackEvent(action, 'Contact Form', action);
};

// Track external link clicks
export const trackExternalLink = (url: string, linkName: string) => {
  trackEvent('click', 'External Link', `${linkName} - ${url}`);
};

// Track resume downloads
export const trackResumeDownload = () => {
  trackEvent('download', 'Resume', 'PDF Download');
};