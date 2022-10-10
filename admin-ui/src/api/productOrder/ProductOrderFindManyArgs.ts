import { ProductOrderWhereInput } from "./ProductOrderWhereInput";
import { ProductOrderOrderByInput } from "./ProductOrderOrderByInput";

export type ProductOrderFindManyArgs = {
  where?: ProductOrderWhereInput;
  orderBy?: Array<ProductOrderOrderByInput>;
  skip?: number;
  take?: number;
};
