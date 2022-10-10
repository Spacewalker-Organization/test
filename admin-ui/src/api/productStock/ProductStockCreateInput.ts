import { JobsiteWhereUniqueInput } from "../jobsite/JobsiteWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ProductStockCreateInput = {
  itemCount?: number | null;
  jobsite?: JobsiteWhereUniqueInput | null;
  product: ProductWhereUniqueInput;
  warehouse?: WarehouseWhereUniqueInput | null;
};
