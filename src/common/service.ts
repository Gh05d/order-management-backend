import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductOrder,
  ProductOrderDocument,
  ProductOrderInput,
} from './schemas';

@Injectable()
export class ProductOrderService {
  constructor(
    @InjectModel(ProductOrder.name)
    private productOrdersModel: Model<ProductOrderDocument>,
  ) {}

  async fetchMany() {
    return this.productOrdersModel.find();
  }

  async findById(id) {
    return this.productOrdersModel.findById(id);
  }

  async createProduct(productOrder: ProductOrderInput) {
    return this.productOrdersModel.create(productOrder);
  }
}
