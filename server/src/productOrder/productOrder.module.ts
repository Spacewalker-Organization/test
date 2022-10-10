import { Module } from "@nestjs/common";
import { ProductOrderModuleBase } from "./base/productOrder.module.base";
import { ProductOrderService } from "./productOrder.service";
import { ProductOrderController } from "./productOrder.controller";
import { ProductOrderResolver } from "./productOrder.resolver";

@Module({
  imports: [ProductOrderModuleBase],
  controllers: [ProductOrderController],
  providers: [ProductOrderService, ProductOrderResolver],
  exports: [ProductOrderService],
})
export class ProductOrderModule {}
