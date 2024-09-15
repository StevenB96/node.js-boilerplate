import cors, { CorsOptions } from 'cors';
import define_env from '../config/define_env';

// Set env variables for app
define_env('..');

// Define allowed origins
const allowedOrigins: string[] = [
  ...(process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : []),
  process.env.SERVER_URL || 'http://localhost:3000',
];

const developmentEnviroment: boolean = process.env.NODE_ENV === 'development';

// Configure CORS options
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (developmentEnviroment || (origin && allowedOrigins.includes(origin))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Export CORS configuration
export default cors(corsOptions);