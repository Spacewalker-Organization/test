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
import { CreateOrderArgs } from "./CreateOrderArgs";
import { UpdateOrderArgs } from "./UpdateOrderArgs";
import { DeleteOrderArgs } from "./DeleteOrderArgs";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderFindUniqueArgs } from "./OrderFindUniqueArgs";
import { Order } from "./Order";
import { ProductOrderFindManyArgs } from "../../productOrder/base/ProductOrderFindManyArgs";
import { ProductOrder } from "../../productOrder/base/ProductOrder";
import { Jobsite } from "../../jobsite/base/Jobsite";
import { User } from "../../user/base/User";
import { OrderService } from "../order.service";

@graphql.Resolver(() => Order)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrderResolverBase {
  constructor(
    protected readonly service: OrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async _ordersMeta(
    @graphql.Args() args: OrderFindManyArgs
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
  @graphql.Query(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async orders(@graphql.Args() args: OrderFindManyArgs): Promise<Order[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  async order(
    @graphql.Args() args: OrderFindUniqueArgs
  ): Promise<Order | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "create",
    possession: "any",
  })
  async createOrder(@graphql.Args() args: CreateOrderArgs): Promise<Order> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        deliverTo: {
          connect: args.data.deliverTo,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateOrder(
    @graphql.Args() args: UpdateOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          deliverTo: {
            connect: args.data.deliverTo,
          },

          user: {
            connect: args.data.user,
          },
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

  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "delete",
    possession: "any",
  })
  async deleteOrder(
    @graphql.Args() args: DeleteOrderArgs
  ): Promise<Order | null> {
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
  @graphql.ResolveField(() => [ProductOrder])
  @nestAccessControl.UseRoles({
    resource: "ProductOrder",
    action: "read",
    possession: "any",
  })
  async productOrders(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: ProductOrderFindManyArgs
  ): Promise<ProductOrder[]> {
    const results = await this.service.findProductOrders(parent.id, args);

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
  async deliverTo(@graphql.Parent() parent: Order): Promise<Jobsite | null> {
    const result = await this.service.getDeliverTo(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: Order): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
