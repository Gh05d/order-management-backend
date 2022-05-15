import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from 'src/employee/employee.schema';
import {
  CreateOrderInput,
  Order,
  OrderDocument,
  UpdateStatusInput,
} from './order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<OrderDocument>,
    @InjectModel(Employee.name)
    private employeeModel: Model<EmployeeDocument>,
  ) {}

  async fetchMany(offset = 0, limit = 50): Promise<Order[]> {
    return this.orderModel.find().skip(offset).limit(limit).lean();
  }

  async findById(id: string): Promise<Order> {
    return this.orderModel.findById(id).lean();
  }

  async createOrder(order: CreateOrderInput): Promise<Order> {
    await this.orderModel.init();
    const newOrder = new this.orderModel({ ...order, status: 'OPEN' });

    return await newOrder.save();
  }

  async updateStatus(data: UpdateStatusInput): Promise<Order> {
    const order = await this.orderModel.findById(data._id);

    if (order.status == 'COMPLETE') {
      throw new Error("COMPLETE can't transition any more");
    }

    if (order.status == 'OPEN' && data.status != 'IN_PROGRESS') {
      throw new Error('OPEN can only transition to IN_PROGRESS');
    }

    if (order.status == 'IN_PROGRESS' && data.status != 'COMPLETE') {
      throw new Error('IN_PROGRESS can only transition to COMPLETE');
    }

    if (data.status == 'IN_PROGRESS' && !order.employee) {
      throw new Error(
        'An order needs to be assigned to an employee to transition to IN_PROGRESS',
      );
    }

    return this.orderModel.findByIdAndUpdate(
      data._id,
      { status: data.status },
      { returnDocument: 'after' },
    );
  }

  async assignEmployee(orderID: string, employeeID: string): Promise<Order> {
    const employee = await this.employeeModel.findById(employeeID).lean();

    if (!employee) {
      throw new Error(`Couldn't find an employee with id ${employeeID}`);
    }

    return this.orderModel.findByIdAndUpdate(
      orderID,
      {
        employee: {
          _id: employee._id,
          firstName: employee.firstName,
          lastName: employee.lastName,
        },
      },
      { returnDocument: 'after' },
    );
  }
}
