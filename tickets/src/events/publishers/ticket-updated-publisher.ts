import { Publisher, Subjects, TicketUpdatedEvent } from '@rhtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}