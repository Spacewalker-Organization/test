import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { ProductOrderUpdateManyWithoutProductsInput } from "./ProductOrderUpdateManyWithoutProductsInput";
import { ProductStockUpdateManyWithoutProductsInput } from "./ProductStockUpdateManyWithoutProductsInput";
import { ProductSupplyUpdateManyWithoutProductsInput } from "./ProductSupplyUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  manufacturer?: ManufacturerWhereUniqueInput;
  name?: string | null;
  productOrders?: ProductOrderUpdateManyWithoutProductsInput;
  productStocks?: ProductStockUpdateManyWithoutProductsInput;
  productSupplies?: ProductSupplyUpdateManyWithoutProductsInput;
};
