import { TQueryParam, TResponseRedux } from "@/types/global.type";


import { baseApi } from "../../api/baseApi";
import { TUser } from "@/types/user";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: (options) => {
        console.log({ options });
        return {
          url: `/users/${options.productId}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["user"],
    }),

    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/users",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    createUser: builder.mutation({
      query: (userInfo) => ({
        url: "/users",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["user"],
    }),

    getAllUsersByCategory: builder.query({
      query: (category) => {
        return {
          url: `/users/category/${category}`,
          method: "GET",
        };
      },
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["user"],
    }),

    getSingleUser: builder.query({
      query: (userId) => {
        return {
          url: `/users/${userId}`,
          method: "Get",
        };
      },
      providesTags: ["user"],
    }),
   
  }),
});

export const {
useCreateUserMutation,
useDeleteUserMutation,
useGetAllUsersByCategoryQuery,
useGetAllUsersQuery,
useGetSingleUserQuery
} = userApi;
