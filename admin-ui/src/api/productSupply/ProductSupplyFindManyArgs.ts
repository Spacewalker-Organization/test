import { ProductSupplyWhereInput } from "./ProductSupplyWhereInput";
import { ProductSupplyOrderByInput } from "./ProductSupplyOrderByInput";

export type ProductSupplyFindManyArgs = {
  where?: ProductSupplyWhereInput;
  orderBy?: Array<ProductSupplyOrderByInput>;
  skip?: number;
  take?: number;
};
