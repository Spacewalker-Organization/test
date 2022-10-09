import { ProductUpdateManyWithoutManufacturersInput } from "./ProductUpdateManyWithoutManufacturersInput";

export type ManufacturerUpdateInput = {
  name?: string | null;
  products?: ProductUpdateManyWithoutManufacturersInput;
};
