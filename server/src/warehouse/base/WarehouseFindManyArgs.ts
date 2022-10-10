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
import { WarehouseWhereInput } from "./WarehouseWhereInput";
import { Type } from "class-transformer";
import { WarehouseOrderByInput } from "./WarehouseOrderByInput";

@ArgsType()
class WarehouseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WarehouseWhereInput,
  })
  @Field(() => WarehouseWhereInput, { nullable: true })
  @Type(() => WarehouseWhereInput)
  where?: WarehouseWhereInput;

  @ApiProperty({
    required: false,
    type: [WarehouseOrderByInput],
  })
  @Field(() => [WarehouseOrderByInput], { nullable: true })
  @Type(() => WarehouseOrderByInput)
  orderBy?: Array<WarehouseOrderByInput>;

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

export { WarehouseFindManyArgs };
