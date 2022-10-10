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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ProductOrderUpdateManyWithoutWarehousesInput } from "./ProductOrderUpdateManyWithoutWarehousesInput";
import { Type } from "class-transformer";
import { ProductStockUpdateManyWithoutWarehousesInput } from "./ProductStockUpdateManyWithoutWarehousesInput";
import { SupplyUpdateManyWithoutWarehousesInput } from "./SupplyUpdateManyWithoutWarehousesInput";
@InputType()
class WarehouseUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductOrderUpdateManyWithoutWarehousesInput,
  })
  @ValidateNested()
  @Type(() => ProductOrderUpdateManyWithoutWarehousesInput)
  @IsOptional()
  @Field(() => ProductOrderUpdateManyWithoutWarehousesInput, {
    nullable: true,
  })
  productOrders?: ProductOrderUpdateManyWithoutWarehousesInput;

  @ApiProperty({
    required: false,
    type: () => ProductStockUpdateManyWithoutWarehousesInput,
  })
  @ValidateNested()
  @Type(() => ProductStockUpdateManyWithoutWarehousesInput)
  @IsOptional()
  @Field(() => ProductStockUpdateManyWithoutWarehousesInput, {
    nullable: true,
  })
  productStocks?: ProductStockUpdateManyWithoutWarehousesInput;

  @ApiProperty({
    required: false,
    type: () => SupplyUpdateManyWithoutWarehousesInput,
  })
  @ValidateNested()
  @Type(() => SupplyUpdateManyWithoutWarehousesInput)
  @IsOptional()
  @Field(() => SupplyUpdateManyWithoutWarehousesInput, {
    nullable: true,
  })
  supplies?: SupplyUpdateManyWithoutWarehousesInput;
}
export { WarehouseUpdateInput };
