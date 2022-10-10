import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { ProductModule } from "./product/product.module";
import { ManufacturerModule } from "./manufacturer/manufacturer.module";
import { WarehouseModule } from "./warehouse/warehouse.module";
import { JobsiteModule } from "./jobsite/jobsite.module";
import { SupplierModule } from "./supplier/supplier.module";
import { OrderModule } from "./order/order.module";
import { ProductStockModule } from "./productStock/productStock.module";
import { ProductOrderModule } from "./productOrder/productOrder.module";
import { OrderTrackModule } from "./orderTrack/orderTrack.module";
import { SupplyModule } from "./supply/supply.module";
import { ProductSupplyModule } from "./productSupply/productSupply.module";
import { SupplyTrackModule } from "./supplyTrack/supplyTrack.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    ProductModule,
    ManufacturerModule,
    WarehouseModule,
    JobsiteModule,
    SupplierModule,
    OrderModule,
    ProductStockModule,
    ProductOrderModule,
    OrderTrackModule,
    SupplyModule,
    ProductSupplyModule,
    SupplyTrackModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
