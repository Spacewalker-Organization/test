import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";

export type ProductUpdateInput = {
  manufacturer?: ManufacturerWhereUniqueInput;
  name?: string | null;
};
