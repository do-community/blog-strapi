module.exports = ({ env }) => ({
  url: env("APP_URL") + "/api",
  admin: {
    url: env("APP_URL") + "/api/admin",
  },
});
