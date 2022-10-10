import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductStockServiceBase } from "./base/productStock.service.base";

@Injectable()
export class ProductStockService extends ProductStockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
