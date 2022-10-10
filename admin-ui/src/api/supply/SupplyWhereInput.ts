import { StringFilter } from "../../util/StringFilter";
import { ProductSupplyListRelationFilter } from "../productSupply/ProductSupplyListRelationFilter";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type SupplyWhereInput = {
  id?: StringFilter;
  productSupplies?: ProductSupplyListRelationFilter;
  supplyTo?: WarehouseWhereUniqueInput;
};
