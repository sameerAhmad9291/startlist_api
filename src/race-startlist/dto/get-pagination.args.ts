import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetPaginationArgs {
  @Field({ nullable: false })
  page: number;

  @Field({ nullable: false })
  pageSize: number;
}
