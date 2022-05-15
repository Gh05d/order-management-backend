import {
  Query,
  Resolver,
  Args,
  ID,
  Parent,
  ResolveField,
  Int,
  Mutation,
} from '@nestjs/graphql';
import { CustomerService } from 'src/customer/customer.service';
import { Product } from 'src/product/product.schema';
import { ProductService } from 'src/product/product.service';
import { CreateOrderInput, Order } from './order.schema';
import { OrderService } from './order.service';

@Resolver(() => Order)
export class OrderResolver {
  constructor(
    private orderService: OrderService,
    // private customerService: CustomerService,
    private productService: ProductService,
  ) {}

  @Query(() => [Order], { name: 'orders' })
  async getOrders(
    @Args('offset', { type: () => Int, defaultValue: 0 })
    offset?: number,
    @Args('limit', { type: () => Int, defaultValue: 50 })
    limit?: number,
  ) {
    return this.orderService.fetchMany(offset, limit);
  }

  @Query(() => Order, { name: 'order' })
  async getOrder(@Args('id', { type: () => ID }) id: string) {
    return this.orderService.findById(id);
  }

  @Mutation(() => Order)
  async assignEmployee(
    @Args('orderID', { type: () => ID }) orderID: string,
    @Args('employeeID', { type: () => ID })
    employeeID: string,
  ) {
    return this.orderService.assignEmployee(orderID, employeeID);
  }

  @Mutation(() => Order)
  async createOrder(@Args('order') order: CreateOrderInput) {
    return this.orderService.createOrder(order);
  }

  @Mutation(() => Order)
  async updateStatus(
    @Args('orderID', { type: () => ID }) orderID: string,
    @Args('status', { type: () => String })
    status: 'IN_PROGRESS' | 'COMPLETE',
  ) {
    return this.orderService.updateStatus({ _id: orderID, status: status });
  }

  // @ResolveField()
  // async customer(@Parent() order: Order) {
  //   return this.customerService.findById(order.customer._id);
  // }

  @ResolveField()
  async items(@Parent() order: Order) {
    const productIDs: string[] = order.items.map((item) => item.product);

    const products = await this.productService.fetchList(productIDs);

    const productsAndQuantities = products.map((product: Product) => ({
      quantity: order.items?.find((item) => item['product'] == product._id)
        .quantity,
      product,
    }));

    return productsAndQuantities;
  }
}
