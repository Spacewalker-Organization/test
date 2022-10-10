import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ManufacturerTitle } from "../manufacturer/ManufacturerTitle";
import { ProductOrderTitle } from "../productOrder/ProductOrderTitle";
import { ProductStockTitle } from "../productStock/ProductStockTitle";
import { ProductSupplyTitle } from "../productSupply/ProductSupplyTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="manufacturer.id"
          reference="Manufacturer"
          label="Manufacturer"
        >
          <SelectInput optionText={ManufacturerTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
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
          source="productSupplies"
          reference="ProductSupply"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductSupplyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
