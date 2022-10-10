import { ProductSupplyUpdateManyWithoutSuppliesInput } from "./ProductSupplyUpdateManyWithoutSuppliesInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type SupplyUpdateInput = {
  productSupplies?: ProductSupplyUpdateManyWithoutSuppliesInput;
  supplyTo?: WarehouseWhereUniqueInput | null;
};
