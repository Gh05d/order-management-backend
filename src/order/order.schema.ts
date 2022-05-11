import { Field, ObjectType, ID, InputType, Float } from '@nestjs/graphql';
import {
  Address,
  CustomerShort,
  EmployeeShort,
  ProductOrder,
} from 'src/common/schemas';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type OrderDocument = Order & mongoose.Document;

@Schema()
@ObjectType()
export class Order {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  state?: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';

  @Prop({ required: true })
  @Field((type) => Float)
  totalPrice: number;

  @Prop({ required: true })
  @Field((type) => Address)
  address: Address;

  @Prop()
  @Field()
  updated?: Date;

  @Prop({ required: true })
  @Field()
  created: Date;

  @Prop()
  @Field((type) => [ProductOrder])
  items: ProductOrder[] | [];

  @Prop({ required: true })
  @Field((type) => EmployeeShort)
  employee: EmployeeShort;

  @Prop({ required: true })
  @Field((type) => CustomerShort)
  customer: CustomerShort;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

@InputType()
export class CreateOrderInput {
  @Prop({ required: true })
  @Field(() => Float)
  totalPrice: number;

  @Field((type) => Address)
  address: Address;

  @Prop()
  @Field((type) => [ProductOrder])
  items: ProductOrder[] | [];

  @Prop({ required: true })
  @Field((type) => EmployeeShort)
  employee: EmployeeShort;

  @Prop({ required: true })
  @Field((type) => CustomerShort)
  customer: CustomerShort;
}

@InputType()
export class FindOrderInput {
  @Field(() => ID)
  _id: string;
}
