import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  type: String,
  password: String
});
