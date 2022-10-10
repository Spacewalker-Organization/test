import { ProductSupply } from "../productSupply/ProductSupply";

export type SupplyTrack = {
  createdAt: Date;
  id: string;
  productsupply?: ProductSupply | null;
  status?: "InTransit" | "Delivered" | null;
  updatedAt: Date;
};
