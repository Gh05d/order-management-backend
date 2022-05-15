import {
  Args,
  ID,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OrderService } from 'src/order/order.service';
import {
  CreateOrderStatusHistoryInput,
  OrderStatusHistory,
} from './order-status-history.schema';
import { OrderStatusHistoryService } from './order-status-history.service';

@Resolver(() => OrderStatusHistory)
export class OrderStatusHistoryResolver {
  constructor(
    private orderStatusHistoryService: OrderStatusHistoryService,
    private orderService: OrderService,
  ) {}

  @Query(() => [OrderStatusHistory], { name: 'orderStatusHistories' })
  async getStatusHistories(
    @Args('offset', { type: () => Int, defaultValue: 0 })
    offset?: number,
    @Args('limit', { type: () => Int, defaultValue: 50 })
    limit?: number,
  ) {
    return this.orderStatusHistoryService.fetchMany(offset, limit);
  }

  @Query(() => [OrderStatusHistory], { name: 'orderStatusHistory' })
  async getStatusHistory(@Args('orderID', { type: () => ID }) orderID: string) {
    return this.orderStatusHistoryService.fetchHistory(orderID);
  }

  @Mutation(() => OrderStatusHistory)
  async createDocument(@Args('status') status: CreateOrderStatusHistoryInput) {
    return this.orderStatusHistoryService.createStatus(status);
  }

  @ResolveField()
  async order(@Parent() orderStatusHistory: OrderStatusHistory) {
    return this.orderService.findById(orderStatusHistory.order);
  }
}
