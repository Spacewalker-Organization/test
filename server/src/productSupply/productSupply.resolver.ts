import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductSupplyResolverBase } from "./base/productSupply.resolver.base";
import { ProductSupply } from "./base/ProductSupply";
import { ProductSupplyService } from "./productSupply.service";

@graphql.Resolver(() => ProductSupply)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductSupplyResolver extends ProductSupplyResolverBase {
  constructor(
    protected readonly service: ProductSupplyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
