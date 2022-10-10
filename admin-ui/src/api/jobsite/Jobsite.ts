import { Order } from "../order/Order";
import { ProductOrder } from "../productOrder/ProductOrder";
import { ProductStock } from "../productStock/ProductStock";

export type Jobsite = {
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  productOrders?: Array<ProductOrder>;
  productStocks?: Array<ProductStock>;
  updatedAt: Date;
};
