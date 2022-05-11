import {
  Query,
  Resolver,
  Args,
  ID,
  Parent,
  ResolveField,
  Int,
} from '@nestjs/graphql';
import { CustomerService } from 'src/customer/customer.service';
import { Product } from 'src/product/product.schema';
import { ProductService } from 'src/product/product.service';
import { Order } from './order.schema';
import { OrderService } from './order.service';

@Resolver(() => Order)
export class OrderResolver {
  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private productService: ProductService,
  ) {}

  @Query(() => [Order], { name: 'orders' })
  async getOrders(
    @Args('limit', { type: () => Int, defaultValue: 50 })
    limit?: number,
  ) {
    return this.orderService.fetchMany(limit);
  }

  @Query(() => Order, { name: 'order' })
  async getOrder(@Args('id', { type: () => ID }) id: string) {
    return this.orderService.findById(id);
  }

  @ResolveField()
  async customer(@Parent() order: Order) {
    return this.customerService.findById(order.customer._id);
  }

  @ResolveField()
  async items(@Parent() order: Order) {
    const productIDs: string[] = order.items.map((item) => item.product);

    const products = await this.productService.fetchList(productIDs);

    const productsAndQuantities = products.map((product: Product) => ({
      quantity: order.items?.find((item) => item.product == product._id)
        .quantity,
      product,
    }));

    return productsAndQuantities;
  }
}
