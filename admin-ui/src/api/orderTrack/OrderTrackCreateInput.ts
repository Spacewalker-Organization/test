import { ProductOrderWhereUniqueInput } from "../productOrder/ProductOrderWhereUniqueInput";

export type OrderTrackCreateInput = {
  productOrder?: ProductOrderWhereUniqueInput | null;
  status?: "InTransit" | "Packed" | "Delivered" | "Dispatched" | null;
};
