import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Address, CreatePersonInput, Person } from '../common/schemas';

export type CustomerDocument = Customer & mongoose.Document;
@Schema()
@ObjectType()
export class Customer extends Person {
  @Prop()
  @Field(() => [Address])
  addresses: Address[] | [];

  @Prop()
  @Field()
  firstOrder?: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

@InputType()
export class CreateCustomerInput extends CreatePersonInput {
  @Field(() => [Address])
  addresses: Address[] | [];

  @Field()
  firstOrder?: Date;
}
