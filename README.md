# Sample Strapi Application

A sample Strapi application we can deploy to DigitalOcean's App Platform.

## Instructions to Deploy to App Platform

1. Add the `pg` module
1. Setup production database and server settings in `config/env/production`
1. Deploy to App Platform
  1. Add a database when creating
  1. Add your environment variables

### Sample Environment Variables

This assumes that you added in a database component and named it **db**.

| Keys  | Values  |
|-----------|------------|
| APP_URL  | ${APP_URL}  |
| DATABASE_HOST | ${db.HOSTNAME}  |
| DATABASE_PORT  | ${db.PORT}  |
| DATABASE_NAME  | ${db.DATABASE}  |
| DATABASE_USERNAME  | ${db.USERNAME}  |
| DATABASE_PASSWORD  | ${db.PASSWORD}  |
