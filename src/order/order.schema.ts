import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Address, ProductOrder } from 'src/common/schemas';
import { Customer } from 'src/customer/customer.schema';
import { Employee } from 'src/employee/employee.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type OrderDocument = Order & mongoose.Document;

@Schema()
@ObjectType()
export class Order {
  @Field(() => ID)
  _id?: string;

  @Prop({ required: true })
  @Field()
  state?: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';

  @Prop({ required: true })
  @Field()
  totalPrice: number;

  @Prop({ required: true })
  @Field()
  address: Address;

  @Prop()
  @Field()
  updated?: Date;

  @Prop()
  @Field()
  created?: Date;

  @Prop({ required: true })
  @Field()
  items: [ProductOrder];

  @Prop({ required: true })
  @Field()
  employee: Employee;

  @Prop({ required: true })
  @Field()
  customer: Customer;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

@InputType()
export class CreateOrderInput {
  @Field()
  totalPrice: number;

  @Field()
  address: Address;

  @Field()
  items: [ProductOrder];

  @Field()
  employee: Employee;

  @Field()
  customer: Customer;
}

@InputType()
export class FindOrderInput {
  @Field(() => ID)
  id: string;
}
