module.exports = ({ env }) => ({
  url: env("STRAPI_URL"),
  port: env.int("PORT", 1337),
});
