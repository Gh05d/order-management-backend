import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Product } from 'src/product/product.schema';

@ObjectType()
export class ProductOrder {
  @Field(() => ID)
  id: string;

  @Field()
  product: Product;

  @Field()
  quantity: number;

  @Field()
  ordered?: Date;
}

@InputType()
export class CreateProductOrderInput {
  @Field(() => ID)
  id: string;

  @Field()
  product: Product;

  @Field()
  quantity: number;
}

@InputType()
export class FindProductOrderInput {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  product: Product;
}
