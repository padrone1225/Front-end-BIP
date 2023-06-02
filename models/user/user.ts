export enum UserRoles {
  LICENSEE = "licensee",
  LICENSOR = "licensor",
  AGENCY = "agency",
}

export type UserPostResponse = {
  message: string;
  email: string;
  token: string;
};

export type UserPostRequest = {
  user_uuid?: string;
  email?: string;
  password?: string;
  name_first?: string;
  name_last?: string;
  roles?: UserRoles[];
  about?: string;
  brands_represented?: string[];
  company_name?: string;
  payment_reminder_days_ahead?: number[];
};
