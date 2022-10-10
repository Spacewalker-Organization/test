import { Jobsite } from "../jobsite/Jobsite";
import { Order } from "../order/Order";
import { OrderTrack } from "../orderTrack/OrderTrack";
import { Product } from "../product/Product";
import { Supplier } from "../supplier/Supplier";
import { Warehouse } from "../warehouse/Warehouse";

export type ProductOrder = {
  createdAt: Date;
  id: string;
  itemCount: number | null;
  jobsite?: Jobsite | null;
  order?: Order | null;
  orderTracks?: Array<OrderTrack>;
  product?: Product | null;
  rentPrice: number | null;
  sourcedFrom?: "Supplier" | "Jobsite" | "Warehouse" | null;
  supplier?: Supplier | null;
  updatedAt: Date;
  warehouse?: Warehouse | null;
};
