import { Injectable } from '@nestjs/common';
import orderHistories from 'src/data/orderHistories';
import { OrderStatusHistory } from './order-status-history.schema';
import { CreateOrderStatusHistoryInput } from './order-status-history.schema';

@Injectable()
export class OrderStatusHistoryService {
  orderHistories: Partial<OrderStatusHistory[]>;
  constructor() {
    this.orderHistories = orderHistories;
  }

  async findMany() {
    return this.orderHistories;
  }

  async findById(id) {
    const orderHistories = this.orderHistories.filter(
      (orderHistory) => orderHistory.id == id,
    );

    if (orderHistories) return orderHistories[0];

    return null;
  }

  async createProduct(orderHistory: CreateOrderStatusHistoryInput) {
    this.orderHistories = [orderHistory, ...this.orderHistories];
    return orderHistory;
  }
}
