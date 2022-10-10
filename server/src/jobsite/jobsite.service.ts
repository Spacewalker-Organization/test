import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { JobsiteServiceBase } from "./base/jobsite.service.base";

@Injectable()
export class JobsiteService extends JobsiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
