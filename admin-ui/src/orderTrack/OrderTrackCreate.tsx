import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductOrderTitle } from "../productOrder/ProductOrderTitle";

export const OrderTrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
