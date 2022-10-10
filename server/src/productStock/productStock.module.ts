import { Module } from "@nestjs/common";
import { ProductStockModuleBase } from "./base/productStock.module.base";
import { ProductStockService } from "./productStock.service";
import { ProductStockController } from "./productStock.controller";
import { ProductStockResolver } from "./productStock.resolver";

@Module({
  imports: [ProductStockModuleBase],
  controllers: [ProductStockController],
  providers: [ProductStockService, ProductStockResolver],
  exports: [ProductStockService],
})
export class ProductStockModule {}
