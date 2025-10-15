import { Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly EmployeeService: EmployeeService) { }

    @Get()
    getEmployee() {
        return this.EmployeeService.getAllEmployees()
    }

    @Post()
    createEmployee() {
        return this.EmployeeService.createEmployee()
    }
}
