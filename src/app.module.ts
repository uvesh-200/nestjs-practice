import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';
import { StudentService } from './student/student.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [StudentModule, CustomerModule],
  controllers: [AppController, StudentController, CustomerController],
  providers: [AppService, StudentService, CustomerService],
})
export class AppModule {}
