import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PRODUCTORDER_TITLE_FIELD } from "../productOrder/ProductOrderTitle";

export const OrderTrackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Product Order"
          source="productorder.id"
          reference="ProductOrder"
        >
          <TextField source={PRODUCTORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
