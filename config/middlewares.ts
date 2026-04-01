module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'", 
            'data:', 
            'blob:', 
            '*.strapiapp.com', 
            '*.media.strapiapp.com'
          ],
          'media-src': [
            "'self'", 
            'data:', 
            'blob:', 
            '*.strapiapp.com', 
            '*.media.strapiapp.com'
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formidable: {
        maxFileSize: 250 * 1024 * 1024
      }
    }
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
