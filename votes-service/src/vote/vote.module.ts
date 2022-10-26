import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteResolver } from './resolvers/vote.resolver';
import { VoteableResolver } from './resolvers/voteable.resolver';

@Module({
  providers: [VoteResolver, VoteService, VoteableResolver],
})
export class VoteModule {}
