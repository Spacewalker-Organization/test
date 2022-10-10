import { ProductOrder } from "../productOrder/ProductOrder";

export type OrderTrack = {
  createdAt: Date;
  id: string;
  productOrder?: ProductOrder | null;
  status?: "InTransit" | "Packed" | "Delivered" | "Dispatched" | null;
  updatedAt: Date;
};
