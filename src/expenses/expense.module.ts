import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';
import { ExpenseSchema } from './schemas/expense.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Expense', schema: ExpenseSchema }])],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule {}
