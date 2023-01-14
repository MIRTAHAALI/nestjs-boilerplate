import { Injectable, UseGuards } from '@nestjs/common';
import { User } from './interface/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne({ name: username });
  }

  async create(item: User): Promise<User> {
    const newItem = new this.userModel(item);
    await this.userModel.syncIndexes();
    return await newItem.save();
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, item: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, item, { new: true });
  }
}
