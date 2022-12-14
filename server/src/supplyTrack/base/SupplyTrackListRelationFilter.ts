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
import { SupplyTrackWhereInput } from "./SupplyTrackWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SupplyTrackListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SupplyTrackWhereInput,
  })
  @ValidateNested()
  @Type(() => SupplyTrackWhereInput)
  @IsOptional()
  @Field(() => SupplyTrackWhereInput, {
    nullable: true,
  })
  every?: SupplyTrackWhereInput;

  @ApiProperty({
    required: false,
    type: () => SupplyTrackWhereInput,
  })
  @ValidateNested()
  @Type(() => SupplyTrackWhereInput)
  @IsOptional()
  @Field(() => SupplyTrackWhereInput, {
    nullable: true,
  })
  some?: SupplyTrackWhereInput;

  @ApiProperty({
    required: false,
    type: () => SupplyTrackWhereInput,
  })
  @ValidateNested()
  @Type(() => SupplyTrackWhereInput)
  @IsOptional()
  @Field(() => SupplyTrackWhereInput, {
    nullable: true,
  })
  none?: SupplyTrackWhereInput;
}
export { SupplyTrackListRelationFilter };
