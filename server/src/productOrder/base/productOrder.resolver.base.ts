/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateProductOrderArgs } from "./CreateProductOrderArgs";
import { UpdateProductOrderArgs } from "./UpdateProductOrderArgs";
import { DeleteProductOrderArgs } from "./DeleteProductOrderArgs";
import { ProductOrderFindManyArgs } from "./ProductOrderFindManyArgs";
import { ProductOrderFindUniqueArgs } from "./ProductOrderFindUniqueArgs";
import { ProductOrder } from "./ProductOrder";
import { OrderTrackFindManyArgs } from "../../orderTrack/base/OrderTrackFindManyArgs";
import { OrderTrack } from "../../orderTrack/base/OrderTrack";
import { Jobsite } from "../../jobsite/base/Jobsite";
import { Order } from "../../order/base/Order";
import { Product } from "../../product/base/Product";
import { Supplier } from "../../supplier/base/Supplier";
import { Warehouse } from "../../warehouse/base/Warehouse";
import { ProductOrderService } from "../productOrder.service";

@graphql.Resolver(() => ProductOrder)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductOrderResolverBase {
  constructor(
    protected readonly service: ProductOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductOrder",
    action: "read",
    possession: "any",
  })
  async _productOrdersMeta(
    @graphql.Args() args: ProductOrderFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ProductOrder])
  @nestAccessControl.UseRoles({
    resource: "ProductOrder",
    action: "read",
    possession: "any",
  })
  async productOrders(
    @graphql.Args() args: ProductOrderFindManyArgs
  ): Promise<ProductOrder[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProductOrder, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductOrder",
    action: "read",
    possession: "own",
  })
  async productOrder(
    @graphql.Args() args: ProductOrderFindUniqueArgs
  ): Promise<ProductOrder | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductOrder)
  @nestAccessControl.UseRoles({
    resource: "ProductOrder",
    action: "create",
    possession: "any",
  })
  async createProductOrder(
    @graphql.Args() args: CreateProductOrderArgs
  ): Promise<ProductOrder> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        jobsite: args.data.jobsite
          ? {
              connect: args.data.jobsite,
            }
          : undefined,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,

        supplier: args.data.supplier
          ? {
              connect: args.data.supplier,
            }
          : undefined,

        warehouse: args.data.warehouse
          ? {
              connect: args.data.warehouse,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductOrder)
  @nestAccessControl.UseRoles({
    resource: "ProductOrder",
    action: "update",
    possession: "any",
  })
  async updateProductOrder(
    @graphql.Args() args: UpdateProductOrderArgs
  ): Promise<ProductOrder | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          jobsite: args.data.jobsite
            ? {
                connect: args.data.jobsite,
              }
            : undefined,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,

          supplier: args.data.supplier
            ? {
                connect: args.data.supplier,
              }
            : undefined,

          warehouse: args.data.warehouse
            ? {
                connect: args.data.warehouse,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ProductOrder)
  @nestAccessControl.UseRoles({
    resource: "ProductOrder",
    action: "delete",
    possession: "any",
  })
  async deleteProductOrder(
    @graphql.Args() args: DeleteProductOrderArgs
  ): Promise<ProductOrder | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [OrderTrack])
  @nestAccessControl.UseRoles({
    resource: "OrderTrack",
    action: "read",
    possession: "any",
  })
  async orderTracks(
    @graphql.Parent() parent: ProductOrder,
    @graphql.Args() args: OrderTrackFindManyArgs
  ): Promise<OrderTrack[]> {
    const results = await this.service.findOrderTracks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Jobsite, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Jobsite",
    action: "read",
    possession: "any",
  })
  async jobsite(
    @graphql.Parent() parent: ProductOrder
  ): Promise<Jobsite | null> {
    const result = await this.service.getJobsite(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async order(@graphql.Parent() parent: ProductOrder): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async product(
    @graphql.Parent() parent: ProductOrder
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Supplier, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "read",
    possession: "any",
  })
  async supplier(
    @graphql.Parent() parent: ProductOrder
  ): Promise<Supplier | null> {
    const result = await this.service.getSupplier(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Warehouse, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Warehouse",
    action: "read",
    possession: "any",
  })
  async warehouse(
    @graphql.Parent() parent: ProductOrder
  ): Promise<Warehouse | null> {
    const result = await this.service.getWarehouse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
