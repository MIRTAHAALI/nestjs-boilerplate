"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UsersController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const users_service_1 = require("./users.service");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
const jwt_auth_gaurd_1 = require("src/auth/jwt-auth.gaurd");
let UsersController = UsersController_1 = class UsersController {
    constructor(UsersService, logger) {
        this.UsersService = UsersService;
        this.logger = logger;
    }
    async findAll(createItemDto) {
        this.logger.log('Calling findAll()', UsersController_1.name);
        const user = (await this.UsersService.findOne(createItemDto.name));
        if (!user)
            return {
                success: false,
                error: 'User not found',
            };
        if (user.type == 'superUser') {
            return this.UsersService.findAll();
        }
        else {
            return {
                message: 'You are not Super User'
            };
        }
    }
    findOne(id) {
        return this.UsersService.findOne(id);
    }
    async singin(createItemDto) {
        const user = (await this.UsersService.findOne(createItemDto.name));
        if (!user)
            return {
                success: false,
                error: 'User not found',
            };
        if (createItemDto.password == user.password) {
            return {
                success: true,
                error: '',
            };
        }
        else {
            return {
                success: false,
                error: 'Password Incorrect',
            };
        }
    }
    create(createItemDto) {
        return this.UsersService.create(createItemDto);
    }
    delete(id) {
        return this.UsersService.delete(id);
    }
    update(updateItemDto, id) {
        return this.UsersService.update(id, updateItemDto);
    }
};
__decorate([
    (0, common_1.Post)('getAllUser'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "singin", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGuard),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
UsersController = UsersController_1 = __decorate([
    (0, common_1.Controller)('Users'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        winston_1.Logger])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map