import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class DeviceDto {
	
	@ApiProperty({ example: '21xc21x23c23c23', description: 'Unique Device ID' })
	@IsNotEmpty()
	readonly id: string;
  }
  