import { Body, Controller, Get, Post, Req, UseGuards, Res} from '@nestjs/common';
import { AuthService } from './auth.service'
import { AuthDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { FortyTwoStrategy } from './42.strategy';


@Controller('auth')

export class AuthController {
    constructor(private authService: AuthService){}
    @Post('signup')
    signup(@Body() dto: AuthDto){
        console.log({
            dto,
        });
        return this.authService.signup(dto);
    }
    @Post('signin')
    signin(@Body() dto: AuthDto){
        return this.authService.signin(dto);
    }
    @Get('42')
    @UseGuards(AuthGuard('42'))
    async fortyTwoAuth(
        @Req() req: Request,
        @Res() res: Response,
      ) {

    }
    
    @Get('42/callback')
    @UseGuards(AuthGuard('42'))
    async fortyTwoAuthCallback(@Req() req: Request): Promise<any> {
      // Handle the authenticated user here
    }

}
