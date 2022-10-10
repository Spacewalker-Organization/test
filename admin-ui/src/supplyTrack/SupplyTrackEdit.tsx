import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductSupplyTitle } from "../productSupply/ProductSupplyTitle";

export const SupplyTrackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
