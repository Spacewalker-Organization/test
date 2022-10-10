import { Jobsite } from "../jobsite/Jobsite";
import { Product } from "../product/Product";
import { Warehouse } from "../warehouse/Warehouse";

export type ProductStock = {
  createdAt: Date;
  id: string;
  itemCount: number | null;
  jobsite?: Jobsite | null;
  product?: Product;
  updatedAt: Date;
  warehouse?: Warehouse | null;
};
