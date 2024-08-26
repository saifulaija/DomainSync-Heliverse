export interface TUser {
    _id:string;
  name: string;
  email: string;
  gender: "Male" | "Female";
  domain: string;
  availability: boolean;
  avatar?: string;
  isDeleted?: boolean;
}
