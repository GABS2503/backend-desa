export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',

  {
    name: 'strapi::cors',
    config: {
      enabled: true,

      origin: ({ origin }) => {
        const allowedOrigins = [
          'https://webdesabetelensatu-kgcj47wda-gabs2503s-projects.vercel.app',
        ];

        // allow server-side & tools like curl/postman
        if (!origin) return origin;

        if (allowedOrigins.includes(origin)) {
          return origin;
        }

        return false;
      },

      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
