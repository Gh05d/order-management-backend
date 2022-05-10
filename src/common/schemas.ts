import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { Product } from 'src/product/product.schema';

@Schema()
@ObjectType()
export abstract class Person {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  firstName: string;

  @Prop({ required: true })
  @Field()
  lastName: string;
}

@InputType()
export abstract class CreatePersonInput {
  @Field(() => ID)
  _id: string;

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
  @Prop()
  @Field()
  street?: string;

  @Prop({ required: true })
  @Field()
  zip?: string;

  @Prop({ required: true })
  @Field()
  city: string;

  @Prop({ required: true })
  @Field()
  country: string;

  @Prop()
  @Field()
  misc?: string;
}

@ObjectType()
export class ProductOrder {
  @Prop({ required: true })
  @Field(() => ID)
  product: Product;

  @Prop({ required: true })
  @Field()
  quantity: number;
}
