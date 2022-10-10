import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SupplyResolverBase } from "./base/supply.resolver.base";
import { Supply } from "./base/Supply";
import { SupplyService } from "./supply.service";

@graphql.Resolver(() => Supply)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SupplyResolver extends SupplyResolverBase {
  constructor(
    protected readonly service: SupplyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
