import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OrderTrackResolverBase } from "./base/orderTrack.resolver.base";
import { OrderTrack } from "./base/OrderTrack";
import { OrderTrackService } from "./orderTrack.service";

@graphql.Resolver(() => OrderTrack)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrderTrackResolver extends OrderTrackResolverBase {
  constructor(
    protected readonly service: OrderTrackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
