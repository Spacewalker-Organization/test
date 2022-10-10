import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { JOBSITE_TITLE_FIELD } from "../jobsite/JobsiteTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { WAREHOUSE_TITLE_FIELD } from "../warehouse/WarehouseTitle";

export const ProductOrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProductOrders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Item Count" source="itemCount" />
        <ReferenceField label="Jobsite" source="jobsite.id" reference="Jobsite">
          <TextField source={JOBSITE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rent Price" source="rentPrice" />
        <TextField label="Sourced From" source="sourcedFrom" />
        <ReferenceField
          label="Supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Warehouse"
          source="warehouse.id"
          reference="Warehouse"
        >
          <TextField source={WAREHOUSE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
