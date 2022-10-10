import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductOrderTitle } from "../productOrder/ProductOrderTitle";

export const OrderTrackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="productorder.id"
          reference="ProductOrder"
          label="Product Order"
        >
          <SelectInput optionText={ProductOrderTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "In Transit", value: "InTransit" },
            { label: "Packed", value: "Packed" },
            { label: "Delivered", value: "Delivered" },
            { label: "Dispatched", value: "Dispatched" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
