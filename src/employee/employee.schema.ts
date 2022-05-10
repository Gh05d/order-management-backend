import { Field, ObjectType, InputType, ID } from '@nestjs/graphql';
import { CreatePersonInput, FindPersonInput, Person } from '../common/schemas';

@ObjectType()
export class Employee extends Person {
  @Field()
  email: string;

  @Field()
  employeeNumber: number;
}

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
