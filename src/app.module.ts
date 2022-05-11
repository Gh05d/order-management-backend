import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderStatusHistoryModule } from './order-status-history/order-status-history.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `${process.env.DATABASE_PREFIX}${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}${process.env.DATABASE_ADDRESS}`,
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
    }),
    ProductModule,
    OrderModule,
    CustomerModule,
    EmployeeModule,
    OrderStatusHistoryModule,
  ],
  providers: [],
})
export class AppModule {}
