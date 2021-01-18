import { Subjects, Publisher, PaymentCreatedEvent } from '@rhtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}