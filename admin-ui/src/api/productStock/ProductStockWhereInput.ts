import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JobsiteWhereUniqueInput } from "../jobsite/JobsiteWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ProductStockWhereInput = {
  id?: StringFilter;
  itemCount?: IntNullableFilter;
  jobsite?: JobsiteWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  warehouse?: WarehouseWhereUniqueInput;
};
