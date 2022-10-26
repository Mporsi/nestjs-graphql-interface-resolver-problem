import { Field, ID, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class IVoteable {
  @Field(() => ID)
  id: string;
}
