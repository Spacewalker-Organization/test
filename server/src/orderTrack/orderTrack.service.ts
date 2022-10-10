import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OrderTrackServiceBase } from "./base/orderTrack.service.base";

@Injectable()
export class OrderTrackService extends OrderTrackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
