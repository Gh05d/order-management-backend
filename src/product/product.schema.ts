import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type ProductDocument = Product & mongoose.Document;

@Schema()
@ObjectType()
export class Product {
  @Prop({ required: true })
  @Field(() => ID)
  ean: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ required: true })
  @Field()
  price: number;

  @Prop({ required: true })
  @Field()
  image: string;

  @Prop()
  @Field()
  description?: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

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
