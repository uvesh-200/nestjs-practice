import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async createUser(data: Partial<User>): Promise<User> {
        return new this.userModel(data).save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findById(id: string): Promise<User | null> {
        return this.userModel.findById(id).exec();
    }

    async updateUser(id: string, data: Partial<User>): Promise<User | null> {
        return await this.userModel.findByIdAndUpdate(id, {
            name: data.name ?? null,
            email: data.email ?? null,
            number: data.number ?? null
        }, { new: true }).exec();
    }

    async patchUser(id: string, data: Partial<User>): Promise<User | null> {
        return this.userModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteUser(id: string): Promise<User | null> {
        return this.userModel.findByIdAndDelete(id).exec();
    }
}
