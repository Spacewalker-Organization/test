import { Supply as TSupply } from "../api/supply/Supply";

export const SUPPLY_TITLE_FIELD = "id";

export const SupplyTitle = (record: TSupply): string => {
  return record.id || record.id;
};
