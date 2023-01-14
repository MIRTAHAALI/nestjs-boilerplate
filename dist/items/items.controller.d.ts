import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { Logger } from 'winston';
export declare class ItemsController {
    private readonly itemsService;
    private readonly logger;
    constructor(itemsService: ItemsService, logger: Logger);
    findAll(): Promise<Item[]>;
    findOne(id: any): Promise<Item>;
    create(createItemDto: CreateItemDto): Promise<Item>;
    delete(id: any): Promise<Item>;
    update(updateItemDto: CreateItemDto, id: any): Promise<Item>;
}
