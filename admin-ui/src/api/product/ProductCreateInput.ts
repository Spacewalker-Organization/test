import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { ProductOrderCreateNestedManyWithoutProductsInput } from "./ProductOrderCreateNestedManyWithoutProductsInput";
import { ProductStockCreateNestedManyWithoutProductsInput } from "./ProductStockCreateNestedManyWithoutProductsInput";
import { ProductSupplyCreateNestedManyWithoutProductsInput } from "./ProductSupplyCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  manufacturer: ManufacturerWhereUniqueInput;
  name?: string | null;
  productOrders?: ProductOrderCreateNestedManyWithoutProductsInput;
  productStocks?: ProductStockCreateNestedManyWithoutProductsInput;
  productSupplies?: ProductSupplyCreateNestedManyWithoutProductsInput;
};
