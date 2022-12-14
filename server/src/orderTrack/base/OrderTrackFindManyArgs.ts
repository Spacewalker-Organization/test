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
import { OrderTrackWhereInput } from "./OrderTrackWhereInput";
import { Type } from "class-transformer";
import { OrderTrackOrderByInput } from "./OrderTrackOrderByInput";

@ArgsType()
class OrderTrackFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrderTrackWhereInput,
  })
  @Field(() => OrderTrackWhereInput, { nullable: true })
  @Type(() => OrderTrackWhereInput)
  where?: OrderTrackWhereInput;

  @ApiProperty({
    required: false,
    type: [OrderTrackOrderByInput],
  })
  @Field(() => [OrderTrackOrderByInput], { nullable: true })
  @Type(() => OrderTrackOrderByInput)
  orderBy?: Array<OrderTrackOrderByInput>;

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

export { OrderTrackFindManyArgs };
