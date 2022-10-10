import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ProductOrderListRelationFilter } from "../productOrder/ProductOrderListRelationFilter";
import { ProductStockListRelationFilter } from "../productStock/ProductStockListRelationFilter";

export type JobsiteWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  productOrders?: ProductOrderListRelationFilter;
  productStocks?: ProductStockListRelationFilter;
};
