import { Injectable } from '@nestjs/common';
import orders from 'src/data/orders';
import { CreateOrderInput, Order } from './order.schema';

@Injectable()
export class OrderService {
  orders: Partial<Order[]>;
  constructor() {
    this.orders = orders;
  }

  async findMany() {
    return this.orders;
  }

  async findById(id) {
    const orders = this.orders.filter((order) => order.id == id);

    if (orders) return orders[0];

    return null;
  }

  async createProduct(order: CreateOrderInput) {
    this.orders = [order, ...this.orders];
    return order;
  }
}
