import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductOrderTitle } from "../productOrder/ProductOrderTitle";
import { ProductSupplyTitle } from "../productSupply/ProductSupplyTitle";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="productOrders"
          reference="ProductOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductOrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productSupplies"
          reference="ProductSupply"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductSupplyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
