import { Module } from '@nestjs/common';
import {VoteModule} from "./vote/vote.module";
import { EntryModule } from './entry/entry.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [VoteModule, EntryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
      autoSchemaFile: true,
  }),],
})
export class AppModule {}
