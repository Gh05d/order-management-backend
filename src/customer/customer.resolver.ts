import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Customer } from './customer.schema';
import { CustomerService } from './customer.service';

@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query(() => [Customer], { name: 'customers' })
  async getCustomers() {
    return this.customerService.fetchMany();
  }

  @Query(() => Customer, { name: 'customer' })
  async getCustomer(@Args('id', { type: () => Int }) id: number) {
    return this.customerService.findById(id);
  }
}
