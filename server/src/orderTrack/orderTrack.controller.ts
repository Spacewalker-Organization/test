import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderTrackService } from "./orderTrack.service";
import { OrderTrackControllerBase } from "./base/orderTrack.controller.base";

@swagger.ApiTags("orderTracks")
@common.Controller("orderTracks")
export class OrderTrackController extends OrderTrackControllerBase {
  constructor(
    protected readonly service: OrderTrackService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
