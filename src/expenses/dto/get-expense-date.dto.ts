import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';
export class GetExpenseByDateDto {

  
  @IsNotEmpty()
  @ApiProperty({ example: '233m212', description: 'User ID' })
  readonly userid: string;

  @ApiProperty({ example: 11, description: 'Month number 11 = Nov' })
  readonly month: number;

  @ApiProperty({ example: 2, description: 'Week 2' })
  readonly week: number;

  today: boolean;

  @ApiProperty({ example: 2022, description: 'Year' })
  @IsNotEmpty()
  readonly year: number;
//   @IsNotEmpty()
//   @IsDateString()
//   readonly createdAt: Date;

}
