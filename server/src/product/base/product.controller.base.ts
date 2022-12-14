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
import { ProductService } from "../product.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductCreateInput } from "./ProductCreateInput";
import { ProductWhereInput } from "./ProductWhereInput";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductUpdateInput } from "./ProductUpdateInput";
import { Product } from "./Product";
import { ProductOrderFindManyArgs } from "../../productOrder/base/ProductOrderFindManyArgs";
import { ProductOrder } from "../../productOrder/base/ProductOrder";
import { ProductOrderWhereUniqueInput } from "../../productOrder/base/ProductOrderWhereUniqueInput";
import { ProductStockFindManyArgs } from "../../productStock/base/ProductStockFindManyArgs";
import { ProductStock } from "../../productStock/base/ProductStock";
import { ProductStockWhereUniqueInput } from "../../productStock/base/ProductStockWhereUniqueInput";
import { ProductSupplyFindManyArgs } from "../../productSupply/base/ProductSupplyFindManyArgs";
import { ProductSupply } from "../../productSupply/base/ProductSupply";
import { ProductSupplyWhereUniqueInput } from "../../productSupply/base/ProductSupplyWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductControllerBase {
  constructor(
    protected readonly service: ProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Product })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ProductCreateInput): Promise<Product> {
    return await this.service.create({
      data: {
        ...data,

        manufacturer: {
          connect: data.manufacturer,
        },
      },
      select: {
        createdAt: true,
        id: true,

        manufacturer: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Product] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ProductFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Product[]> {
    const args = plainToClass(ProductFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        manufacturer: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        manufacturer: {
          select: {
            id: true,
          },
        },

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
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() data: ProductUpdateInput
  ): Promise<Product | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          manufacturer: {
            connect: data.manufacturer,
          },
        },
        select: {
          createdAt: true,
          id: true,

          manufacturer: {
            select: {
              id: true,
            },
          },

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
    resource: "Product",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          manufacturer: {
            select: {
              id: true,
            },
          },

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
    resource: "ProductOrder",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/productOrders")
  @ApiNestedQuery(ProductOrderFindManyArgs)
  async findManyProductOrders(
    @common.Req() request: Request,
    @common.Param() params: ProductWhereUniqueInput
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
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/productOrders")
  async connectProductOrders(
    @common.Param() params: ProductWhereUniqueInput,
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
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/productOrders")
  async updateProductOrders(
    @common.Param() params: ProductWhereUniqueInput,
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
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/productOrders")
  async disconnectProductOrders(
    @common.Param() params: ProductWhereUniqueInput,
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
    @common.Param() params: ProductWhereUniqueInput
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
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/productStocks")
  async connectProductStocks(
    @common.Param() params: ProductWhereUniqueInput,
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
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/productStocks")
  async updateProductStocks(
    @common.Param() params: ProductWhereUniqueInput,
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
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/productStocks")
  async disconnectProductStocks(
    @common.Param() params: ProductWhereUniqueInput,
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
    @common.Param() params: ProductWhereUniqueInput
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
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/productSupplies")
  async connectProductSupplies(
    @common.Param() params: ProductWhereUniqueInput,
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
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/productSupplies")
  async updateProductSupplies(
    @common.Param() params: ProductWhereUniqueInput,
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
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/productSupplies")
  async disconnectProductSupplies(
    @common.Param() params: ProductWhereUniqueInput,
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
