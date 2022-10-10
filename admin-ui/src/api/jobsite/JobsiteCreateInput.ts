import { OrderCreateNestedManyWithoutJobsitesInput } from "./OrderCreateNestedManyWithoutJobsitesInput";
import { ProductOrderCreateNestedManyWithoutJobsitesInput } from "./ProductOrderCreateNestedManyWithoutJobsitesInput";
import { ProductStockCreateNestedManyWithoutJobsitesInput } from "./ProductStockCreateNestedManyWithoutJobsitesInput";

export type JobsiteCreateInput = {
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutJobsitesInput;
  productOrders?: ProductOrderCreateNestedManyWithoutJobsitesInput;
  productStocks?: ProductStockCreateNestedManyWithoutJobsitesInput;
};
