import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RaceEntry } from './models/race-entry.model';
import { RaceStartlistService } from './race-startlist.service';
import { GetPaginationArgs } from './dto/get-pagination.args';
import { FilterRaceStartlistArgs } from './dto/search-filter.args';
import { RaceEntryInput } from './dto/race-entry.input';

@Resolver(() => RaceEntry)
export class RaceStartlistResolver {
  constructor(private raceService: RaceStartlistService) {}

  @Query(() => [RaceEntry])
  raceStartlist() {
    return this.raceService.getAll();
  }

  @Query(() => [RaceEntry])
  filterRaceStartlist(@Args() params: FilterRaceStartlistArgs) {
    return this.raceService.filterByParam(params);
  }

  @Mutation(() => RaceEntry)
  addRaceStartlistEntry(@Args('raceEntry') raceEntry: RaceEntryInput) {
    return this.raceService.add(raceEntry);
  }

  @Query(() => [RaceEntry])
  paginatedRaceStartlist(@Args() { page, pageSize }: GetPaginationArgs) {
    return this.raceService.paginatedRaceStartlist(page, pageSize);
  }
}
