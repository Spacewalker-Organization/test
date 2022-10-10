import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductOrderResolverBase } from "./base/productOrder.resolver.base";
import { ProductOrder } from "./base/ProductOrder";
import { ProductOrderService } from "./productOrder.service";

@graphql.Resolver(() => ProductOrder)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductOrderResolver extends ProductOrderResolverBase {
  constructor(
    protected readonly service: ProductOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
