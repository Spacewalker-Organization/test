import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductOrderService } from "./productOrder.service";
import { ProductOrderControllerBase } from "./base/productOrder.controller.base";

@swagger.ApiTags("productOrders")
@common.Controller("productOrders")
export class ProductOrderController extends ProductOrderControllerBase {
  constructor(
    protected readonly service: ProductOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
