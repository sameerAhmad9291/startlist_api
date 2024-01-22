import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RaceField {
  @Field(() => ID, { description: 'The ID of the race field' })
  id: string;

  @Field({ description: 'The name of the race field' })
  name: string;

  @Field({ description: 'The value of the race field' })
  value: string;
}
