import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { JobsiteResolverBase } from "./base/jobsite.resolver.base";
import { Jobsite } from "./base/Jobsite";
import { JobsiteService } from "./jobsite.service";

@graphql.Resolver(() => Jobsite)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JobsiteResolver extends JobsiteResolverBase {
  constructor(
    protected readonly service: JobsiteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
