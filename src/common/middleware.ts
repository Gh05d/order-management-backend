import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

export const statusMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const status = await next();

  if (ctx.info.operation.operation == 'mutation') {
    return status;
  }

  if (ctx.source.status == 'COMPLETE') {
    throw new Error("COMPLETE can't transition any more");
  }

  if (!ctx.source.status && status != 'OPEN') {
    throw new Error('Initial status must be OPEN');
  }

  if (ctx.source.status == 'OPEN' && status != 'IN_PROGRESS') {
    throw new Error('OPEN can only transition to IN_PROGRESS');
  }

  if (ctx.source.status == 'IN_PROGRESS' && status != 'COMPLETE') {
    throw new Error('IN_PROGRESS can only transition to COMPLETE');
  }

  if (status == 'IN_PROGRESS' && !ctx.source.employee) {
    throw new Error(
      'An order needs to be assigned to an employee to transition to IN_PROGRESS',
    );
  }

  return status;
};
