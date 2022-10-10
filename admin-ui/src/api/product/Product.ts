import { Manufacturer } from "../manufacturer/Manufacturer";
import { ProductOrder } from "../productOrder/ProductOrder";
import { ProductStock } from "../productStock/ProductStock";
import { ProductSupply } from "../productSupply/ProductSupply";

export type Product = {
  createdAt: Date;
  id: string;
  manufacturer?: Manufacturer;
  name: string | null;
  productOrders?: Array<ProductOrder>;
  productStocks?: Array<ProductStock>;
  productSupplies?: Array<ProductSupply>;
  updatedAt: Date;
};
