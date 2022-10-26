import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { IVoteable } from '../interfaces/voteable.interface';

/*
 * This is the name of the type in the schema
 * Internally in the service we refer to it as a subject
 * It can refer to any item to which a vote in principle can be cast, ie. a comment, a submission, a user, etc.
 * */

@ObjectType({
  implements: () => [IVoteable],
})
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Entry implements IVoteable {
  @Field(() => ID)
  @Directive('@external')
  id: string;
}
