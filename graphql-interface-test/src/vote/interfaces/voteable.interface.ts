import {Field, ID, InterfaceType} from "@nestjs/graphql";

import {Entry} from "../../entry/entities/entry.entity";

@InterfaceType({
})
export abstract class IVoteable {
    @Field(() => ID)
    id: string;
}