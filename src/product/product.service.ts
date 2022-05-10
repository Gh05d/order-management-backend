import { Injectable } from '@nestjs/common';
import products from '../data/products';
import { Product, CreateProductInput } from './product.schema';

@Injectable()
export class ProductService {
  products: Partial<Product[]>;
  constructor() {
    this.products = products;
  }

  async findMany() {
    return this.products;
  }

  async findById(id) {
    const products = this.products.filter((product) => product.ean == id);

    if (products) return products[0];

    return null;
  }

  async createProduct(product: CreateProductInput) {
    this.products = [product, ...this.products];
    return product;
  }
}
