import { Injectable } from "@nestjs/common";
import { FilterRaceStartlistArgs } from "./dto/search-filter.args";
import { RaceStartlistRepo } from "../common/repositories/race-startlist.repo";
import { RaceEntryInput } from "./dto/race-entry.input";

@Injectable()
export class RaceStartlistService {
  constructor(private raceRepo: RaceStartlistRepo) {}
  async getAll() {
    return this.raceRepo.getAll();
  }

  async add(input: RaceEntryInput) {
    return this.raceRepo.addNew(input);
  }

  async paginatedRaceStartlist(page: number, pageSize: number) {
    const raceEntries = await this.raceRepo.getAll();
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    /// picking specific page from array.
    return raceEntries.slice(startIndex, endIndex);
  }

  async filterByParam(searchParams: FilterRaceStartlistArgs) {
    const raceEntries = await this.raceRepo.getAll();

    /// mapping fields into parent object. So it easiler for searching.
    const transformedArray = raceEntries.map((entry) => {
      const extendedFields = entry.fields.reduce((obj, field) => {
        // considering the id should be unique against each field.
        obj[field.id] = field.value;
        return obj;
      }, {} as FilterRaceStartlistArgs);

      return Object.assign(entry, extendedFields);
    });

    /// checking search filter by looping over search params
    return transformedArray.filter((entry) => {
      const isMatched = Object.keys(searchParams).every(
        (key) => entry[key] === searchParams[key]
      );

      return isMatched;
    });
  }
}
