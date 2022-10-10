import { StringFilter } from "../../util/StringFilter";
import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductOrderListRelationFilter } from "../productOrder/ProductOrderListRelationFilter";
import { ProductStockListRelationFilter } from "../productStock/ProductStockListRelationFilter";
import { ProductSupplyListRelationFilter } from "../productSupply/ProductSupplyListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  manufacturer?: ManufacturerWhereUniqueInput;
  name?: StringNullableFilter;
  productOrders?: ProductOrderListRelationFilter;
  productStocks?: ProductStockListRelationFilter;
  productSupplies?: ProductSupplyListRelationFilter;
};
