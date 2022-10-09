import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";

export type ProductCreateInput = {
  manufacturer: ManufacturerWhereUniqueInput;
  name?: string | null;
};
