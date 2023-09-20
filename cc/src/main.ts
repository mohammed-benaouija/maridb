import {NestFactory} from '@nestjs/core'
import {AppModule}  from './app.module'
import { ValidationPipe } from '@nestjs/common';
import *as  cookieParser from 'cookie-parser';
const cors = require('cors');




async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true
    })
    app.useGlobalPipes( new ValidationPipe({
        whitelist:true,
    }));
    // app.use(cors());
    await app.listen(3333);    
}
bootstrap(); 


