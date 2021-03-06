import { Publisher, Subjects, TicketCreatedEvent } from '@rhtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}