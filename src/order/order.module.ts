import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from 'src/employee/employee.schema';
import { EmployeeService } from 'src/employee/employee.service';
import {
  OrderStatusHistory,
  OrderStatusHistorySchema,
} from 'src/order-status-history/order-status-history.schema';
import { OrderStatusHistoryService } from 'src/order-status-history/order-status-history.service';
import { Product, ProductSchema } from 'src/product/product.schema';
import { ProductService } from 'src/product/product.service';
import { OrderResolver } from './order.resolver';
import { Order, OrderSchema } from './order.schema';
import { OrderService } from './order.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: Product.name, schema: ProductSchema },
      { name: Employee.name, schema: EmployeeSchema },
      { name: OrderStatusHistory.name, schema: OrderStatusHistorySchema },
    ]),
  ],
  providers: [
    OrderResolver,
    OrderService,
    EmployeeService,
    ProductService,
    OrderStatusHistoryService,
  ],
})
export class OrderModule {}
