import dotenv from 'dotenv';
import path from 'path';

/**
 * Set env variables for process.
 */

const define_env = (baseDir: string) => {
  // Define the directory containing the .env file
  const envDir = path.resolve(__dirname, baseDir);

  // Specify the paths to the .env files
  const envFilePath = path.join(envDir, '.env');

  dotenv.config({ path: envFilePath });

  const envEnvironmentFilePath = path.join(envDir, `.env.${process.env.NODE_ENV || 'development'}`);

  // Load environment variables from the .env files
  dotenv.config({ path: envEnvironmentFilePath });
}

export default define_env;