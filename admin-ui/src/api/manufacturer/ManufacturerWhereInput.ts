import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ManufacturerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
