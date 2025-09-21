import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerType } from './interfaces/customer.interface';
import { CustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    getAll(): CustomerType[] {
        return this.customerService.getAllCustomers();
    }

    @Post()
    add(@Body() customerDto: CustomerDto) {
        return this.customerService.addCustomer(customerDto);
    }
}
