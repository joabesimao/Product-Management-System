import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: any, res: any, next: () => void) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Token não fornecido');
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const token = this.jwtService.verify(authHeader, {
        secret: process.env.JWT_SECRET || 'dev-secret',
      });
      if (!token) {
        // Exemplo simples
        throw new UnauthorizedException('Token inválido');
      }
    } catch (_) {
      throw new UnauthorizedException('Token inválido');
    }

    next();
  }
}
