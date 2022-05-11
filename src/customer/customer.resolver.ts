import { Resolver, Query } from '@nestjs/graphql';
import { Customer } from './customer.schema';
import { CustomerService } from './customer.service';

@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query(() => [Customer])
  async customers() {
    return this.customerService.findMany();
  }
}
