import { Field, ObjectType, ID, InputType, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
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

  @Prop()
  @Field()
  updated?: Date;

  @Prop({ required: true })
  @Field()
  created: Date;
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
  _id: string;
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

export type ProductOrderDocument = ProductOrder & mongoose.Document;

@ObjectType()
export class ProductOrder {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Product.name })
  @Field(() => Product)
  product: Product;

  @Prop({ required: true })
  @Field((type) => Int)
  quantity: number;
}

export const ProductOrderSchema = SchemaFactory.createForClass(ProductOrder);

ProductOrderSchema.index({ product: 1 });

@InputType()
export class CreateProductOrderInput {
  @Field(() => Product)
  product: Product;

  @Field()
  quantity: number;
}

@ObjectType()
export class EmployeeShort {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  firstName: string;

  @Prop({ required: true })
  @Field()
  lastName: string;
}

@ObjectType()
export class CustomerShort {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  })
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  firstName: string;

  @Prop({ required: true })
  @Field()
  lastName: string;
}
