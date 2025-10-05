import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
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

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() data: Partial<User>) {
        return this.userService.updateUser(id, data);
    }

    @Patch(':id')
    async patchUser(@Param('id') id: string, @Body() data: Partial<User>) {
        return this.userService.patchUser(id, data);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}
