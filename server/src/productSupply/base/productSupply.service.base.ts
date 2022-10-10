/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  ProductSupply,
  SupplyTrack,
  Product,
  Supplier,
  Supply,
} from "@prisma/client";

export class ProductSupplyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductSupplyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductSupplyFindManyArgs>
  ): Promise<number> {
    return this.prisma.productSupply.count(args);
  }

  async findMany<T extends Prisma.ProductSupplyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductSupplyFindManyArgs>
  ): Promise<ProductSupply[]> {
    return this.prisma.productSupply.findMany(args);
  }
  async findOne<T extends Prisma.ProductSupplyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductSupplyFindUniqueArgs>
  ): Promise<ProductSupply | null> {
    return this.prisma.productSupply.findUnique(args);
  }
  async create<T extends Prisma.ProductSupplyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductSupplyCreateArgs>
  ): Promise<ProductSupply> {
    return this.prisma.productSupply.create<T>(args);
  }
  async update<T extends Prisma.ProductSupplyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductSupplyUpdateArgs>
  ): Promise<ProductSupply> {
    return this.prisma.productSupply.update<T>(args);
  }
  async delete<T extends Prisma.ProductSupplyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductSupplyDeleteArgs>
  ): Promise<ProductSupply> {
    return this.prisma.productSupply.delete(args);
  }

  async findSupplyTracks(
    parentId: string,
    args: Prisma.SupplyTrackFindManyArgs
  ): Promise<SupplyTrack[]> {
    return this.prisma.productSupply
      .findUnique({
        where: { id: parentId },
      })
      .supplyTracks(args);
  }

  async getProduct(parentId: string): Promise<Product | null> {
    return this.prisma.productSupply
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }

  async getSupplier(parentId: string): Promise<Supplier | null> {
    return this.prisma.productSupply
      .findUnique({
        where: { id: parentId },
      })
      .supplier();
  }

  async getSupply(parentId: string): Promise<Supply | null> {
    return this.prisma.productSupply
      .findUnique({
        where: { id: parentId },
      })
      .supply();
  }
}