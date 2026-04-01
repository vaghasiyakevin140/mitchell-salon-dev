module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  seo: {
    enabled: true,
  },
  "rest-cache": {
    enabled: true,
    config: {
      ttl: 120,
    },
  },
  redirects: {
    enabled: true,
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::home.home",
          published: {
            url: env("FRONTEND_URL") || "http://localhost:3000",
          },
        },
        {
          uid: "api::page.page",
          draft: {
            url: env("FRONTEND_URL") || "http://localhost:3000/api/preview",
            query: {
              type: "page",
              slug: "{slug}",
            },
          },
          published: {
            url: `${env("FRONTEND_URL") || "http://localhost:3000"}/{slug}`,
          },
        },
        {
          uid: "api::post.post",
          draft: {
            url: env("FRONTEND_URL") || "http://localhost:3000/api/preview",
            query: {
              type: "post",
              slug: "{slug}",
            },
          },
          published: {
            url: `${
              env("FRONTEND_URL") || "http://localhost:3000"
            }/blog/{slug}`,
          },
        },
      ],
    },
  },
  // ...
});
