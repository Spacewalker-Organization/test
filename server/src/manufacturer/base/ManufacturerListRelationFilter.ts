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
import { ManufacturerWhereInput } from "./ManufacturerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ManufacturerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ManufacturerWhereInput,
  })
  @ValidateNested()
  @Type(() => ManufacturerWhereInput)
  @IsOptional()
  @Field(() => ManufacturerWhereInput, {
    nullable: true,
  })
  every?: ManufacturerWhereInput;

  @ApiProperty({
    required: false,
    type: () => ManufacturerWhereInput,
  })
  @ValidateNested()
  @Type(() => ManufacturerWhereInput)
  @IsOptional()
  @Field(() => ManufacturerWhereInput, {
    nullable: true,
  })
  some?: ManufacturerWhereInput;

  @ApiProperty({
    required: false,
    type: () => ManufacturerWhereInput,
  })
  @ValidateNested()
  @Type(() => ManufacturerWhereInput)
  @IsOptional()
  @Field(() => ManufacturerWhereInput, {
    nullable: true,
  })
  none?: ManufacturerWhereInput;
}
export { ManufacturerListRelationFilter };
