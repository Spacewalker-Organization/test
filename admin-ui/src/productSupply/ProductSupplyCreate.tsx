import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";
import { SupplyTitle } from "../supply/SupplyTitle";
import { SupplyTrackTitle } from "../supplyTrack/SupplyTrackTitle";

export const ProductSupplyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Price" source="price" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Product Count" source="productCount" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <ReferenceInput source="supply.id" reference="Supply" label="Supply">
          <SelectInput optionText={SupplyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="supplyTracks"
          reference="SupplyTrack"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupplyTrackTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
