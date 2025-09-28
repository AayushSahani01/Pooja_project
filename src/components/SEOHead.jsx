import { useEffect } from 'react';

const SEOHead = ({ 
  title, 
  description, 
  keywords = [], 
  image = '/default-og-image.jpg',
  url = window.location.href,
  type = 'website',
  author = 'Pooja Designer Boutique',
  siteName = 'Pooja Designer Boutique'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | ${siteName}` : siteName;
    
    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    if (description) {
      updateMetaTag('description', description);
    }
    
    if (keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }
    
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    
    // Open Graph tags
    updateMetaTag('og:title', title || siteName, true);
    updateMetaTag('og:description', description || 'Premium designer boutique offering exclusive fashion collections, bridal wear, and custom tailoring services.', true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title || siteName);
    updateMetaTag('twitter:description', description || 'Premium designer boutique offering exclusive fashion collections, bridal wear, and custom tailoring services.');
    updateMetaTag('twitter:image', image);
    
    // Additional SEO tags
    updateMetaTag('theme-color', '#ef4444'); // Red theme color
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ClothingStore",
      "name": siteName,
      "description": description || "Premium designer boutique specializing in bridal wear, ethnic fashion, and custom tailoring services.",
      "url": url,
      "image": image,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "HOUSE NO 38, BLOCK 4, MOTI NAGAR",
        "addressLocality": "Ramesh Nagar",
        "addressRegion": "New Delhi",
        "postalCode": "110015",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6448",
        "longitude": "77.1798"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "20:00"
        }
      ],
      "telephone": "+91-9999999999",
      "priceRange": "₹₹₹",
      "servesCuisine": [],
      "paymentAccepted": ["Cash", "Credit Card", "UPI"],
      "currenciesAccepted": "INR"
    };
    
    // Add or update structured data
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
    
  }, [title, description, keywords, image, url, type, author, siteName]);

  return null; // This component doesn't render anything
};

export default SEOHead;