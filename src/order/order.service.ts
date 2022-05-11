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

  async findMany(limit = 50): Promise<Order[]> {
    const order = await this.orderModel.find();
    console.log(
      'FIRE ~ file: order.service.ts ~ line 15 ~ OrderService ~ findMany ~ order',
      this.orderModel.find(),
    );
    return order;
  }

  async findById(id): Promise<Order> {
    return this.orderModel.findById(id);
  }

  async createOrder(order: CreateOrderInput): Promise<Order> {
    return this.orderModel.create(order);
  }
}
