import { ProductSupplyCreateNestedManyWithoutSuppliesInput } from "./ProductSupplyCreateNestedManyWithoutSuppliesInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type SupplyCreateInput = {
  productSupplies?: ProductSupplyCreateNestedManyWithoutSuppliesInput;
  supplyTo?: WarehouseWhereUniqueInput | null;
};
