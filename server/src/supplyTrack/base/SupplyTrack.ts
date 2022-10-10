/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  ValidateNested,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { ProductSupply } from "../../productSupply/base/ProductSupply";
import { EnumSupplyTrackStatus } from "./EnumSupplyTrackStatus";
@ObjectType()
class SupplyTrack {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => ProductSupply,
  })
  @ValidateNested()
  @Type(() => ProductSupply)
  @IsOptional()
  productsupply?: ProductSupply | null;

  @ApiProperty({
    required: false,
    enum: EnumSupplyTrackStatus,
  })
  @IsEnum(EnumSupplyTrackStatus)
  @IsOptional()
  @Field(() => EnumSupplyTrackStatus, {
    nullable: true,
  })
  status?: "InTransit" | "Delivered" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { SupplyTrack };
