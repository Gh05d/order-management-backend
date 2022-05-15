import { Field, ObjectType, ID, InputType, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Product } from 'src/product/product.schema';

@Schema()
@ObjectType()
export abstract class Person {
  @Prop()
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  firstName: string;

  @Prop({ required: true })
  @Field()
  lastName: string;

  @Prop()
  @Field({ nullable: true })
  updatedAt?: string;

  @Prop({ required: true })
  @Field()
  createdAt: string;
}

@InputType()
export class PersonInput {
  @Prop()
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  firstName: string;

  @Prop()
  @Field()
  lastName: string;
}

@InputType()
export abstract class FindPersonInput {
  @Field(() => ID)
  _id: string;
}

@ObjectType()
export class Address {
  @Prop()
  @Field({ nullable: true })
  street?: string;

  @Prop()
  @Field({ nullable: true })
  houseNumber?: string;

  @Prop()
  @Field()
  zip: string;

  @Prop()
  @Field()
  city: string;

  @Prop()
  @Field()
  country: string;

  @Prop()
  @Field({ nullable: true })
  misc?: string;
}

export type ProductOrderDocument = ProductOrder & mongoose.Document;

@InputType()
export class AddressInput {
  @Prop()
  @Field({ nullable: true })
  street?: string;

  @Prop()
  @Field({ nullable: true })
  houseNumber?: string;

  @Prop()
  @Field()
  zip: string;

  @Prop()
  @Field()
  city: string;

  @Prop()
  @Field()
  country: string;

  @Prop()
  @Field({ nullable: true })
  misc?: string;
}

@ObjectType()
export class ProductOrder {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  })
  @Field(() => Product)
  product: string;

  @Prop({ required: true })
  @Field(() => Int)
  quantity: number;
}

export const ProductOrderSchema = SchemaFactory.createForClass(ProductOrder);

ProductOrderSchema.index({ product: 1 });

@InputType()
export class ProductOrderInput {
  @Field(() => ID)
  product: string;

  @Field()
  quantity: number;
}
