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
import { ManufacturerWhereInput } from "./ManufacturerWhereInput";
import { Type } from "class-transformer";
import { ManufacturerOrderByInput } from "./ManufacturerOrderByInput";

@ArgsType()
class ManufacturerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ManufacturerWhereInput,
  })
  @Field(() => ManufacturerWhereInput, { nullable: true })
  @Type(() => ManufacturerWhereInput)
  where?: ManufacturerWhereInput;

  @ApiProperty({
    required: false,
    type: [ManufacturerOrderByInput],
  })
  @Field(() => [ManufacturerOrderByInput], { nullable: true })
  @Type(() => ManufacturerOrderByInput)
  orderBy?: Array<ManufacturerOrderByInput>;

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

export { ManufacturerFindManyArgs };
