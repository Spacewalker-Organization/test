import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductStockService } from "./productStock.service";
import { ProductStockControllerBase } from "./base/productStock.controller.base";

@swagger.ApiTags("productStocks")
@common.Controller("productStocks")
export class ProductStockController extends ProductStockControllerBase {
  constructor(
    protected readonly service: ProductStockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
