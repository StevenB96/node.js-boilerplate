# StevenBerrisford.com
This repository is based on React/Express boilerplate code. The sections below relate to the configuration and operation of the project.

## Typescript execution
npx ts-node ./bin/www

## E.g. .env configuration
NODE_ENV=development
DB_ENV=development

## E.g. .env.development configuration
SERVER_URL=http://localhost:3000
SERVER_PORT=3000
ALLOWED_ORIGINS=x,y

## E.g. .env.production configuration
SERVER_URL=http://stevenberrisford.com
SERVER_PORT=8008
ALLOWED_ORIGINS=x,y

## Knex operations
- npx knex migrate:latest --knexfile ./config/knexfile.js --env main
- npx knex migrate:make [x] --knexfile ./config/knexfile.js --env main
- npx knex seed:make [x] --knexfile ./config/knexfile.js --env main
- npx knex seed:run --knexfile ./config/knexfile.js --env main

## Pm2 operations
- pm2 list
- pm2 restart app_name/pid
- pm2 reload app_name/pid
- pm2 stop app_name/pid
- pm2 delete app_name/pid