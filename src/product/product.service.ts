import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, CreateProductInput, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}

  async findMany(): Promise<Product[]> {
    return this.productModel.find().lean();
  }

  async findById(id): Promise<Product> {
    return this.productModel.findById(id).lean();
  }

  async findByName(name): Promise<Product> {
    return this.productModel.find({ name }).lean();
  }

  async createProduct(product: CreateProductInput): Promise<Product> {
    return this.productModel.create(product);
  }
}
