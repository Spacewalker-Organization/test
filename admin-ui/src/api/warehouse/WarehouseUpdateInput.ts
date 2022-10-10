import { ProductOrderUpdateManyWithoutWarehousesInput } from "./ProductOrderUpdateManyWithoutWarehousesInput";
import { ProductStockUpdateManyWithoutWarehousesInput } from "./ProductStockUpdateManyWithoutWarehousesInput";
import { SupplyUpdateManyWithoutWarehousesInput } from "./SupplyUpdateManyWithoutWarehousesInput";

export type WarehouseUpdateInput = {
  name?: string | null;
  productOrders?: ProductOrderUpdateManyWithoutWarehousesInput;
  productStocks?: ProductStockUpdateManyWithoutWarehousesInput;
  supplies?: SupplyUpdateManyWithoutWarehousesInput;
};
