import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

// export type TResponse<T> = {
//   data?: T;
//   error?: TError;
//   meta?: TMeta;
//   success: boolean;
//   message: string;
// };
export type TResponse<T> = {
  data?: {
    result: T; // Update this to match your API response
  };
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};
export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type TUser = {
  userName: string;
  email: string;
  password: string;
  isDeleted: boolean;
  role: string;
};


export const GenderOption = ["Male", "Female"];
export const DomainOption = [
  "Sales",
  "Marketing",
  "UI Designing",
  "Business Development",
  "Management",
  "IT",
  "Finance"
];
