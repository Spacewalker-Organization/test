import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobsiteService } from "./jobsite.service";
import { JobsiteControllerBase } from "./base/jobsite.controller.base";

@swagger.ApiTags("jobsites")
@common.Controller("jobsites")
export class JobsiteController extends JobsiteControllerBase {
  constructor(
    protected readonly service: JobsiteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
