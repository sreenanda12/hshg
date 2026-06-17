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
      fmcg: '/images/pages/maeda_in_coop_.png',
      warehousing: '/images/warehouse.png',
      logistics: '/images/pages/distribution_cars.png',
      retail: '/images/pages/hshg_home_page_.png',
    },
    // Market Coverage Category Images
    coverage: {
      hypermarkets: '/images/pages/maeda_in_coop_.png',
      cooperatives: '/images/pages/market_coverage.png',
      groceries: '/images/pages/maeda_in_coop_.png',
      specialty: '/images/pages/about_us_.png',
      wholesale: '/images/pages/distribution_cars.png',
      online: '/images/pages/retail_home_page_.png',
    }
  },

  // Products Page Visual Assets
  products: {
    dryfood: {
      mainImg: '/images/products/maeda_products_.png',
      gallery: [
        '/images/products/maeda_calrose_rice.png',
        '/images/products/maed_basmati_rice10kg.png'
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
      mainImg: '/images/mebo.png',
      gallery: [
        '/images/mebo_scar.png',
        '/images/julphar_logo_vector.png'
      ]
    },
    shoecare: {
      mainImg: '/images/products/smart_active_.png',
      gallery: [
        '/images/products/smart_elite_cream_polish_black.png',
        '/images/products/smart_extra_size_instant_sponge.png'
      ]
    },
    household: {
      mainImg: '/images/products/smart_gel_air_freshenerlemon_breeze.png',
      gallery: [
        '/images/products/smart_gel_air_freshenerrchamomille.png',
        '/images/products/smart_herbal_cleaner.png'
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
