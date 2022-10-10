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
import { OrderCreateNestedManyWithoutJobsitesInput } from "./OrderCreateNestedManyWithoutJobsitesInput";
import { Type } from "class-transformer";
import { ProductOrderCreateNestedManyWithoutJobsitesInput } from "./ProductOrderCreateNestedManyWithoutJobsitesInput";
import { ProductStockCreateNestedManyWithoutJobsitesInput } from "./ProductStockCreateNestedManyWithoutJobsitesInput";
@InputType()
class JobsiteCreateInput {
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
    type: () => OrderCreateNestedManyWithoutJobsitesInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutJobsitesInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutJobsitesInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutJobsitesInput;

  @ApiProperty({
    required: false,
    type: () => ProductOrderCreateNestedManyWithoutJobsitesInput,
  })
  @ValidateNested()
  @Type(() => ProductOrderCreateNestedManyWithoutJobsitesInput)
  @IsOptional()
  @Field(() => ProductOrderCreateNestedManyWithoutJobsitesInput, {
    nullable: true,
  })
  productOrders?: ProductOrderCreateNestedManyWithoutJobsitesInput;

  @ApiProperty({
    required: false,
    type: () => ProductStockCreateNestedManyWithoutJobsitesInput,
  })
  @ValidateNested()
  @Type(() => ProductStockCreateNestedManyWithoutJobsitesInput)
  @IsOptional()
  @Field(() => ProductStockCreateNestedManyWithoutJobsitesInput, {
    nullable: true,
  })
  productStocks?: ProductStockCreateNestedManyWithoutJobsitesInput;
}
export { JobsiteCreateInput };