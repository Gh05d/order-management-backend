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
  employees: Partial<Employee[]>;

  constructor(
    @InjectModel(Employee.name)
    private employeeModel: Model<EmployeeDocument>,
  ) {
    this.employees = employees;
  }

  async findMany() {
    return this.employeeModel.find();
  }

  async findById(id) {
    return this.employeeModel.findById(id);
  }

  async createemployee(employee: CreateEmployeeInput) {}
}
