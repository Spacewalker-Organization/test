import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobsiteTitle } from "../jobsite/JobsiteTitle";
import { ProductTitle } from "../product/ProductTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";

export const ProductStockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Item Count" source="itemCount" />
        <ReferenceInput source="jobsite.id" reference="Jobsite" label="Jobsite">
          <SelectInput optionText={JobsiteTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="warehouse.id"
          reference="Warehouse"
          label="Warehouse"
        >
          <SelectInput optionText={WarehouseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
