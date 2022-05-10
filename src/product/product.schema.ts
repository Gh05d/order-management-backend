import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  ean: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  image: string;

  @Field()
  description?: string;
}

@InputType()
export class CreateProductInput {
  @Field(() => ID)
  ean: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  image: string;

  @Field()
  description?: string;
}

@InputType()
export class FindProductInput {
  @Field(() => String)
  ean: string;
}
