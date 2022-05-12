import { Field, ObjectType, ID, InputType, Float } from '@nestjs/graphql';
import { Address, ProductOrder } from 'src/common/schemas';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Customer } from 'src/customer/customer.schema';

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

@Schema()
@ObjectType()
export class Order {
  @Prop({ required: true })
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  state?: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';

  @Prop({ required: true })
  @Field(() => Float)
  totalPrice: number;

  @Prop({ required: true })
  @Field(() => Address)
  address: Address;

  @Prop({ required: false })
  @Field({ nullable: true })
  updated?: Date;

  @Prop({ required: true })
  @Field()
  created: Date;

  @Prop()
  @Field(() => [ProductOrder])
  items: ProductOrder[] | [];

  @Prop({ required: true })
  @Field(() => EmployeeShort)
  employee: EmployeeShort;

  @Prop({ required: true })
  @Field(() => CustomerShort)
  customer: CustomerShort;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

@InputType()
export class CreateOrderInput {
  @Prop({ required: true })
  @Field(() => Float)
  totalPrice: number;

  @Field(() => Address)
  address: Address;

  @Prop()
  @Field(() => [ProductOrder])
  items: ProductOrder[] | [];

  @Prop({ required: true })
  @Field(() => EmployeeShort)
  employee: EmployeeShort;

  @Prop({ required: true })
  @Field(() => CustomerShort)
  customer: CustomerShort;
}

@InputType()
export class FindOrderInput {
  @Field(() => ID)
  _id: string;
}
