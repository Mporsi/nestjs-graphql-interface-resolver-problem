import { Module } from '@nestjs/common';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { VoteModule } from './vote/vote.module';
import { Entry } from './vote/entities/entry.entity';

@Module({
  imports: [
    VoteModule,
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      useFactory: () => {
        return {
          autoSchemaFile: true,
          playground: true,
          buildSchemaOptions: {
            orphanedTypes: [Entry],
          },
        };
      },
    }),
  ],
})
export class AppModule {}
