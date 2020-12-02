import { Publisher, ExpirationCompleteEvent, Subjects } from '@rhtickets/common';

export class ExpirationCompleterPublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}