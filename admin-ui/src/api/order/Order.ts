import { Jobsite } from "../jobsite/Jobsite";
import { ProductOrder } from "../productOrder/ProductOrder";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  deliverTo?: Jobsite;
  id: string;
  productOrders?: Array<ProductOrder>;
  updatedAt: Date;
  user?: User;
};
