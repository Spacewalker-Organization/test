import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ManufacturerList } from "./manufacturer/ManufacturerList";
import { ManufacturerCreate } from "./manufacturer/ManufacturerCreate";
import { ManufacturerEdit } from "./manufacturer/ManufacturerEdit";
import { ManufacturerShow } from "./manufacturer/ManufacturerShow";
import { WarehouseList } from "./warehouse/WarehouseList";
import { WarehouseCreate } from "./warehouse/WarehouseCreate";
import { WarehouseEdit } from "./warehouse/WarehouseEdit";
import { WarehouseShow } from "./warehouse/WarehouseShow";
import { JobsiteList } from "./jobsite/JobsiteList";
import { JobsiteCreate } from "./jobsite/JobsiteCreate";
import { JobsiteEdit } from "./jobsite/JobsiteEdit";
import { JobsiteShow } from "./jobsite/JobsiteShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { ProductStockList } from "./productStock/ProductStockList";
import { ProductStockCreate } from "./productStock/ProductStockCreate";
import { ProductStockEdit } from "./productStock/ProductStockEdit";
import { ProductStockShow } from "./productStock/ProductStockShow";
import { ProductOrderList } from "./productOrder/ProductOrderList";
import { ProductOrderCreate } from "./productOrder/ProductOrderCreate";
import { ProductOrderEdit } from "./productOrder/ProductOrderEdit";
import { ProductOrderShow } from "./productOrder/ProductOrderShow";
import { OrderTrackList } from "./orderTrack/OrderTrackList";
import { OrderTrackCreate } from "./orderTrack/OrderTrackCreate";
import { OrderTrackEdit } from "./orderTrack/OrderTrackEdit";
import { OrderTrackShow } from "./orderTrack/OrderTrackShow";
import { SupplyList } from "./supply/SupplyList";
import { SupplyCreate } from "./supply/SupplyCreate";
import { SupplyEdit } from "./supply/SupplyEdit";
import { SupplyShow } from "./supply/SupplyShow";
import { ProductSupplyList } from "./productSupply/ProductSupplyList";
import { ProductSupplyCreate } from "./productSupply/ProductSupplyCreate";
import { ProductSupplyEdit } from "./productSupply/ProductSupplyEdit";
import { ProductSupplyShow } from "./productSupply/ProductSupplyShow";
import { SupplyTrackList } from "./supplyTrack/SupplyTrackList";
import { SupplyTrackCreate } from "./supplyTrack/SupplyTrackCreate";
import { SupplyTrackEdit } from "./supplyTrack/SupplyTrackEdit";
import { SupplyTrackShow } from "./supplyTrack/SupplyTrackShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Manufacturer"
          list={ManufacturerList}
          edit={ManufacturerEdit}
          create={ManufacturerCreate}
          show={ManufacturerShow}
        />
        <Resource
          name="Warehouse"
          list={WarehouseList}
          edit={WarehouseEdit}
          create={WarehouseCreate}
          show={WarehouseShow}
        />
        <Resource
          name="Jobsite"
          list={JobsiteList}
          edit={JobsiteEdit}
          create={JobsiteCreate}
          show={JobsiteShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="ProductStock"
          list={ProductStockList}
          edit={ProductStockEdit}
          create={ProductStockCreate}
          show={ProductStockShow}
        />
        <Resource
          name="ProductOrder"
          list={ProductOrderList}
          edit={ProductOrderEdit}
          create={ProductOrderCreate}
          show={ProductOrderShow}
        />
        <Resource
          name="OrderTrack"
          list={OrderTrackList}
          edit={OrderTrackEdit}
          create={OrderTrackCreate}
          show={OrderTrackShow}
        />
        <Resource
          name="Supply"
          list={SupplyList}
          edit={SupplyEdit}
          create={SupplyCreate}
          show={SupplyShow}
        />
        <Resource
          name="ProductSupply"
          list={ProductSupplyList}
          edit={ProductSupplyEdit}
          create={ProductSupplyCreate}
          show={ProductSupplyShow}
        />
        <Resource
          name="SupplyTrack"
          list={SupplyTrackList}
          edit={SupplyTrackEdit}
          create={SupplyTrackCreate}
          show={SupplyTrackShow}
        />
      </Admin>
    </div>
  );
};

export default App;
