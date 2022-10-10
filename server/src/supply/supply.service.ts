import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SupplyServiceBase } from "./base/supply.service.base";

@Injectable()
export class SupplyService extends SupplyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
