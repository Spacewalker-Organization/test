/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Manufacturer, Product } from "@prisma/client";

export class ManufacturerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ManufacturerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerFindManyArgs>
  ): Promise<number> {
    return this.prisma.manufacturer.count(args);
  }

  async findMany<T extends Prisma.ManufacturerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerFindManyArgs>
  ): Promise<Manufacturer[]> {
    return this.prisma.manufacturer.findMany(args);
  }
  async findOne<T extends Prisma.ManufacturerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerFindUniqueArgs>
  ): Promise<Manufacturer | null> {
    return this.prisma.manufacturer.findUnique(args);
  }
  async create<T extends Prisma.ManufacturerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerCreateArgs>
  ): Promise<Manufacturer> {
    return this.prisma.manufacturer.create<T>(args);
  }
  async update<T extends Prisma.ManufacturerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerUpdateArgs>
  ): Promise<Manufacturer> {
    return this.prisma.manufacturer.update<T>(args);
  }
  async delete<T extends Prisma.ManufacturerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ManufacturerDeleteArgs>
  ): Promise<Manufacturer> {
    return this.prisma.manufacturer.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.manufacturer
      .findUnique({
        where: { id: parentId },
      })
      .products(args);
  }
}
