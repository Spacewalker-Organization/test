import { StringFilter } from "../../util/StringFilter";
import { ProductSupplyWhereUniqueInput } from "../productSupply/ProductSupplyWhereUniqueInput";

export type SupplyTrackWhereInput = {
  id?: StringFilter;
  productsupply?: ProductSupplyWhereUniqueInput;
  status?: "InTransit" | "Delivered";
};
