import { Field, ObjectType, InputType, ID, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { FindPersonInput, Person, PersonInput } from '../common/schemas';

export type EmployeeDocument = Employee & mongoose.Document;
@Schema({ timestamps: true })
@ObjectType()
export class Employee extends Person {
  @Prop({ required: true })
  @Field()
  email: string;

  @Prop({ required: true })
  @Field(() => Int)
  employeeNumber: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

@InputType()
export class CreateEmployeeInput extends PersonInput {
  @Field()
  email: string;

  @Field()
  employeeNumber: number;
}

@InputType()
export class FindEmployeeInput extends FindPersonInput {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => ID)
  employeeNumber: string;
}
