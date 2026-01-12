import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWTPayload } from './types';

// Extend Express Request to include user
declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization'];

  if (!token) {
    res.status(403).json({ error: 'No token provided' });
    return;
  }

  const bearerToken = token.split(' ')[1];

  if (!bearerToken) {
    res.status(403).json({ error: 'Invalid token format' });
    return;
  }

  try {
    const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET!) as JWTPayload;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
