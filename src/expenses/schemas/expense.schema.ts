// import * as mongoose from 'mongoose';

// export const ExpenseSchema = new mongoose.Schema({
//   userid: String,
//   type: String,
//   qty: Number,
//   amount: Number,
//   categoryid: String,
//   sourceid: String,
// });


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema({
  timestamps: true,
})
export class Expense {

  @Prop()
  userid: string;

  @Prop()
  type: string;

  @Prop()
  qty: number;

  @Prop()
  amount: number;

  @Prop()
  categoryid: string;

  @Prop()
  sourceid: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);