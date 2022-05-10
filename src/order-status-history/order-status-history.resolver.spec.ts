import { Test, TestingModule } from '@nestjs/testing';
import { OrderStatusHistoryResolver } from './order-status-history.resolver';

describe('OrderStatusHistoryResolver', () => {
  let resolver: OrderStatusHistoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderStatusHistoryResolver],
    }).compile();

    resolver = module.get<OrderStatusHistoryResolver>(OrderStatusHistoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
