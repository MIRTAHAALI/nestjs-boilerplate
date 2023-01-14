import { User } from './interface/user.interface';
import { Model } from 'mongoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    findOne(username: string): Promise<User>;
    create(item: User): Promise<User>;
    delete(id: string): Promise<User>;
    update(id: string, item: User): Promise<User>;
}
