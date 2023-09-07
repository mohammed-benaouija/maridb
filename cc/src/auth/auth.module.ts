import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service'
import { FortyTwoStrategy } from './42.strategy';

@Module({  
    imports: [
      PassportModule.register({ defaultStrategy: '42' }),
    ],
    controllers: [AuthController],
    providers:[AuthService,FortyTwoStrategy],
})
export class AuthModule {}
// src/auth/auth.module.ts




