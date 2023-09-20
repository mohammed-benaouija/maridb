import { Injectable } from "@nestjs/common";
// import { PrismaClientKnownRequestError } from '@prisma/client';
import { PrismaClient, Prisma, User } from '@prisma/client';
// import { Prisma, User } from '@prisma/client';
import { ForbiddenException } from '@nestjs/common';
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';

@Injectable()
export class AuthService{
  [x: string]: any;
  constructor(private readonly prisma: PrismaClient){}
  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
  
  async findOne(condition: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({
      where: condition,
    });
  }
  async signup(dto:AuthDto){
        //generate the password hash
        try{
          
          const hash = await argon.hash(dto.password);
          //save the new user in the db
          const user = await this.prisma.user.create({
            data: {
              email: dto.email,
              // createdAt: new Date(),
              username: dto.username, // Replace with the desired username
              lastName: dto.lastName, // Replace with the user's last name
              hash, // Replace with the actual password hash
            },
            });
            delete user.hash;
          //return the saved user
          return (user) ;
        } catch(e){
          if(
            e instanceof 
            Prisma.PrismaClientKnownRequestError
            ) {
            if(e.code === 'P2002'){
              throw new ForbiddenException(
                'Credentials taken',
                );
              
            };
          }
          throw e;
        }
        // return {msg: 'I have signed in'}
    }

    async signin(dto:AuthDto){
      // return {msg: 'I have signed in'}
      const user = 
      await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });
      if(!user)
          throw new ForbiddenException(
         'Credentials taken',
         );
      //compare password
      const pwMathes = await argon.verify(
        user.hash,
        dto.password,

      );
      //if password incorrect throw expception
      if(!pwMathes)
      throw new ForbiddenException(
        'Credentials taken',
        );
        delete user.hash;
  
        return user
    }
    async login(requser)
    {
      const user = 
      await this.prisma.user.findUnique({
        where: {
          email: requser.email,
        },
      });
      if(user)
      return (user);
      const user1 = await this.prisma.user.create({
        data: {
          email: requser.email,
          // createdAt: new Date(),
          username: requser.username, // Replace with the desired username
          lastName: requser.lastName, // Replace with the user's last name
          firstName: requser.firstName,

          hash:"", // Replace with the actual password hash
        },
        });
        // delete user.hash;
      //return the saved user
      return user1;



    }
    
} 