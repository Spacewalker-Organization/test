import { SortOrder } from "../../util/SortOrder";

export type ProductOrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemCount?: SortOrder;
  jobsiteId?: SortOrder;
  orderId?: SortOrder;
  productId?: SortOrder;
  rentPrice?: SortOrder;
  sourcedFrom?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
  warehouseId?: SortOrder;
};
