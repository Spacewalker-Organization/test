import { Product } from "../product/Product";
import { Supplier } from "../supplier/Supplier";
import { Supply } from "../supply/Supply";
import { SupplyTrack } from "../supplyTrack/SupplyTrack";

export type ProductSupply = {
  createdAt: Date;
  id: string;
  price: number | null;
  product?: Product | null;
  productCount: number | null;
  supplier?: Supplier | null;
  supply?: Supply | null;
  supplyTracks?: Array<SupplyTrack>;
  updatedAt: Date;
};
