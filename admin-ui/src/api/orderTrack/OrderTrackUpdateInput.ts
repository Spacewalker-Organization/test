import { ProductOrderWhereUniqueInput } from "../productOrder/ProductOrderWhereUniqueInput";

export type OrderTrackUpdateInput = {
  productOrder?: ProductOrderWhereUniqueInput | null;
  status?: "InTransit" | "Packed" | "Delivered" | "Dispatched" | null;
};
