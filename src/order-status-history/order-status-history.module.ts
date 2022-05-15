import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from 'src/employee/employee.schema';
import { Order, OrderSchema } from 'src/order/order.schema';
import { OrderService } from 'src/order/order.service';
import { OrderStatusHistoryResolver } from './order-status-history.resolver';
import {
  OrderStatusHistory,
  OrderStatusHistorySchema,
} from './order-status-history.schema';
import { OrderStatusHistoryService } from './order-status-history.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderStatusHistory.name, schema: OrderStatusHistorySchema },
      { name: Order.name, schema: OrderSchema },
      { name: Employee.name, schema: EmployeeSchema },
    ]),
  ],
  providers: [
    OrderStatusHistoryResolver,
    OrderStatusHistoryService,
    OrderService,
  ],
})
export class OrderStatusHistoryModule {}
