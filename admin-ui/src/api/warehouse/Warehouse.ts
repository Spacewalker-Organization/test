import { ProductOrder } from "../productOrder/ProductOrder";
import { ProductStock } from "../productStock/ProductStock";
import { Supply } from "../supply/Supply";

export type Warehouse = {
  createdAt: Date;
  id: string;
  name: string | null;
  productOrders?: Array<ProductOrder>;
  productStocks?: Array<ProductStock>;
  supplies?: Array<Supply>;
  updatedAt: Date;
};
