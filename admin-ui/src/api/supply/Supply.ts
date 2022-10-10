import { ProductSupply } from "../productSupply/ProductSupply";
import { Warehouse } from "../warehouse/Warehouse";

export type Supply = {
  createdAt: Date;
  id: string;
  productSupplies?: Array<ProductSupply>;
  supplyTo?: Warehouse | null;
  updatedAt: Date;
};
