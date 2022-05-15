import { Field, ObjectType, ID, InputType, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import {
  Address,
  AddressInput,
  PersonInput,
  ProductOrder,
  ProductOrderInput,
} from 'src/common/schemas';

export type OrderDocument = Order & mongoose.Document;

@ObjectType()
class EmployeeShort {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
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

@ObjectType()
class CustomerShort {
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

@Schema({ timestamps: true })
@ObjectType()
export class Order {
  @Prop()
  @Field(() => ID)
  _id: string;

  @Prop({
    uppercase: true,
    enum: ['OPEN', 'IN_PROGRESS', 'COMPLETE'],
  })
  @Field({ defaultValue: 'OPEN' })
  status?: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';

  @Prop({ required: true })
  @Field(() => Float)
  totalPrice: number;

  @Prop({ required: true })
  @Field(() => Address)
  address: Address;

  @Field()
  updatedAt: string;

  @Field()
  createdAt: string;

  @Prop()
  @Field(() => [ProductOrder])
  items: ProductOrder[];

  @Prop()
  @Field(() => EmployeeShort, { nullable: true })
  employee?: EmployeeShort;

  @Prop({ required: true })
  @Field(() => CustomerShort)
  customer: CustomerShort;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

@InputType()
export class CreateOrderInput {
  @Prop()
  @Field()
  totalPrice: number;

  @Prop()
  @Field()
  address: AddressInput;

  @Prop()
  @Field(() => [ProductOrderInput])
  items: ProductOrderInput[];

  @Prop()
  @Field({ nullable: true })
  employee?: PersonInput;

  @Prop()
  @Field()
  customer: PersonInput;
}

@InputType()
export class UpdateStatusInput {
  @Prop({ required: true })
  @Field(() => ID)
  _id: string;

  @Prop({ enum: ['IN_PROGRESS', 'COMPLETE'] })
  @Field()
  status?: 'IN_PROGRESS' | 'COMPLETE';
}

@InputType()
export class FindOrderInput {
  @Field(() => ID)
  _id: string;
}
