import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import config from './config/keys';
import { AuthService } from './auth/auth.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { ExpenseModule } from './expenses/expense.module';


@Module({
  imports: [ MongooseModule.forRoot(config.mongoURI),WinstonModule.forRoot({
    // options
  }), 
  WinstonModule.forRoot({
    exitOnError: false,
    format: winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.printf(msg => {
      return `${msg.timestamp} [${msg.level}] - ${msg.message}`;
    })),
    transports: [new winston.transports.Console({ level: "debug" })], // alert > error > warning > notice > info > debug
  }),
  AuthModule, UsersModule, ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
