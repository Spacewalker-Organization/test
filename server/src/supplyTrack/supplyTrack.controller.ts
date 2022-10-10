import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SupplyTrackService } from "./supplyTrack.service";
import { SupplyTrackControllerBase } from "./base/supplyTrack.controller.base";

@swagger.ApiTags("supplyTracks")
@common.Controller("supplyTracks")
export class SupplyTrackController extends SupplyTrackControllerBase {
  constructor(
    protected readonly service: SupplyTrackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
