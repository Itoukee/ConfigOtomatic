export interface IUser {
  _id: string;
  email: string;
  password: string;
  superAdmin?: boolean;
  refresh_token?: string;
}
