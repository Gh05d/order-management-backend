import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import customers from 'src/data/customers';
import {
  CreateCustomerInput,
  Customer,
  CustomerDocument,
} from './customer.schema';

@Injectable()
export class CustomerService {
  customers: Partial<Customer[]>;

  constructor(
    @InjectModel(Customer.name)
    private customerModel: Model<CustomerDocument>,
  ) {
    this.customers = customers;
  }

  async findMany() {
    return this.customerModel.find();
  }

  async findById(id) {
    return this.customerModel.findById(id);
  }

  async createCustomer(customer: CreateCustomerInput) {
    this.customers = [customer, ...this.customers];
    return customer;
  }
}
