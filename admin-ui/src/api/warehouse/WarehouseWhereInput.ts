import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductOrderListRelationFilter } from "../productOrder/ProductOrderListRelationFilter";
import { ProductStockListRelationFilter } from "../productStock/ProductStockListRelationFilter";
import { SupplyListRelationFilter } from "../supply/SupplyListRelationFilter";

export type WarehouseWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  productOrders?: ProductOrderListRelationFilter;
  productStocks?: ProductStockListRelationFilter;
  supplies?: SupplyListRelationFilter;
};
