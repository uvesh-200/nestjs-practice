import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [StudentModule, CustomerModule, ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGO_URI!), UserModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
