import { ProductOrder as TProductOrder } from "../api/productOrder/ProductOrder";

export const PRODUCTORDER_TITLE_FIELD = "id";

export const ProductOrderTitle = (record: TProductOrder): string => {
  return record.id || record.id;
};
