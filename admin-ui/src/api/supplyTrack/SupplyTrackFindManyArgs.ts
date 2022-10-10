import { SupplyTrackWhereInput } from "./SupplyTrackWhereInput";
import { SupplyTrackOrderByInput } from "./SupplyTrackOrderByInput";

export type SupplyTrackFindManyArgs = {
  where?: SupplyTrackWhereInput;
  orderBy?: Array<SupplyTrackOrderByInput>;
  skip?: number;
  take?: number;
};
