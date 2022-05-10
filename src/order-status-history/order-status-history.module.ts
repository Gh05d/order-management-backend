import { Module } from '@nestjs/common';
import { OrderStatusHistoryResolver } from './order-status-history.resolver';
import { OrderStatusHistoryService } from './order-status-history.service';

@Module({
  providers: [OrderStatusHistoryResolver, OrderStatusHistoryService]
})
export class OrderStatusHistoryModule {}
