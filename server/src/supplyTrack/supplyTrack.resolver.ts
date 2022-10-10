import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SupplyTrackResolverBase } from "./base/supplyTrack.resolver.base";
import { SupplyTrack } from "./base/SupplyTrack";
import { SupplyTrackService } from "./supplyTrack.service";

@graphql.Resolver(() => SupplyTrack)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SupplyTrackResolver extends SupplyTrackResolverBase {
  constructor(
    protected readonly service: SupplyTrackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
