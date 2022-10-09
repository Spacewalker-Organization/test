import { Manufacturer } from "../manufacturer/Manufacturer";

export type Product = {
  createdAt: Date;
  id: string;
  manufacturer?: Manufacturer;
  name: string | null;
  updatedAt: Date;
};
