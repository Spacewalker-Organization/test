import { ProductOrderUpdateManyWithoutSuppliersInput } from "./ProductOrderUpdateManyWithoutSuppliersInput";
import { ProductSupplyUpdateManyWithoutSuppliersInput } from "./ProductSupplyUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  name?: string | null;
  productOrders?: ProductOrderUpdateManyWithoutSuppliersInput;
  productSupplies?: ProductSupplyUpdateManyWithoutSuppliersInput;
};
