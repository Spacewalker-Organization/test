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

import { JobsiteTitle } from "../jobsite/JobsiteTitle";
import { OrderTitle } from "../order/OrderTitle";
import { OrderTrackTitle } from "../orderTrack/OrderTrackTitle";
import { ProductTitle } from "../product/ProductTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";

export const ProductOrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Item Count" source="itemCount" />
        <ReferenceInput source="jobsite.id" reference="Jobsite" label="Jobsite">
          <SelectInput optionText={JobsiteTitle} />
        </ReferenceInput>
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="orderTracks"
          reference="OrderTrack"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTrackTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput label="Rent Price" source="rentPrice" />
        <SelectInput
          source="sourcedFrom"
          label="Sourced From"
          choices={[
            { label: "Supplier", value: "Supplier" },
            { label: "Jobsite", value: "Jobsite" },
            { label: "Warehouse", value: "Warehouse" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="warehouse.id"
          reference="Warehouse"
          label="Warehouse"
        >
          <SelectInput optionText={WarehouseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
