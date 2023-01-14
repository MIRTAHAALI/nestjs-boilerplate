import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Contains } from 'class-validator';
export class CreateExpenseDto {
  
  @IsNotEmpty()
  @ApiProperty({ example: '233m212', description: 'User ID' })
  readonly userid: string;

  @ApiProperty({ example: 'income', description: 'Transaction Type: Income/Expense' })
  @IsNotEmpty()
  readonly type: string;

  @ApiProperty({ example: 231, description: 'Quantity' })
  @IsNotEmpty()
  readonly qty: number;

  @ApiProperty({ example: 99, description: 'Transaction Amount' })
  @IsNotEmpty()
  readonly amount: number;

  @ApiProperty({ example: 'Category ID', description: 'Category ID from category collection' })
  @IsNotEmpty()
  readonly categoryid: string;

  @ApiProperty({ example: 'Source ID', description: 'Source ID from source collection' })
  @IsNotEmpty()
  readonly sourceid: string;
}
