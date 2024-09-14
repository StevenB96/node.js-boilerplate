import cors, { CorsOptions } from 'cors';

// Define allowed origins
const allowedOrigins: string[] = [
  process.env.SERVER_URL || 'http://localhost:3000',
];

// Configure CORS options
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

export default cors(corsOptions);
