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
  constructor(
    @InjectModel(OrderStatusHistory.name)
    private orderStatusHistoryModel: Model<OrderStatusHistoryDocument>,
  ) {}

  async fetchMany(): Promise<OrderStatusHistory[]> {
    return this.orderStatusHistoryModel.find();
  }

  async findById(id): Promise<OrderStatusHistory> {
    return this.orderStatusHistoryModel.findById(id);
  }

  async createStatus(
    status: CreateOrderStatusHistoryInput,
  ): Promise<OrderStatusHistory> {
    return this.orderStatusHistoryModel.create(status);
  }
}
