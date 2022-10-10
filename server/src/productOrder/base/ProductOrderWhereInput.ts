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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JobsiteWhereUniqueInput } from "../../jobsite/base/JobsiteWhereUniqueInput";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { OrderTrackListRelationFilter } from "../../orderTrack/base/OrderTrackListRelationFilter";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EnumProductOrderSourcedFrom } from "./EnumProductOrderSourcedFrom";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../../warehouse/base/WarehouseWhereUniqueInput";
@InputType()
class ProductOrderWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  itemCount?: IntNullableFilter;

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
  jobsite?: JobsiteWhereUniqueInput;

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
  order?: OrderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrderTrackListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderTrackListRelationFilter)
  @IsOptional()
  @Field(() => OrderTrackListRelationFilter, {
    nullable: true,
  })
  orderTracks?: OrderTrackListRelationFilter;

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
  product?: ProductWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  rentPrice?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumProductOrderSourcedFrom,
  })
  @IsEnum(EnumProductOrderSourcedFrom)
  @IsOptional()
  @Field(() => EnumProductOrderSourcedFrom, {
    nullable: true,
  })
  sourcedFrom?: "Supplier" | "Jobsite" | "Warehouse";

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
  supplier?: SupplierWhereUniqueInput;

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
  warehouse?: WarehouseWhereUniqueInput;
}
export { ProductOrderWhereInput };
