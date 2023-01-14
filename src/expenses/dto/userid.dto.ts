import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UserIdDto {
	
	@ApiProperty({ example: '123sasd', description: 'User ID' })
	@IsNotEmpty()
	readonly userid: string;

	
  }
  