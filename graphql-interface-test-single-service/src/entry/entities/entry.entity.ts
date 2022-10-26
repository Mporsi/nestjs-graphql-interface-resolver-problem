import { ObjectType, Field, Int } from '@nestjs/graphql';
import {IVoteable} from "../../vote/interfaces/voteable.interface";

@ObjectType({
  implements:[IVoteable]
})
export class Entry implements IVoteable {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
  id: string;
}
