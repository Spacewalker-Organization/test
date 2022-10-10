import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SupplyTrackServiceBase } from "./base/supplyTrack.service.base";

@Injectable()
export class SupplyTrackService extends SupplyTrackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
