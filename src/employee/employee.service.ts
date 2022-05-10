import { Injectable } from '@nestjs/common';
import employees from 'src/data/employees';
import { CreateEmployeeInput, Employee } from './employee.schema';

@Injectable()
export class EmployeeService {
  employees: Partial<Employee[]>;

  constructor() {
    this.employees = employees;
  }

  async findMany() {
    return this.employees;
  }

  async findById(id) {
    const employees = this.employees.filter((employee) => employee.id == id);

    if (employees) return employees[0];

    return null;
  }

  async createemployee(employee: CreateEmployeeInput) {
    this.employees = [employee, ...this.employees];
    return employee;
  }
}
