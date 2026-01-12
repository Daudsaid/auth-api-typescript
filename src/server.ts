import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

import authRoutes from './authRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req: Request, res: Response): void => {
  res.json({ message: 'Auth API with TypeScript is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
