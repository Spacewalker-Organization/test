import { ProductSupplyWhereUniqueInput } from "../productSupply/ProductSupplyWhereUniqueInput";

export type SupplyTrackCreateInput = {
  productsupply?: ProductSupplyWhereUniqueInput | null;
  status?: "InTransit" | "Delivered" | null;
};
