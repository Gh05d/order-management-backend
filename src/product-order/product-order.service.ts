import { Injectable } from '@nestjs/common';
import productOrders from 'src/data/productOrders';
import { CreateProductOrderInput, ProductOrder } from './product-order.schema';

@Injectable()
export class ProductOrderService {
  productOrders: Partial<ProductOrder[]>;
  constructor() {
    this.productOrders = productOrders;
  }

  async findMany() {
    return this.productOrders;
  }

  async findById(id) {
    const productOrders = this.productOrders.filter(
      (productOrder) => productOrder.id == id,
    );

    if (productOrders) return productOrders[0];

    return null;
  }

  async createProduct(productOrder: CreateProductOrderInput) {
    this.productOrders = [productOrder, ...this.productOrders];
    return productOrder;
  }
}
