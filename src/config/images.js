/**
 * Centralized Visual Asset Configuration
 * 
 * Edit the image paths in this file to update the website's visual content.
 * If any image URL is left blank or fails to load, a premium CSS/SVG placeholder will be displayed instead.
 */

export const imagesConfig = {
  // Homepage Visual Assets
  home: {
    // Hero Slider Background Images
    hero: {
      fmcg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop',
      warehousing: '/images/warehouse.png',
      logistics: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop',
      retail: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop',
    },
    // Market Coverage Category Images
    coverage: {
      hypermarkets: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600',
      cooperatives: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600',
      groceries: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=600',
      specialty: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600',
      wholesale: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=600',
      online: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600',
    }
  },

  // Products Page Visual Assets
  products: {
    dryfood: {
      mainImg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=600',
        'https://images.unsplash.com/photo-1516594798240-99a48260d72c?q=80&w=600'
      ]
    },
    cosmetics: {
      mainImg: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600'
      ]
    },
    bodycare: {
      mainImg: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600',
        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600'
      ]
    },
    electronics: {
      mainImg: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=600',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600'
      ]
    },
    otc: {
      mainImg: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=600',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600'
      ]
    },
    shoecare: {
      mainImg: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600',
        'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=600'
      ]
    },
    household: {
      mainImg: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800',
      gallery: [
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=600',
        'https://images.unsplash.com/photo-1550009158-9ebf6d170381?q=80&w=600'
      ]
    }
  }
};

/**
 * Helper component or hook to handle image fallbacks elegantly.
 * Displays a premium styled gradient placeholder when the image fails to load or is empty.
 */
export const getFallbackPlaceholder = (label = 'HSHG') => {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230F2D40"/><stop offset="100%" stop-color="%231787C8"/></linearGradient></defs><rect width="800" height="600" fill="url(%23g)"/><text x="50%" y="50%" font-family="sans-serif" font-weight="bold" font-size="36" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle">${encodeURIComponent(label)}</text></svg>`;
};
