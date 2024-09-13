import cors, { CorsOptions } from 'cors';

// Define allowed origins
const allowedOrigins: string[] = [
  process.env.SERVER_URL || 'http://localhost:3000',
];

// Configure CORS options
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    // Allow requests without an origin (e.g., mobile apps, curl, etc)
    if (!origin) {
      callback(null, true); // Allow the request
      return;
    }
    
    // Check if the provided origin is allowed
    if (allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Deny the request
    }
  }
};

export default cors(corsOptions);
