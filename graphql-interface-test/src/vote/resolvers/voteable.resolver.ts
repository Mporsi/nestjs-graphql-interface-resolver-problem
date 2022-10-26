import {Parent, ResolveField, Resolver} from "@nestjs/graphql";
import {IVoteable} from "../interfaces/voteable.interface";

@Resolver(()=>IVoteable)
export class VoteableResolver {

    @ResolveField(()=>String)
    test(@Parent() parent:IVoteable){
        return "test"
    }
}