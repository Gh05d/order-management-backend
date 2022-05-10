import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Employee } from 'src/employee/employee.schema';
import { Order } from 'src/order/order.schema';

@ObjectType()
export class OrderStatusHistory {
  @Field(() => ID)
  id?: string;

  @Field()
  state: 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';

  @Field()
  updated?: Date;

  @Field()
  updatedBy: Employee;

  @Field()
  order: Order;
}

@InputType()
export class CreateOrderStatusHistoryInput {
  @Field()
  state: 'IN_PROGRESS' | 'COMPLETE';

  @Field()
  updatedBy: Employee;

  @Field()
  order: Order;
}

@InputType()
export class FindOrderStatusHistoryInput {
  @Field(() => ID)
  id: string;

  @Field(() => [ID])
  status: Order[];
}
