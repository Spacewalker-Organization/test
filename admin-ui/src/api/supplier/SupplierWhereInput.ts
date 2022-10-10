import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductOrderListRelationFilter } from "../productOrder/ProductOrderListRelationFilter";
import { ProductSupplyListRelationFilter } from "../productSupply/ProductSupplyListRelationFilter";

export type SupplierWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  productOrders?: ProductOrderListRelationFilter;
  productSupplies?: ProductSupplyListRelationFilter;
};
