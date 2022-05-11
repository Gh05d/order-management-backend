import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderInput, Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {
  orders: Partial<Order[]>;

  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<OrderDocument>,
  ) {
    this.orders = orders;
  }

  async findMany() {
    return this.orderModel.find();
  }

  async findById(id) {
    return this.orderModel.findById(id);
  }

  async createProduct(order: CreateOrderInput) {}
}
