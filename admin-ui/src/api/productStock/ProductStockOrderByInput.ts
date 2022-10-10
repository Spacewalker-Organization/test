import { SortOrder } from "../../util/SortOrder";

export type ProductStockOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemCount?: SortOrder;
  jobsiteId?: SortOrder;
  productId?: SortOrder;
  updatedAt?: SortOrder;
  warehouseId?: SortOrder;
};
