import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Employee } from './employee.schema';
import { EmployeeService } from './employee.service';

@Resolver()
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query((returns) => [Employee], { name: 'employees' })
  async getEmployees(@Args('limit', { type: () => Int }) limit?: number) {
    return this.employeeService.fetchMany(limit);
  }

  @Query((returns) => Employee, { name: 'employee' })
  async getEmployee(@Args('id', { type: () => Int }) id: number) {
    return this.employeeService.findById(id);
  }
}
