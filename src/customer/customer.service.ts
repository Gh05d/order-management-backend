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

  async findMany(): Promise<Customer[]> {
    return this.customerModel.find();
  }

  async findById(id): Promise<Customer> {
    return this.customerModel.findById(id);
  }

  async createCustomer(customer: CreateCustomerInput): Promise<Customer> {
    return this.customerModel.create(customer);
  }
}
