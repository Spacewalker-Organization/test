import { Module } from "@nestjs/common";
import { OrderTrackModuleBase } from "./base/orderTrack.module.base";
import { OrderTrackService } from "./orderTrack.service";
import { OrderTrackController } from "./orderTrack.controller";
import { OrderTrackResolver } from "./orderTrack.resolver";

@Module({
  imports: [OrderTrackModuleBase],
  controllers: [OrderTrackController],
  providers: [OrderTrackService, OrderTrackResolver],
  exports: [OrderTrackService],
})
export class OrderTrackModule {}
