import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Product } from './product.schema';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product], { name: 'products' })
  async getProducts(
    @Args('limit', { type: () => Int, defaultValue: 50 }) limit: number,
  ) {
    return this.productService.fetchMany(limit);
  }

  @Query(() => Product, { name: 'product' })
  async getProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findById(id);
  }
}
