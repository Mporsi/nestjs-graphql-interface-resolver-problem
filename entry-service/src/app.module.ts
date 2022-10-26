import { Module } from '@nestjs/common';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { EntryModule } from './entry/entry.module';

@Module({
  imports: [
    EntryModule,
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      useFactory: () => {
        return {
          autoSchemaFile: true,
          playground: true,
        };
      },
    }),
  ],

  providers: [],
})
export class AppModule {}
