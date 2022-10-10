import { ProductOrderCreateNestedManyWithoutWarehousesInput } from "./ProductOrderCreateNestedManyWithoutWarehousesInput";
import { ProductStockCreateNestedManyWithoutWarehousesInput } from "./ProductStockCreateNestedManyWithoutWarehousesInput";
import { SupplyCreateNestedManyWithoutWarehousesInput } from "./SupplyCreateNestedManyWithoutWarehousesInput";

export type WarehouseCreateInput = {
  name?: string | null;
  productOrders?: ProductOrderCreateNestedManyWithoutWarehousesInput;
  productStocks?: ProductStockCreateNestedManyWithoutWarehousesInput;
  supplies?: SupplyCreateNestedManyWithoutWarehousesInput;
};
