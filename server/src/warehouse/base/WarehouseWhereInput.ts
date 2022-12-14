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
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductOrderListRelationFilter } from "../../productOrder/base/ProductOrderListRelationFilter";
import { ProductStockListRelationFilter } from "../../productStock/base/ProductStockListRelationFilter";
import { SupplyListRelationFilter } from "../../supply/base/SupplyListRelationFilter";
@InputType()
class WarehouseWhereInput {
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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ProductOrderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductOrderListRelationFilter)
  @IsOptional()
  @Field(() => ProductOrderListRelationFilter, {
    nullable: true,
  })
  productOrders?: ProductOrderListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductStockListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductStockListRelationFilter)
  @IsOptional()
  @Field(() => ProductStockListRelationFilter, {
    nullable: true,
  })
  productStocks?: ProductStockListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SupplyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SupplyListRelationFilter)
  @IsOptional()
  @Field(() => SupplyListRelationFilter, {
    nullable: true,
  })
  supplies?: SupplyListRelationFilter;
}
export { WarehouseWhereInput };
