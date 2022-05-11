import { Query, Resolver } from '@nestjs/graphql';
import { Product } from './product.schema';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product])
  async products() {
    return this.productService.findMany();
  }
}
