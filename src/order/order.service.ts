import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderInput, Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<OrderDocument>,
  ) {}

  async fetchMany(limit = 50): Promise<Order[]> {
    return this.orderModel.find().limit(limit).lean();
  }

  async findById(id): Promise<Order> {
    return this.orderModel.findById(id);
  }

  async createOrder(order: CreateOrderInput): Promise<Order> {
    return this.orderModel.create(order);
  }
}
