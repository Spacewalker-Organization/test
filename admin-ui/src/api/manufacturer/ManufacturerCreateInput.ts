import { ProductCreateNestedManyWithoutManufacturersInput } from "./ProductCreateNestedManyWithoutManufacturersInput";

export type ManufacturerCreateInput = {
  name?: string | null;
  products?: ProductCreateNestedManyWithoutManufacturersInput;
};
