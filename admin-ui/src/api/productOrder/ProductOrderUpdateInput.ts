import { JobsiteWhereUniqueInput } from "../jobsite/JobsiteWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderTrackUpdateManyWithoutProductOrdersInput } from "./OrderTrackUpdateManyWithoutProductOrdersInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ProductOrderUpdateInput = {
  itemCount?: number | null;
  jobsite?: JobsiteWhereUniqueInput | null;
  order?: OrderWhereUniqueInput | null;
  orderTracks?: OrderTrackUpdateManyWithoutProductOrdersInput;
  product?: ProductWhereUniqueInput | null;
  rentPrice?: number | null;
  sourcedFrom?: "Supplier" | "Jobsite" | "Warehouse" | null;
  supplier?: SupplierWhereUniqueInput | null;
  warehouse?: WarehouseWhereUniqueInput | null;
};
