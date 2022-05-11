import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateCustomerInput,
  Customer,
  CustomerDocument,
} from './customer.schema';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name)
    private customerModel: Model<CustomerDocument>,
  ) {}

  async fetchMany(limit = 10): Promise<Customer[]> {
    return this.customerModel.find().limit(limit).lean();
  }

  async findById(id): Promise<Customer> {
    return this.customerModel.findById(id);
  }

  async createCustomer(customer: CreateCustomerInput): Promise<Customer> {
    return this.customerModel.create(customer);
  }
}
