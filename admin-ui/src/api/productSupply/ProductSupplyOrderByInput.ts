import { SortOrder } from "../../util/SortOrder";

export type ProductSupplyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  productCount?: SortOrder;
  supplierId?: SortOrder;
  supplyId?: SortOrder;
  updatedAt?: SortOrder;
};
