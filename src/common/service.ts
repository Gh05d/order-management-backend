import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateProductOrderInput,
  ProductOrder,
  ProductOrderDocument,
} from './schemas';

@Injectable()
export class ProductOrderService {
  productOrders: Partial<ProductOrder[]>;

  constructor(
    @InjectModel(ProductOrder.name)
    private productOrdersModel: Model<ProductOrderDocument>,
  ) {
    this.productOrders = productOrders;
  }

  async findMany() {
    return this.productOrdersModel.find();
  }

  async findById(id) {
    return this.productOrdersModel.findById(id);
  }

  async createProduct(productOrder: CreateProductOrderInput) {}
}
