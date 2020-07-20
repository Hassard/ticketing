import { Publisher, OrderCancelledEvent, Subjects } from '@rhtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}