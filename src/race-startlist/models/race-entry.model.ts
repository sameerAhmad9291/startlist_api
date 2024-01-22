import { Field, ID, ObjectType } from '@nestjs/graphql';
import { RaceField } from './race-field.model';

@ObjectType({ description: 'Details of a race entry' })
export class RaceEntry {
  @Field(() => ID, { description: 'The ID of the race entry' })
  id: string;

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

  @Field({ description: 'The creation date of the race entry', nullable: true })
  createdAt: string;

  @Field({
    description: 'The last update date of the race entry',
    nullable: true,
  })
  updatedAt: string;

  @Field(() => [RaceField], {
    description: 'List of additional fields for the race entry',
  })
  fields: RaceField[];
}
