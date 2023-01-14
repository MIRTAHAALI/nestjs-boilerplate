import { Injectable } from '@nestjs/common';
import { Expense } from './interfaces/expense.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExpenseService {
  constructor(@InjectModel('Expense') private expenseModel: Model<Expense>) {}

  async findAll(): Promise<Expense[]> {
    return await this.expenseModel.find();
  }

  async findByUserId(obj: any): Promise<Expense[]> {
    return await this.expenseModel.find(obj);
  }



  async findByDate(obj: any): Promise<Expense[]> {
    if (obj.today) {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      return await this.expenseModel.find({createdAt: {$gte: start, $lt: end}});
    }
    if (obj.month) {
      return await this.expenseModel.aggregate([
        {
          $set: {
            month: { $month: '$createdAt' },
            year: { $year: '$createdAt' },
          },
        },
        { $match: { month: obj.month, userid: obj.userid } },
      ]);
    } else if (obj.week) {
      return await this.expenseModel.aggregate([
        {
          $set: {
            week: { $week: '$createdAt' },
            year: { $year: '$createdAt' },
          },
        },
        { $match: { week: obj.week, userid: obj.userid } },
      ]);
    } else if (obj.year) {
      return await this.expenseModel.aggregate([
        { $set: { year: { $year: '$createdAt' } } },
        { $match: { year: obj.year, userid: obj.userid } },
      ]);
    }

    //return await this.expenseModel.find(obj);
  }
  async create(expense: Expense): Promise<Expense> {
    const newExpense = new this.expenseModel(expense);
    return await newExpense.save();
  }

  async delete(id: string): Promise<Expense> {
    return await this.expenseModel.findByIdAndRemove(id);
  }

  async update(id: string, expense: Expense): Promise<Expense> {
    return await this.expenseModel.findByIdAndUpdate(id, expense, {
      new: true,
    });
  }
}
