import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  manufacturerId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
