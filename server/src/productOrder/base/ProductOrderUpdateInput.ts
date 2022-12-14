/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  ValidateNested,
  IsNumber,
  IsEnum,
} from "class-validator";
import { JobsiteWhereUniqueInput } from "../../jobsite/base/JobsiteWhereUniqueInput";
import { Type } from "class-transformer";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { OrderTrackUpdateManyWithoutProductOrdersInput } from "./OrderTrackUpdateManyWithoutProductOrdersInput";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { EnumProductOrderSourcedFrom } from "./EnumProductOrderSourcedFrom";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../../warehouse/base/WarehouseWhereUniqueInput";
@InputType()
class ProductOrderUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  itemCount?: number | null;

  @ApiProperty({
    required: false,
    type: () => JobsiteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobsiteWhereUniqueInput)
  @IsOptional()
  @Field(() => JobsiteWhereUniqueInput, {
    nullable: true,
  })
  jobsite?: JobsiteWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OrderTrackUpdateManyWithoutProductOrdersInput,
  })
  @ValidateNested()
  @Type(() => OrderTrackUpdateManyWithoutProductOrdersInput)
  @IsOptional()
  @Field(() => OrderTrackUpdateManyWithoutProductOrdersInput, {
    nullable: true,
  })
  orderTracks?: OrderTrackUpdateManyWithoutProductOrdersInput;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rentPrice?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumProductOrderSourcedFrom,
  })
  @IsEnum(EnumProductOrderSourcedFrom)
  @IsOptional()
  @Field(() => EnumProductOrderSourcedFrom, {
    nullable: true,
  })
  sourcedFrom?: "Supplier" | "Jobsite" | "Warehouse" | null;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplier?: SupplierWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => WarehouseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WarehouseWhereUniqueInput)
  @IsOptional()
  @Field(() => WarehouseWhereUniqueInput, {
    nullable: true,
  })
  warehouse?: WarehouseWhereUniqueInput | null;
}
export { ProductOrderUpdateInput };
