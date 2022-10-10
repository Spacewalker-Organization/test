import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { SupplyWhereUniqueInput } from "../supply/SupplyWhereUniqueInput";
import { SupplyTrackCreateNestedManyWithoutProductSuppliesInput } from "./SupplyTrackCreateNestedManyWithoutProductSuppliesInput";

export type ProductSupplyCreateInput = {
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  productCount?: number | null;
  supplier?: SupplierWhereUniqueInput | null;
  supply?: SupplyWhereUniqueInput | null;
  supplyTracks?: SupplyTrackCreateNestedManyWithoutProductSuppliesInput;
};
