/**
 * Module dependencies.
 */
import path from 'path';

const baseDirectory = path.join(__dirname, '..');
const dbDirectory = path.join(baseDirectory, 'db');
const migrationsDirectory = path.join(baseDirectory, 'migrations');
const seedsDirectory = path.join(baseDirectory, 'seeds');

/**
 * Set knex configuration for the database.
 */
const knexConfiguration = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.join(dbDirectory, 'sqlite3.db')
        },
        useNullAsDefault: true,
        migrations: {
            directory: migrationsDirectory
        },
        seeds: {
            directory: seedsDirectory
        }
    },
    production: {
        client: 'postgresql',
        connection: {
            host: 'your-rds-host',
            database: 'your-database-name',
            user: 'your-username',
            password: 'your-password'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: migrationsDirectory
        },
        seeds: {
            directory: seedsDirectory
        }
    }
};

export default knexConfiguration;