import { Injectable } from '@nestjs/common';
import customers from 'src/data/customers';
import { CreateCustomerInput, Customer } from './customer.schema';

@Injectable()
export class CustomerService {
  customers: Partial<Customer[]>;

  constructor() {
    this.customers = customers;
  }

  async findMany() {
    return this.customers;
  }

  async findById(id) {
    const customers = this.customers.filter((customer) => customer.id == id);

    if (customers) return customers[0];

    return null;
  }

  async createCustomer(customer: CreateCustomerInput) {
    this.customers = [customer, ...this.customers];
    return customer;
  }
}
