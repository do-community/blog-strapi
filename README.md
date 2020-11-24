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
| STRAPI_URL    | ${APP_URL}/api        |
| NODE_ENV      | "production"          |
| DATABASE_URL  | ${db.DATABASE_URL}    |
| DATABASE_HOST       | ${db.HOSTNAME}        |
| DATABASE_PORT       | ${db.PORT}            |
| DATABASE_NAME   | ${db.DATABASE}        |
| DATABASE_USERNAME   | ${db.USERNAME}        |
| DATABASE_PASSWORD   | ${db.PASSWORD}            |
