# Strapi + Next.js Blog Demo Application

This is a demo application for DigitalOcean's App Platform. It is the foundation for a blog built with [Strapi](https://strapi.io/) and [Next.js](https://nextjs.org/).

This is the backend repo for creating the Strapi API. The overall structure of the demo application is:

-   Strapi: Backend API ([Repo](https://github.com/do-community/blog-strapi))
-   Next.js: Frontend ([Repo](https://github.com/do-community/blog-next))

## Instructions to Deploy to App Platform

[![Deploy to DO](https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/do-community/blog-strapi/tree/master)

You can use the Deploy to DigitalOcean button to deploy this repo directly to App Platform.


### Important Notes on Deployment

-   Make sure you have all your environment variables in place
-   Add a dev database when deploying
-   Set HTTP Route to `/api`
-   Add the Next.js repo after deploying the Strapi App: https://github.com/do-community/blog-next

## Strapi Setup

1. Create an admin account
1. Add custom types
1. Configure roles and permissions for new custom types

## Environment Variables

The following environment variables are required:

| Name          | Value                 |
| ------------- | --------------------- |
| APP_URL       | ${APP_URL}            |
| APP_ENV       | "production"          |
| APP_KEY       | "insert-your-app-key" |
| DB_CONNECTION | "pgsql"               |
| DATABASE_URL  | ${db.DATABASE_URL}    |
| DB_HOST       | ${db.HOSTNAME}        |
| DB_PORT       | ${db.PORT}            |
| DB_DATABASE   | ${db.PASSWORD}        |
| DB_USERNAME   | ${db.USERNAME}        |
| DB_PASSWORD   | ${db.PORT}            |
