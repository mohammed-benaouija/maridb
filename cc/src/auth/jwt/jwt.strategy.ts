// jwt.strategy.ts

// jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface'; // Create this interface according to your needs
import { AuthService } from '../auth.service'; // Your authentication service
import { use } from 'passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
      console.log("eeeee");
      super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: process.env.JWT_SECRET, // Use your JWT secret key from environment variable
        });
    }
    
    async validate(payload: JwtPayload) {
        console.log(payload);
    const user = await this.authService.validateUser(payload); // Implement this method in your AuthService
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
