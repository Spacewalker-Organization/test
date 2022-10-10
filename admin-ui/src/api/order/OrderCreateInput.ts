import { JobsiteWhereUniqueInput } from "../jobsite/JobsiteWhereUniqueInput";
import { ProductOrderCreateNestedManyWithoutOrdersInput } from "./ProductOrderCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  deliverTo: JobsiteWhereUniqueInput;
  productOrders?: ProductOrderCreateNestedManyWithoutOrdersInput;
  user: UserWhereUniqueInput;
};
