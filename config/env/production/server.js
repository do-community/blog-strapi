module.exports = ({ env }) => ({
  url: env("STRAPI_URL"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "cf4351f3b80262a4f196748fc49b9b91"),
    },
  },
});
