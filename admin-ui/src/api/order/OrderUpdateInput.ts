import { JobsiteWhereUniqueInput } from "../jobsite/JobsiteWhereUniqueInput";
import { ProductOrderUpdateManyWithoutOrdersInput } from "./ProductOrderUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  deliverTo?: JobsiteWhereUniqueInput;
  productOrders?: ProductOrderUpdateManyWithoutOrdersInput;
  user?: UserWhereUniqueInput;
};
