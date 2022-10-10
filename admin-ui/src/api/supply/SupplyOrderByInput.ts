import { SortOrder } from "../../util/SortOrder";

export type SupplyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  supplyToId?: SortOrder;
  updatedAt?: SortOrder;
};
