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
import { ProductStockTitle } from "../productStock/ProductStockTitle";
import { SupplyTitle } from "../supply/SupplyTitle";

export const WarehouseCreate = (props: CreateProps): React.ReactElement => {
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
          source="productStocks"
          reference="ProductStock"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductStockTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="supplies"
          reference="Supply"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupplyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
