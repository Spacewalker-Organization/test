import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductSupplyService } from "./productSupply.service";
import { ProductSupplyControllerBase } from "./base/productSupply.controller.base";

@swagger.ApiTags("productSupplies")
@common.Controller("productSupplies")
export class ProductSupplyController extends ProductSupplyControllerBase {
  constructor(
    protected readonly service: ProductSupplyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
