import { Field, ObjectType, ID, InputType, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type ProductDocument = Product & mongoose.Document;

@Schema()
@ObjectType()
export class Product {
  @Prop({ required: true })
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ required: true })
  @Field((type) => Float)
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
  @Field()
  name: string;

  @Field((type) => Float)
  price: number;

  @Field()
  image: string;

  @Field()
  description?: string;
}

// @InputType()
// export class FindProductInput {
//   @Field(() => ID)
//   id: string;
// }
