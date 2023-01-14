import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
	
	@ApiProperty({ example: 'Taha', description: 'User Name' })
	@IsNotEmpty()
	readonly name: string;

	@ApiProperty({ example: 'superUser', description: 'User Type: superUser/Admin/Client' })
	@IsNotEmpty()
	readonly type: string;
	
	@ApiProperty({ example: 'abc123', description: 'User Password' })
	@IsNotEmpty()
	readonly password: string;
  }
  