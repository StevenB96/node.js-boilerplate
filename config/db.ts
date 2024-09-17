/**
 * Module dependencies.
 */
import knex from 'knex';
import knexConfig from './knexfile';

// Define your database environment variable.
const environment: string = 'developement';

// Create a Knex instance with the configuration.
const db = knex(knexConfig[environment]);

export default db;