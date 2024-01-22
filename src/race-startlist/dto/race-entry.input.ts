import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
class RaceFieldInput {
  @Field(() => ID, { description: 'The ID of the race field' })
  id: string;

  @Field({ description: 'The name of the race field' })
  name: string;

  @Field({ description: 'The value of the race field' })
  value: string;
}

@InputType()
export class RaceEntryInput {
  @Field({ description: 'The ID of the event' })
  eventId: string;

  @Field({ description: 'The ID of the race' })
  raceId: string;

  @Field({ description: 'The ID of the ticket' })
  ticketId: string;

  @Field({ description: 'The title of the event' })
  eventTitle: string;

  @Field({ description: 'The title of the race' })
  raceTitle: string;

  @Field({ description: 'The title of the ticket' })
  ticketTitle: string;

  @Field(() => [RaceFieldInput], {
    description: 'List of additional fields for the race entry',
  })
  fields: RaceFieldInput[];
}
