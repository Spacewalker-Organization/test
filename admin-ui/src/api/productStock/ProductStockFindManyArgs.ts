import { ProductStockWhereInput } from "./ProductStockWhereInput";
import { ProductStockOrderByInput } from "./ProductStockOrderByInput";

export type ProductStockFindManyArgs = {
  where?: ProductStockWhereInput;
  orderBy?: Array<ProductStockOrderByInput>;
  skip?: number;
  take?: number;
};
