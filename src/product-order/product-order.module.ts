import { Module } from '@nestjs/common';
import { ProductOrderResolver } from './product-order.resolver';
import { ProductOrderService } from './product-order.service';

@Module({
  providers: [ProductOrderResolver, ProductOrderService]
})
export class ProductOrderModule {}
