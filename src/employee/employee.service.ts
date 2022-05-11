import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateEmployeeInput,
  Employee,
  EmployeeDocument,
} from './employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel: Model<EmployeeDocument>,
  ) {}

  async fetchMany(limit): Promise<Employee[]> {
    return this.employeeModel.find().limit(limit).lean();
  }

  async findById(id): Promise<Employee> {
    return this.employeeModel.findById(id);
  }

  async createemployee(employee: CreateEmployeeInput): Promise<Employee> {
    return this.employeeModel.create(employee);
  }
}
