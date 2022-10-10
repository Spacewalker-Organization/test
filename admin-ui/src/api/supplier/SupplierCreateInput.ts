import { ProductOrderCreateNestedManyWithoutSuppliersInput } from "./ProductOrderCreateNestedManyWithoutSuppliersInput";
import { ProductSupplyCreateNestedManyWithoutSuppliersInput } from "./ProductSupplyCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  name?: string | null;
  productOrders?: ProductOrderCreateNestedManyWithoutSuppliersInput;
  productSupplies?: ProductSupplyCreateNestedManyWithoutSuppliersInput;
};
