import { OrderTrack as TOrderTrack } from "../api/orderTrack/OrderTrack";

export const ORDERTRACK_TITLE_FIELD = "id";

export const OrderTrackTitle = (record: TOrderTrack): string => {
  return record.id || record.id;
};
