import { Module } from "@nestjs/common";
import { JobsiteModuleBase } from "./base/jobsite.module.base";
import { JobsiteService } from "./jobsite.service";
import { JobsiteController } from "./jobsite.controller";
import { JobsiteResolver } from "./jobsite.resolver";

@Module({
  imports: [JobsiteModuleBase],
  controllers: [JobsiteController],
  providers: [JobsiteService, JobsiteResolver],
  exports: [JobsiteService],
})
export class JobsiteModule {}
