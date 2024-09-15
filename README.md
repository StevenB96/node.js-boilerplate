# React/Express Boilerplate
This repository is React/Express boilerplate code, to be used as the basis for multiple projects. The sections below relate to the configuration and operation of the project.

## Typescript execution.
```
- npx ts-node ./bin/www
```

## Example .env configuration.
```
NODE_ENV=development
DB_ENV=development
```

## Example .env.development configuration.
```
SERVER_URL=http://localhost:3000
SERVER_PORT=3000
ALLOWED_ORIGINS=x,y
```

## Example .env.production configuration.
```
SERVER_URL=http://stevenberrisford.com
SERVER_PORT=8008
ALLOWED_ORIGINS=x,y
```

## Knex operations.
```
- npx knex migrate:latest --knexfile ./config/knexfile.js --env main
- npx knex migrate:make [x] --knexfile ./config/knexfile.js --env main
- npx knex seed:make [x] --knexfile ./config/knexfile.js --env main
- npx knex seed:run --knexfile ./config/knexfile.js --env main
```

## Pm2 operations.
```
- pm2 list
- pm2 restart app_name/pid
- pm2 reload app_name/pid
- pm2 stop app_name/pid
- pm2 delete app_name/pid
```

## Code snippets.
### Example knexfile configuration.
```
developement: {
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '..', 'db', 'sqlite3.db')
  },
  useNullAsDefault: true,
  migrations: {
    directory: path.join(__dirname, '..', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, '..', 'seeds')
  }
}
```
### Example migration file.
```
const define_env = require('../config/define_env');

/**
 * Set env variables for app.
 */
define_env('..');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('x', function(table) {
    table.increments('id').primary();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('x');
};
```
### Example seed file.
```
const define_env = require('../config/define_env');

/**
 * Set env variables for app.
 */
define_env('..');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes all existing entries
  return knex('x')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('x').insert([
        {},
      ]
      );
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.rollback = async function(knex) {
  await knex('x').truncate();
};
```
### Example route.
```
// Serve React app
const reactBuildDir = path.join(__dirname, '..', 'react_app', 'build');
router.use(express.static(reactBuildDir));
router.get('/', async (req, res, next) => {
  try {
    router.get('/app', (req, res) => {
      res.sendFile(path.join(reactBuildDir, 'index.html'));
    });
  } catch (error) {
    next(error);
  }
});
```