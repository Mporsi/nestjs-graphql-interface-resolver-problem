import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Entry {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
  @Field(() => ID)
  id: string;
}
