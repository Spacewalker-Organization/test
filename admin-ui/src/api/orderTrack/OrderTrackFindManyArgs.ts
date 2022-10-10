import { OrderTrackWhereInput } from "./OrderTrackWhereInput";
import { OrderTrackOrderByInput } from "./OrderTrackOrderByInput";

export type OrderTrackFindManyArgs = {
  where?: OrderTrackWhereInput;
  orderBy?: Array<OrderTrackOrderByInput>;
  skip?: number;
  take?: number;
};
