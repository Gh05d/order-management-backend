import { Query, Resolver, Args } from '@nestjs/graphql';
import { Order } from './order.schema';
import { OrderService } from './order.service';

@Resolver((of) => Order)
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Query((returns) => [Order], { name: 'orders' })
  async getOrders() {
    return this.orderService.findMany();
  }

  @Query((returns) => Order, { name: 'order' })
  async getOrder(@Args('id', { type: () => String }) id: string) {
    return this.orderService.findById(id);
  }

  // @ResolveField()
  // async items(@Parent() order: Order) {
  //   return this.orderService.findMany({ authorId: id });
  // }
}
