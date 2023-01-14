import {
  Controller,
  Get,
  Post,
  Body,
  Param, Inject, UseGuards
} from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ExpenseService } from './expense.service';
import { Expense } from './interfaces/expense.interface';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { GetExpenseByDateDto } from './dto/get-expense-date.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';
import { UserIdDto } from './dto/userid.dto';

@ApiTags('Expense/Income')
@Controller('expense')
export class ExpenseController {
  constructor(private readonly transactionService: ExpenseService, @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}

  // @Get()
  // findAll(): Promise<Expense[]> {
  //   this.logger.log('Calling findAll()', ExpenseController.name);
  //   return this.transactionService.findAll();
  // }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'get all transaction History by user id' })
  @UseGuards(JwtAuthGuard)
  @Get('gettransactions/:userid')
  findOne(@Param() userIdDto: UserIdDto): Promise<Expense[]> {
    console.log(userIdDto.userid);
    return this.transactionService.findByUserId(userIdDto.userid);
  }


  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get Transaction by week, month or year' })
  @UseGuards(JwtAuthGuard)
  @Post('gettransactions_w_m_d')
  findByDate(@Body() body: GetExpenseByDateDto): Promise<Expense[]> {
    console.log(body);
    return this.transactionService.findByDate(body);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get todays transaction' })
  @UseGuards(JwtAuthGuard)
  @Post('get_today_transactions')
  findByToday(@Body() body: GetExpenseByDateDto): Promise<Expense[]> {
    console.log(body);
    body.today = true;
    return this.transactionService.findByDate(body);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get Income Transactions' })
  @UseGuards(JwtAuthGuard)
  @Post('get_income_transactions')
  findByIncome(@Body() body: any): Promise<Expense[]> {
    this.logger.log('findByIncome', ExpenseController.name);
    return this.transactionService.findByUserId(body);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get Expense Transactions' })
  @UseGuards(JwtAuthGuard)
  @Post('get_expense_transactions')
  findByExpense(@Body() body: any): Promise<Expense[]> {
    console.log(body);
    this.logger.log('Calling findByExpense()', ExpenseController.name);
    return this.transactionService.findByUserId(body);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create Transaction' })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTransactionDto: CreateExpenseDto): Promise<Expense> {
    this.logger.log('Calling create()', ExpenseController.name);
    return this.transactionService.create(createTransactionDto);
  }




}
