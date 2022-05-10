import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Address } from 'src/common/schemas';
import { Employee } from 'src/employee/employee.schema';
import { ProductOrder } from 'src/product-order/product-order.schema';

@ObjectType()
export class Order {
  @Field(() => ID)
  id: string;

  @Field()
  state: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';

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
}

@InputType()
export class CreateOrderInput {
  @Field(() => ID)
  id: string;

  @Field()
  state: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';

  @Field()
  totalPrice: number;

  @Field()
  address: Address;

  @Field()
  items: [ProductOrder];

  @Field()
  employee: Employee;
}

@InputType()
export class FindOrderInput {
  @Field(() => ID)
  id: string;
}
