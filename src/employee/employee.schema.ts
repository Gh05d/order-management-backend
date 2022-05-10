import { Field, ObjectType, InputType, ID } from '@nestjs/graphql';
import { CreatePersonInput, FindPersonInput, Person } from '../common/schemas';

@ObjectType()
export class Employee extends Person {
  @Field()
  location: string;

  @Field()
  employeeNumber: number;
}

@InputType()
export class CreateEmployeeInput extends CreatePersonInput {
  @Field()
  location: string;

  @Field()
  employeeNumber: number;
}

@InputType()
export class FindEmployeeInput extends FindPersonInput {
  @Field(() => ID)
  id: string;

  @Field(() => [ID])
  location: [string];

  @Field(() => ID)
  employeeNumber: string;
}
