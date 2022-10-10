import { ProductSupplyWhereUniqueInput } from "../productSupply/ProductSupplyWhereUniqueInput";

export type SupplyTrackUpdateInput = {
  productsupply?: ProductSupplyWhereUniqueInput | null;
  status?: "InTransit" | "Delivered" | null;
};
