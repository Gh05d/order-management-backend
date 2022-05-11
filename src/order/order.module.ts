import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductOrder, ProductOrderSchema } from 'src/common/schemas';
import { Product, ProductSchema } from 'src/product/product.schema';
import { OrderResolver } from './order.resolver';
import { Order, OrderSchema } from './order.schema';
import { OrderService } from './order.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: Product.name, schema: ProductSchema },
      // { name: ProductOrder.name, schema: ProductOrderSchema },
    ]),
  ],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}
