import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UserNameDto {
	
	@ApiProperty({ example: 'Taha', description: 'User Name' })
	@IsNotEmpty()
	readonly name: string;
  }
  