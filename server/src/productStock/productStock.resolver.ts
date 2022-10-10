import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductStockResolverBase } from "./base/productStock.resolver.base";
import { ProductStock } from "./base/ProductStock";
import { ProductStockService } from "./productStock.service";

@graphql.Resolver(() => ProductStock)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductStockResolver extends ProductStockResolverBase {
  constructor(
    protected readonly service: ProductStockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
