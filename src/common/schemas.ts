import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Product } from 'src/product/product.schema';

@ObjectType()
export abstract class Person {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}

@InputType()
export abstract class CreatePersonInput {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}

@InputType()
export abstract class FindPersonInput {
  @Field(() => ID)
  id: string;
}

@ObjectType()
export class Address {
  @Field()
  street?: string;

  @Field()
  zip?: string;

  @Field()
  city?: string;

  @Field()
  country: string;

  @Field()
  misc: string;
}

@ObjectType()
export class ProductOrder {
  @Field(() => ID)
  product: Product;

  @Field()
  quantity: number;
}
