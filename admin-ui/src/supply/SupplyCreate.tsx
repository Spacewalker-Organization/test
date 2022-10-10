import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductSupplyTitle } from "../productSupply/ProductSupplyTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";

export const SupplyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="productSupplies"
          reference="ProductSupply"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductSupplyTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="warehouse.id"
          reference="Warehouse"
          label="Supply To"
        >
          <SelectInput optionText={WarehouseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
