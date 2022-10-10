import { JobsiteWhereUniqueInput } from "../jobsite/JobsiteWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductOrderListRelationFilter } from "../productOrder/ProductOrderListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  deliverTo?: JobsiteWhereUniqueInput;
  id?: StringFilter;
  productOrders?: ProductOrderListRelationFilter;
  user?: UserWhereUniqueInput;
};
