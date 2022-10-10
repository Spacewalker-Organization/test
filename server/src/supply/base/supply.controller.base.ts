/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SupplyService } from "../supply.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SupplyCreateInput } from "./SupplyCreateInput";
import { SupplyWhereInput } from "./SupplyWhereInput";
import { SupplyWhereUniqueInput } from "./SupplyWhereUniqueInput";
import { SupplyFindManyArgs } from "./SupplyFindManyArgs";
import { SupplyUpdateInput } from "./SupplyUpdateInput";
import { Supply } from "./Supply";
import { ProductSupplyFindManyArgs } from "../../productSupply/base/ProductSupplyFindManyArgs";
import { ProductSupply } from "../../productSupply/base/ProductSupply";
import { ProductSupplyWhereUniqueInput } from "../../productSupply/base/ProductSupplyWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SupplyControllerBase {
  constructor(
    protected readonly service: SupplyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Supply",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Supply })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: SupplyCreateInput): Promise<Supply> {
    return await this.service.create({
      data: {
        ...data,

        supplyTo: data.supplyTo
          ? {
              connect: data.supplyTo,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        supplyTo: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Supply",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Supply] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(SupplyFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Supply[]> {
    const args = plainToClass(SupplyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        supplyTo: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Supply",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Supply })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SupplyWhereUniqueInput
  ): Promise<Supply | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        supplyTo: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Supply",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Supply })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SupplyWhereUniqueInput,
    @common.Body() data: SupplyUpdateInput
  ): Promise<Supply | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          supplyTo: data.supplyTo
            ? {
                connect: data.supplyTo,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          supplyTo: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Supply",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Supply })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SupplyWhereUniqueInput
  ): Promise<Supply | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          supplyTo: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProductSupply",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/productSupplies")
  @ApiNestedQuery(ProductSupplyFindManyArgs)
  async findManyProductSupplies(
    @common.Req() request: Request,
    @common.Param() params: SupplyWhereUniqueInput
  ): Promise<ProductSupply[]> {
    const query = plainToClass(ProductSupplyFindManyArgs, request.query);
    const results = await this.service.findProductSupplies(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        price: true,

        product: {
          select: {
            id: true,
          },
        },

        productCount: true,

        supplier: {
          select: {
            id: true,
          },
        },

        supply: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Supply",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/productSupplies")
  async connectProductSupplies(
    @common.Param() params: SupplyWhereUniqueInput,
    @common.Body() body: ProductSupplyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productSupplies: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Supply",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/productSupplies")
  async updateProductSupplies(
    @common.Param() params: SupplyWhereUniqueInput,
    @common.Body() body: ProductSupplyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productSupplies: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Supply",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/productSupplies")
  async disconnectProductSupplies(
    @common.Param() params: SupplyWhereUniqueInput,
    @common.Body() body: ProductSupplyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productSupplies: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}