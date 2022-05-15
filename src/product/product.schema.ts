import { Field, ObjectType, ID, InputType, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type ProductDocument = Product & mongoose.Document;

@Schema({ timestamps: true })
@ObjectType()
export class Product {
  @Prop()
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field(() => Float)
  price: number;

  @Prop()
  @Field()
  image: string;

  @Prop()
  @Field({ nullable: true })
  description?: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  image: string;

  @Field({ nullable: true })
  description?: string;
}
