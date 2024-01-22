import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class FilterRaceStartlistArgs {
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  emailAddress?: string;

  @Field(() => String, { nullable: true })
  gender?: string;

  @Field(() => String, { nullable: true })
  dateOfBirth?: string;

  @Field(() => String, { nullable: true })
  addressLine1: string;

  @Field(() => String, { nullable: true })
  addressLine2?: string;

  @Field(() => String, { nullable: true })
  addressCity: string;

  @Field(() => String, { nullable: true })
  addressPostcode: string;

  @Field(() => String, { nullable: true })
  addressCountry: string;

  @Field(() => String, { nullable: true })
  phone: string;
}
