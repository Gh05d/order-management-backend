import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Employee } from 'src/employee/employee.schema';
import { Order } from 'src/order/order.schema';
import mongoose from 'mongoose';

export type OrderStatusHistoryDocument = OrderStatusHistory & mongoose.Document;

@Schema()
@ObjectType()
export class OrderStatusHistory {
  @Field(() => ID)
  _id?: string;

  @Prop({ required: true })
  @Field()
  state: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';

  @Prop()
  @Field()
  updated?: Date;

  @Prop({ required: true })
  @Field()
  updatedBy: Employee;

  @Prop({ required: true })
  @Field()
  order: Order;
}

export const OrderStatusHistorySchema =
  SchemaFactory.createForClass(OrderStatusHistory);

@InputType()
export class CreateOrderStatusHistoryInput {
  @Field()
  state: 'IN_PROGRESS' | 'COMPLETE';

  @Field()
  updatedBy: Employee;

  @Field()
  order: Order;
}

@InputType()
export class FindOrderStatusHistoryInput {
  @Field(() => ID)
  id: string;

  @Field(() => [ID])
  status: Order[];
}
