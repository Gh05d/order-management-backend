import { Field, ObjectType, InputType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreatePersonInput, FindPersonInput, Person } from '../common/schemas';

export type EmployeeDocument = Employee & mongoose.Document;
@Schema()
@ObjectType()
export class Employee extends Person {
  @Prop({ required: true })
  @Field()
  email: string;

  @Prop({ required: true })
  @Field()
  employeeNumber: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

@InputType()
export class CreateEmployeeInput extends CreatePersonInput {
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
