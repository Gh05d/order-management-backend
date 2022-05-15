import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Order } from 'src/order/order.schema';
import mongoose from 'mongoose';

export type OrderStatusHistoryDocument = OrderStatusHistory & mongoose.Document;

@Schema({ timestamps: true })
@ObjectType()
export class OrderStatusHistory {
  @Prop()
  @Field(() => ID, { nullable: true })
  _id: string;

  @Prop({
    uppercase: true,
    enum: ['OPEN', 'IN_PROGRESS', 'COMPLETE'],
  })
  @Field({ defaultValue: 'OPEN' })
  status: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';

  @Prop()
  @Field()
  updatedAt: string;

  @Prop()
  @Field()
  createdAt: string;

  @Prop({ required: true })
  @Field(() => Order)
  order: string;
}

export const OrderStatusHistorySchema =
  SchemaFactory.createForClass(OrderStatusHistory);

@InputType()
export class CreateOrderStatusHistoryInput {
  @Prop({
    uppercase: true,
    enum: ['IN_PROGRESS', 'COMPLETE'],
  })
  @Field()
  status: 'IN_PROGRESS' | 'COMPLETE';

  @Prop()
  @Field(() => ID)
  order: string;
}

@InputType()
export class FindOrderStatusHistoryInput {
  @Field(() => ID)
  _id: string;

  @Field()
  status: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';
}
