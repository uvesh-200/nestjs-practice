import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schema/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schema/profile.schema';

@Injectable()
export class EmployeeService {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<Employee>,
        @InjectModel(Profile.name) private profileModel: Model<Profile>
    ) {}

    async createEmployee(): Promise<Employee> {
        const profile = await new this.profileModel({
            age: 25,
            qualification: 'Bachelors'
        }).save()

        const employee = await new this.employeeModel({
            name: 'John Doe',
            profile: profile._id
        }).save()

        return employee;
    }

    async getAllEmployees(): Promise<Employee[]> {
        return this.employeeModel.find().populate('profile').exec();
    }

}
