import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductSupplyTitle } from "../productSupply/ProductSupplyTitle";

export const SupplyTrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="productsupply.id"
          reference="ProductSupply"
          label="Product Supply"
        >
          <SelectInput optionText={ProductSupplyTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "In Transit", value: "InTransit" },
            { label: "Delivered", value: "Delivered" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
