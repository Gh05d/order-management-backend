import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import products from '../data/products';
import { Product, CreateProductInput, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  products: Partial<Product[]>;

  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {
    this.products = products;
  }

  async findMany() {
    return this.products;
  }

  async findByEan(ean) {
    return this.productModel.find({ ean }).lean();
  }

  async findByName(name) {
    return this.productModel.find({ name }).lean();
  }

  async createProduct(product: CreateProductInput) {
    this.products = [product, ...this.products];
    return product;
  }
}
