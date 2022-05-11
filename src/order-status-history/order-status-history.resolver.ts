import { Query, Resolver } from '@nestjs/graphql';
import { OrderStatusHistory } from './order-status-history.schema';
import { OrderStatusHistoryService } from './order-status-history.service';

@Resolver()
export class OrderStatusHistoryResolver {
  constructor(private orderStatusHistoryService: OrderStatusHistoryService) {}

  @Query(() => [OrderStatusHistory])
  async oshs() {
    return this.orderStatusHistoryService.fetchMany();
  }
}
