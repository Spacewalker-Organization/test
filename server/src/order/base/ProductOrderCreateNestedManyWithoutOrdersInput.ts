/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductOrderWhereUniqueInput } from "../../productOrder/base/ProductOrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ProductOrderCreateNestedManyWithoutOrdersInput {
  @Field(() => [ProductOrderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductOrderWhereUniqueInput],
  })
  connect?: Array<ProductOrderWhereUniqueInput>;
}
export { ProductOrderCreateNestedManyWithoutOrdersInput };
