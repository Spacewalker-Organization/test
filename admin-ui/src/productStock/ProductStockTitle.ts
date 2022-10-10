import { ProductStock as TProductStock } from "../api/productStock/ProductStock";

export const PRODUCTSTOCK_TITLE_FIELD = "id";

export const ProductStockTitle = (record: TProductStock): string => {
  return record.id || record.id;
};
