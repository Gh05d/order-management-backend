import { Query, Resolver } from '@nestjs/graphql';
import { Employee } from './employee.schema';
import { EmployeeService } from './employee.service';

@Resolver()
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee])
  async employees() {
    return this.employeeService.findMany();
  }
}
