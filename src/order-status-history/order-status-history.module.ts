import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderStatusHistoryResolver } from './order-status-history.resolver';
import {
  OrderStatusHistory,
  OrderStatusHistorySchema,
} from './order-status-history.schema';
import { OrderStatusHistoryService } from './order-status-history.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderStatusHistory.name, schema: OrderStatusHistorySchema },
    ]),
  ],
  providers: [OrderStatusHistoryResolver, OrderStatusHistoryService],
})
export class OrderStatusHistoryModule {}
