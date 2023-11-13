// jwt.service.ts
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  private readonly secretKey = process.env.SECRET_KEY;

  generateToken(payload: any): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: '1h' });
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
