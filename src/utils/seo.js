// Sitemap data for SEO and navigation
export const siteMap = [
  {
    path: '/',
    title: 'Home',
    description: 'Welcome to Pooja Designer Boutique - Premium fashion and bridal wear',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/about',
    title: 'About Us',
    description: 'Learn about our story, mission, and commitment to quality fashion',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/fashion',
    title: 'Fashion Collections',
    description: 'Explore our diverse range of fashion collections and styles',
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/collection',
    title: 'Signature Collections',
    description: 'Discover our signature collections featuring luxury bridal wear and party specials',
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/shop',
    title: 'Shop Now',
    description: 'Browse and purchase from our latest fashion collections',
    priority: 0.9,
    changefreq: 'daily',
    lastmod: new Date().toISOString()
  },
  {
    path: '/blog',
    title: 'Fashion Blog',
    description: 'Read our latest fashion tips, trends, and style guides',
    priority: 0.7,
    changefreq: 'weekly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/contacts',
    title: 'Contact Us',
    description: 'Get in touch with us for inquiries, appointments, and custom orders',
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/shipping-info',
    title: 'Shipping Information',
    description: 'Learn about our shipping policies, delivery times, and costs',
    priority: 0.5,
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/size-guide',
    title: 'Size Guide',
    description: 'Find your perfect fit with our comprehensive size guide',
    priority: 0.5,
    changefreq: 'monthly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/login',
    title: 'Login',
    description: 'Login to your account to access exclusive features and orders',
    priority: 0.3,
    changefreq: 'yearly',
    lastmod: new Date().toISOString()
  },
  {
    path: '/signup',
    title: 'Sign Up',
    description: 'Create an account to enjoy personalized shopping and exclusive offers',
    priority: 0.3,
    changefreq: 'yearly',
    lastmod: new Date().toISOString()
  }
];

// Generate XML sitemap
export const generateXMLSitemap = (baseUrl = 'https://yourwebsite.com') => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${siteMap.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return xml;
};

// SEO keywords by category
export const seoKeywords = {
  primary: [
    'designer boutique',
    'bridal wear',
    'ethnic fashion',
    'custom tailoring',
    'Delhi fashion',
    'Indian designer clothes'
  ],
  secondary: [
    'lehenga',
    'saree',
    'anarkali suits',
    'party wear',
    'wedding dress',
    'traditional clothing',
    'fashion boutique Delhi',
    'bridal lehenga',
    'designer sarees',
    'ethnic suit sets'
  ],
  longTail: [
    'best bridal boutique in Delhi',
    'custom wedding lehenga Delhi',
    'designer ethnic wear online',
    'traditional Indian fashion boutique',
    'handcrafted bridal wear India',
    'luxury ethnic fashion Delhi'
  ]
};

// Page-specific meta data
export const pageMetaData = {
  home: {
    title: 'Pooja Designer Boutique - Premium Fashion & Bridal Wear',
    description: 'Discover exquisite designer clothing, bridal lehengas, ethnic wear and custom tailoring at Pooja Designer Boutique. Premium fashion for your special occasions.',
    keywords: [...seoKeywords.primary, ...seoKeywords.secondary.slice(0, 5)]
  },
  about: {
    title: 'About Us - Our Story & Mission',
    description: 'Learn about Pooja Designer Boutique\'s journey, mission, and commitment to creating beautiful, handcrafted fashion pieces that blend tradition with modern aesthetics.',
    keywords: ['about pooja designer', 'boutique story', 'fashion mission', 'handcrafted fashion', 'traditional clothing', 'Delhi boutique history']
  },
  fashion: {
    title: 'Fashion Collections - Ethnic & Modern Wear',
    description: 'Explore our diverse fashion collections featuring bridal couture, festive wear, elegant sarees, designer gowns and casual ethnic fashion for every occasion.',
    keywords: ['fashion collections', 'ethnic wear', 'bridal couture', 'designer gowns', 'festive collection', 'modern ethnic fashion']
  },
  collection: {
    title: 'Signature Collections - Luxury Bridal & Party Wear',
    description: 'Discover our signature collections featuring luxury bridal wear, party specials, casual elegance and seasonal trends. Handcrafted designs with premium fabrics.',
    keywords: ['signature collections', 'luxury bridal wear', 'party wear', 'seasonal fashion', 'premium fabrics', 'handcrafted designs']
  },
  shop: {
    title: 'Shop Designer Fashion - Lehengas, Sarees & More',
    description: 'Shop our latest collection of designer lehengas, bridal sarees, party gowns, kurta sets and ethnic wear. Premium quality with worldwide shipping.',
    keywords: ['shop designer fashion', 'buy lehenga online', 'designer sarees', 'party gowns', 'ethnic wear shopping', 'bridal wear online']
  },
  blog: {
    title: 'Fashion Blog - Style Tips, Trends & Guides',
    description: 'Read our fashion blog for the latest style tips, ethnic wear trends, styling guides and fashion inspiration for weddings, parties and special occasions.',
    keywords: ['fashion blog', 'style tips', 'ethnic wear trends', 'styling guides', 'fashion inspiration', 'wedding fashion tips']
  },
  contact: {
    title: 'Contact Us - Get in Touch for Custom Orders',
    description: 'Contact Pooja Designer Boutique for custom orders, appointments, and inquiries. Located in Delhi with worldwide shipping available.',
    keywords: ['contact boutique', 'custom orders', 'fashion appointments', 'Delhi boutique contact', 'designer consultation', 'tailoring services']
  }
};