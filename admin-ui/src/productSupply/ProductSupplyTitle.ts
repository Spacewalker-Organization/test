import { ProductSupply as TProductSupply } from "../api/productSupply/ProductSupply";

export const PRODUCTSUPPLY_TITLE_FIELD = "id";

export const ProductSupplyTitle = (record: TProductSupply): string => {
  return record.id || record.id;
};
