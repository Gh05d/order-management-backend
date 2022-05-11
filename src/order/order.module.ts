import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductOrder, ProductOrderSchema } from 'src/common/schemas';
import { Customer, CustomerSchema } from 'src/customer/customer.schema';
import { CustomerService } from 'src/customer/customer.service';
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
      { name: Customer.name, schema: CustomerSchema },
      { name: ProductOrder.name, schema: ProductOrderSchema },
    ]),
  ],
  providers: [OrderResolver, OrderService, CustomerService, ProductService],
})
export class OrderModule {}
