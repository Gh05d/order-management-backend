import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  OrderStatusHistory,
  OrderStatusHistoryDocument,
} from './order-status-history.schema';
import { CreateOrderStatusHistoryInput } from './order-status-history.schema';

@Injectable()
export class OrderStatusHistoryService {
  orderHistories: Partial<OrderStatusHistory[]>;

  constructor(
    @InjectModel(OrderStatusHistory.name)
    private orderHistoryModel: Model<OrderStatusHistoryDocument>,
  ) {
    this.orderHistories = orderHistories;
  }

  async findMany() {
    return this.orderHistoryModel.find();
  }

  async findById(id) {
    return this.orderHistoryModel.findById(id);
  }

  async createProduct(orderHistory: CreateOrderStatusHistoryInput) {}
}
