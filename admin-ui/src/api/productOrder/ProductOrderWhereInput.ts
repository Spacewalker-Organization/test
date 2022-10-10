import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JobsiteWhereUniqueInput } from "../jobsite/JobsiteWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderTrackListRelationFilter } from "../orderTrack/OrderTrackListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ProductOrderWhereInput = {
  id?: StringFilter;
  itemCount?: IntNullableFilter;
  jobsite?: JobsiteWhereUniqueInput;
  order?: OrderWhereUniqueInput;
  orderTracks?: OrderTrackListRelationFilter;
  product?: ProductWhereUniqueInput;
  rentPrice?: FloatNullableFilter;
  sourcedFrom?: "Supplier" | "Jobsite" | "Warehouse";
  supplier?: SupplierWhereUniqueInput;
  warehouse?: WarehouseWhereUniqueInput;
};
