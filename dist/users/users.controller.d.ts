import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interface/user.interface';
import { Logger } from 'winston';
export declare class UsersController {
    private readonly UsersService;
    private readonly logger;
    constructor(UsersService: UsersService, logger: Logger);
    findAll(createItemDto: any): Promise<any>;
    findOne(id: any): Promise<User>;
    singin(createItemDto: any): Promise<any>;
    create(createItemDto: CreateUserDto): Promise<User>;
    delete(id: any): Promise<User>;
    update(updateItemDto: CreateUserDto, id: any): Promise<User>;
}
