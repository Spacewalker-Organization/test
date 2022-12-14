/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductOrderWhereInput } from "./ProductOrderWhereInput";
import { Type } from "class-transformer";
import { ProductOrderOrderByInput } from "./ProductOrderOrderByInput";

@ArgsType()
class ProductOrderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductOrderWhereInput,
  })
  @Field(() => ProductOrderWhereInput, { nullable: true })
  @Type(() => ProductOrderWhereInput)
  where?: ProductOrderWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductOrderOrderByInput],
  })
  @Field(() => [ProductOrderOrderByInput], { nullable: true })
  @Type(() => ProductOrderOrderByInput)
  orderBy?: Array<ProductOrderOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProductOrderFindManyArgs };
