import { StringFilter } from "../../util/StringFilter";
import { ManufacturerWhereUniqueInput } from "../manufacturer/ManufacturerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  manufacturer?: ManufacturerWhereUniqueInput;
  name?: StringNullableFilter;
};
