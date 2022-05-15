import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Address, Person, PersonInput } from '../common/schemas';

export type CustomerDocument = Customer & mongoose.Document;
@Schema({ timestamps: true })
@ObjectType()
export class Customer extends Person {
  @Prop()
  @Field(() => [Address], { nullable: 'items' })
  addresses: Address[] | [];

  @Prop()
  @Field()
  firstOrder?: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

@InputType()
export class CreateCustomerInput extends PersonInput {
  @Field(() => [Address])
  addresses: Address[] | [];

  @Field()
  firstOrder?: Date;
}
