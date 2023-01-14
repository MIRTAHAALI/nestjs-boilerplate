import { Controller, Get, UseGuards, Post, Request, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.gaurd';
import { ApiTags } from '@nestjs/swagger';
import { DeviceDto } from './auth/dto/device.dto';

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}
  //@UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() body: DeviceDto) {
    return this.authService.login(body);
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   console.log(req.body.user);
  //   return req.user;
  // }
}
