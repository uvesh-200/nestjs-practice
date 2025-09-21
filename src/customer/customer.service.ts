import { Injectable } from '@nestjs/common';
import { CustomerType } from './interfaces/customer.interface';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
    private customers: CustomerType[] = [];

    getAllCustomers(): CustomerType[] {
        return this.customers;
    }

    addCustomer(CustomerDto: CustomerDto): CustomerType {
        const newCustomer: CustomerType = {
            id: Date.now(),
            ...CustomerDto
        }
        this.customers.push(newCustomer);
        return newCustomer;
    }
}
