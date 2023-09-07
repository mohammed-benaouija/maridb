// src/auth/42.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Strategy , VerifyCallback} from 'passport-42';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
  constructor() {
    super({
      clientID: 'u-s4t2ud-e9b9f639acf5e3e698308785599b9e071818393fbeace281d5b697ed69d4e9b0',
      clientSecret: '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',
      callbackURL: 'http://localhost:3333/auth/42/callback',
    });
}

async validate(accessToken: string, refreshToken: string, profile: any  ,done: VerifyCallback): Promise<any> {
    // Implement user creation or retrieval logic here
    // Return the user or null if the user is not found
    // const  {name, emails}= profile;
    const user = {
        firstName: profile.name.givenName,
        email: profile.emails[0].value,
        lastName: profile.name.familyName,
        avatar: profile._json.image.link,
        username: profile.username,
      };
      const payload = {
        user,
        accessToken,
      };

    done(null, user);
  }
}
