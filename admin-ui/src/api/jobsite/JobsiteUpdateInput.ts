import { OrderUpdateManyWithoutJobsitesInput } from "./OrderUpdateManyWithoutJobsitesInput";
import { ProductOrderUpdateManyWithoutJobsitesInput } from "./ProductOrderUpdateManyWithoutJobsitesInput";
import { ProductStockUpdateManyWithoutJobsitesInput } from "./ProductStockUpdateManyWithoutJobsitesInput";

export type JobsiteUpdateInput = {
  name?: string | null;
  orders?: OrderUpdateManyWithoutJobsitesInput;
  productOrders?: ProductOrderUpdateManyWithoutJobsitesInput;
  productStocks?: ProductStockUpdateManyWithoutJobsitesInput;
};
