import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCTSUPPLY_TITLE_FIELD } from "./ProductSupplyTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { SUPPLY_TITLE_FIELD } from "../supply/SupplyTitle";

export const ProductSupplyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Product Count" source="productCount" />
        <ReferenceField
          label="Supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Supply" source="supply.id" reference="Supply">
          <TextField source={SUPPLY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SupplyTrack"
          target="ProductSupplyId"
          label="SupplyTracks"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product Supply"
              source="productsupply.id"
              reference="ProductSupply"
            >
              <TextField source={PRODUCTSUPPLY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
