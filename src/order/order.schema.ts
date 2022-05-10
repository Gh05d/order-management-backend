import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Address, ProductOrder } from 'src/common/schemas';
import { Customer } from 'src/customer/customer.schema';
import { Employee } from 'src/employee/employee.schema';

@ObjectType()
export class Order {
  @Field(() => ID)
  id?: string;

  @Field()
  state?: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';

  @Field()
  totalPrice: number;

  @Field()
  address: Address;

  @Field()
  updated?: Date;

  @Field()
  created?: Date;

  @Field()
  items: [ProductOrder];

  @Field()
  employee: Employee;

  @Field()
  customer: Customer;
}

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
