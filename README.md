# Sample Strapi Application

A sample Strapi application we can deploy to DigitalOcean's App Platform.

## Instructions to Deploy to App Platform

1. Add the `pg` for database connections: `yarn add pg`
1. Add `"node": ">=10.0.0 <13",` to your package.json in the `engines` property (Strapi doesn't support Node 14 yet)
1. Setup production server settings in `config/env/production/server.js`
1. Setup production database settings in `config/env/production/database.js`
1. Deploy to App Platform
1. Add a database when creating
1. Add your environment variables (example below)

## Strapi Setup

1. Create an admin account
1. Add custom types
1. Configure roles and permissions for new custom types

### Sample Environment Variables

This assumes that you added in a database component and named it **db**.

| Keys              | Values             |
| ----------------- | ------------------ |
| NODE_ENV          | production         |
| STRAPI_URL        | ${APP_URL}/api     |
| DATABASE_HOST     | ${db.HOSTNAME}     |
| DATABASE_PORT     | ${db.PORT}         |
| DATABASE_NAME     | ${db.DATABASE}     |
| DATABASE_USERNAME | ${db.USERNAME}     |
| DATABASE_PASSWORD | ${db.PASSWORD}     |
