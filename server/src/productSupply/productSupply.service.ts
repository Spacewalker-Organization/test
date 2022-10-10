import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductSupplyServiceBase } from "./base/productSupply.service.base";

@Injectable()
export class ProductSupplyService extends ProductSupplyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
