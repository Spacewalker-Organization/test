import { Jobsite as TJobsite } from "../api/jobsite/Jobsite";

export const JOBSITE_TITLE_FIELD = "name";

export const JobsiteTitle = (record: TJobsite): string => {
  return record.name || record.id;
};
