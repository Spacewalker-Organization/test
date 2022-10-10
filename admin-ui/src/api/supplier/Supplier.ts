import { ProductOrder } from "../productOrder/ProductOrder";
import { ProductSupply } from "../productSupply/ProductSupply";

export type Supplier = {
  createdAt: Date;
  id: string;
  name: string | null;
  productOrders?: Array<ProductOrder>;
  productSupplies?: Array<ProductSupply>;
  updatedAt: Date;
};
