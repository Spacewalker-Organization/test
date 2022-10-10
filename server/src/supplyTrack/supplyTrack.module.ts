import { Module } from "@nestjs/common";
import { SupplyTrackModuleBase } from "./base/supplyTrack.module.base";
import { SupplyTrackService } from "./supplyTrack.service";
import { SupplyTrackController } from "./supplyTrack.controller";
import { SupplyTrackResolver } from "./supplyTrack.resolver";

@Module({
  imports: [SupplyTrackModuleBase],
  controllers: [SupplyTrackController],
  providers: [SupplyTrackService, SupplyTrackResolver],
  exports: [SupplyTrackService],
})
export class SupplyTrackModule {}
