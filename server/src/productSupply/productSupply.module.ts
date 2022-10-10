import { Module } from "@nestjs/common";
import { ProductSupplyModuleBase } from "./base/productSupply.module.base";
import { ProductSupplyService } from "./productSupply.service";
import { ProductSupplyController } from "./productSupply.controller";
import { ProductSupplyResolver } from "./productSupply.resolver";

@Module({
  imports: [ProductSupplyModuleBase],
  controllers: [ProductSupplyController],
  providers: [ProductSupplyService, ProductSupplyResolver],
  exports: [ProductSupplyService],
})
export class ProductSupplyModule {}
