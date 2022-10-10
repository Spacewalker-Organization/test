import { JobsiteWhereInput } from "./JobsiteWhereInput";
import { JobsiteOrderByInput } from "./JobsiteOrderByInput";

export type JobsiteFindManyArgs = {
  where?: JobsiteWhereInput;
  orderBy?: Array<JobsiteOrderByInput>;
  skip?: number;
  take?: number;
};
