import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Product } from './product.schema';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => [Product])
  async products() {
    return this.productService.findMany();
  }

  @Query((returns) => Product)
  async order(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findById(id);
  }
}
