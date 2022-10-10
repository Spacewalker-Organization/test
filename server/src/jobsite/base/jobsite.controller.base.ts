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
import { JobsiteService } from "../jobsite.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { JobsiteCreateInput } from "./JobsiteCreateInput";
import { JobsiteWhereInput } from "./JobsiteWhereInput";
import { JobsiteWhereUniqueInput } from "./JobsiteWhereUniqueInput";
import { JobsiteFindManyArgs } from "./JobsiteFindManyArgs";
import { JobsiteUpdateInput } from "./JobsiteUpdateInput";
import { Jobsite } from "./Jobsite";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ProductOrderFindManyArgs } from "../../productOrder/base/ProductOrderFindManyArgs";
import { ProductOrder } from "../../productOrder/base/ProductOrder";
import { ProductOrderWhereUniqueInput } from "../../productOrder/base/ProductOrderWhereUniqueInput";
import { ProductStockFindManyArgs } from "../../productStock/base/ProductStockFindManyArgs";
import { ProductStock } from "../../productStock/base/ProductStock";
import { ProductStockWhereUniqueInput } from "../../productStock/base/ProductStockWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class JobsiteControllerBase {
  constructor(
    protected readonly service: JobsiteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Jobsite",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Jobsite })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: JobsiteCreateInput): Promise<Jobsite> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Jobsite",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Jobsite] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(JobsiteFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Jobsite[]> {
    const args = plainToClass(JobsiteFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Jobsite",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Jobsite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: JobsiteWhereUniqueInput
  ): Promise<Jobsite | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
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
    resource: "Jobsite",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Jobsite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: JobsiteWhereUniqueInput,
    @common.Body() data: JobsiteUpdateInput
  ): Promise<Jobsite | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
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
    resource: "Jobsite",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Jobsite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: JobsiteWhereUniqueInput
  ): Promise<Jobsite | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
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
    resource: "Order",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  async findManyOrders(
    @common.Req() request: Request,
    @common.Param() params: JobsiteWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        createdAt: true,

        deliverTo: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
    resource: "Jobsite",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/orders")
  async connectOrders(
    @common.Param() params: JobsiteWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
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
    resource: "Jobsite",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/orders")
  async updateOrders(
    @common.Param() params: JobsiteWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
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
    resource: "Jobsite",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/orders")
  async disconnectOrders(
    @common.Param() params: JobsiteWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProductOrder",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/productOrders")
  @ApiNestedQuery(ProductOrderFindManyArgs)
  async findManyProductOrders(
    @common.Req() request: Request,
    @common.Param() params: JobsiteWhereUniqueInput
  ): Promise<ProductOrder[]> {
    const query = plainToClass(ProductOrderFindManyArgs, request.query);
    const results = await this.service.findProductOrders(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        itemCount: true,

        jobsite: {
          select: {
            id: true,
          },
        },

        order: {
          select: {
            id: true,
          },
        },

        product: {
          select: {
            id: true,
          },
        },

        rentPrice: true,
        sourcedFrom: true,

        supplier: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        warehouse: {
          select: {
            id: true,
          },
        },
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
    resource: "Jobsite",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/productOrders")
  async connectProductOrders(
    @common.Param() params: JobsiteWhereUniqueInput,
    @common.Body() body: ProductOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productOrders: {
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
    resource: "Jobsite",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/productOrders")
  async updateProductOrders(
    @common.Param() params: JobsiteWhereUniqueInput,
    @common.Body() body: ProductOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productOrders: {
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
    resource: "Jobsite",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/productOrders")
  async disconnectProductOrders(
    @common.Param() params: JobsiteWhereUniqueInput,
    @common.Body() body: ProductOrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productOrders: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ProductStock",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/productStocks")
  @ApiNestedQuery(ProductStockFindManyArgs)
  async findManyProductStocks(
    @common.Req() request: Request,
    @common.Param() params: JobsiteWhereUniqueInput
  ): Promise<ProductStock[]> {
    const query = plainToClass(ProductStockFindManyArgs, request.query);
    const results = await this.service.findProductStocks(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        itemCount: true,

        jobsite: {
          select: {
            id: true,
          },
        },

        product: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        warehouse: {
          select: {
            id: true,
          },
        },
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
    resource: "Jobsite",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/productStocks")
  async connectProductStocks(
    @common.Param() params: JobsiteWhereUniqueInput,
    @common.Body() body: ProductStockWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productStocks: {
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
    resource: "Jobsite",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/productStocks")
  async updateProductStocks(
    @common.Param() params: JobsiteWhereUniqueInput,
    @common.Body() body: ProductStockWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productStocks: {
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
    resource: "Jobsite",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/productStocks")
  async disconnectProductStocks(
    @common.Param() params: JobsiteWhereUniqueInput,
    @common.Body() body: ProductStockWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      productStocks: {
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
