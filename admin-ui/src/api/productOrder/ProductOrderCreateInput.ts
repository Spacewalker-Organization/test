import { JobsiteWhereUniqueInput } from "../jobsite/JobsiteWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderTrackCreateNestedManyWithoutProductOrdersInput } from "./OrderTrackCreateNestedManyWithoutProductOrdersInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ProductOrderCreateInput = {
  itemCount?: number | null;
  jobsite?: JobsiteWhereUniqueInput | null;
  order?: OrderWhereUniqueInput | null;
  orderTracks?: OrderTrackCreateNestedManyWithoutProductOrdersInput;
  product?: ProductWhereUniqueInput | null;
  rentPrice?: number | null;
  sourcedFrom?: "Supplier" | "Jobsite" | "Warehouse" | null;
  supplier?: SupplierWhereUniqueInput | null;
  warehouse?: WarehouseWhereUniqueInput | null;
};
