import { SupplyTrack as TSupplyTrack } from "../api/supplyTrack/SupplyTrack";

export const SUPPLYTRACK_TITLE_FIELD = "id";

export const SupplyTrackTitle = (record: TSupplyTrack): string => {
  return record.id || record.id;
};
