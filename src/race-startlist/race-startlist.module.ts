import { Module } from '@nestjs/common';
import { RaceStartlistResolver } from './race-startlist.resolver';
import { RaceStartlistService } from './race-startlist.service';
import { RaceStartlistRepo } from '../common/repositories/race-startlist.repo';

@Module({
  providers: [RaceStartlistService, RaceStartlistRepo, RaceStartlistResolver],
})
export class RaceStartlistModule {}
