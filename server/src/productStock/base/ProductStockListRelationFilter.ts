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
import { ProductStockWhereInput } from "./ProductStockWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductStockListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductStockWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductStockWhereInput)
  @IsOptional()
  @Field(() => ProductStockWhereInput, {
    nullable: true,
  })
  every?: ProductStockWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductStockWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductStockWhereInput)
  @IsOptional()
  @Field(() => ProductStockWhereInput, {
    nullable: true,
  })
  some?: ProductStockWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductStockWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductStockWhereInput)
  @IsOptional()
  @Field(() => ProductStockWhereInput, {
    nullable: true,
  })
  none?: ProductStockWhereInput;
}
export { ProductStockListRelationFilter };
