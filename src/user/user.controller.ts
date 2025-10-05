import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() data: Partial<User>): Promise<User> {
        return this.userService.createUser(data);
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return this.userService.findById(id);
    }
}
