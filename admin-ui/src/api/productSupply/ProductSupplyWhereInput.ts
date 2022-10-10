import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { SupplyWhereUniqueInput } from "../supply/SupplyWhereUniqueInput";
import { SupplyTrackListRelationFilter } from "../supplyTrack/SupplyTrackListRelationFilter";

export type ProductSupplyWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
  productCount?: IntNullableFilter;
  supplier?: SupplierWhereUniqueInput;
  supply?: SupplyWhereUniqueInput;
  supplyTracks?: SupplyTrackListRelationFilter;
};
