import knex from 'knex';
import knexConfig from './knexfile';

// Define your environment variable
const environment: 'development' | 'production' | 'testing' = 'development';

// Create a Knex instance with the configuration for the specified environment
const db = knex(knexConfig[environment]);

export default db;