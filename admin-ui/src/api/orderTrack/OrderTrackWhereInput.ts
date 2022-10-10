import { StringFilter } from "../../util/StringFilter";
import { ProductOrderWhereUniqueInput } from "../productOrder/ProductOrderWhereUniqueInput";

export type OrderTrackWhereInput = {
  id?: StringFilter;
  productOrder?: ProductOrderWhereUniqueInput;
  status?: "InTransit" | "Packed" | "Delivered" | "Dispatched";
};
