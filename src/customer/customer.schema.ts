import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Address, CreatePersonInput, Person } from '../common/schemas';

@ObjectType()
export class Customer extends Person {
  @Field(() => [Address])
  addresses: Address[];

  @Field()
  firstOrder?: Date;
}

@InputType()
export class CreateCustomerInput extends CreatePersonInput {
  @Field(() => [Address])
  addresses: Address[] | [];

  @Field()
  firstOrder?: Date;
}
