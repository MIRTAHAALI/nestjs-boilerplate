import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interface/user.interface';
 import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
 import { Logger } from 'winston';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';
import { userInfo } from 'os';
import { ApiBasicAuth, ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserNameDto } from './dto/user-name.dto';

@ApiTags('Users')
@Controller('Users')
export class UsersController {
  constructor(
    private readonly UsersService: UsersService,
     @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get All Users Data' })
  @UseGuards(JwtAuthGuard)
  @Post('getAllUser')
  async findAll(@Body() createItemDto: UserNameDto): Promise<any> {
     this.logger.log('Calling findAll()', UsersController.name);

    const user: User = (await this.UsersService.findOne(
      createItemDto.name,
    )) as any;
    if (!user)
      return {
        success: false,
        error: 'User not found',
      };
    if (user.type == 'superUser')
    {
      return this.UsersService.findAll();
    }
    else
    {
      return {
        message: 'You are not Super User'
      }
    }
    
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get User By ID' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id): Promise<User> {
    return this.UsersService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Sign In' })
  @UseGuards(JwtAuthGuard)
  @Post('signin')
  async singin(@Body() createItemDto: CreateUserDto): Promise<any> {
    const user: User = (await this.UsersService.findOne(
      createItemDto.name,
    )) as any;
    if (!user)
      return {
        success: false,
        error: 'User not found',
      };
    if (createItemDto.password == user.password) {
      return {
        success: true,
        error: '',
      };
    } else {
      return {
        success: false,
        error: 'Password Incorrect',
      };
    }
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Sign Up' })
  @UseGuards(JwtAuthGuard)
  @Post('signup')
  create(@Body() createItemDto: CreateUserDto): Promise<User> {
    this.logger.log('Calling create()', UsersController.name);
    return this.UsersService.create(createItemDto);
  }

  // @Delete(':id')
  // delete(@Param('id') id): Promise<User> {
  //   return this.UsersService.delete(id);
  // }

  // @Put(':id')
  // update(@Body() updateItemDto: CreateUserDto, @Param('id') id): Promise<User> {
  //   return this.UsersService.update(id, updateItemDto);
  // }
}
