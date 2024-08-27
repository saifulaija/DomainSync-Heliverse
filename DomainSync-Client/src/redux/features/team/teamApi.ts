import { TQueryParam, TResponseRedux } from "@/types/global.type";

import { baseApi } from "../../api/baseApi";


const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
 

    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item?.name, item?.value as string);
          });
        }

        return {
          url: "/team",
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

    createTeam: builder.mutation({
      query: (teamInfo) => ({
        url: "/team",
        method: "POST",
        body: teamInfo,
      }),
      invalidatesTags: ["team"],
    }),

    getAllUsersByCategory: builder.query({
      query: (category) => {
        return {
          url: `/teams/category/${category}`,
          method: "GET",
        };
      },
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/teams/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["team"],
    }),

    getSingleUser: builder.query({
      query: (teamId) => {
        return {
          url: `/teams/${teamId}`,
          method: "Get",
        };
      },
      providesTags: ["team"],
    }),
  }),
});

export const {
 useCreateTeamMutation,
  useDeleteUserMutation,
  useGetAllUsersByCategoryQuery,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
} = teamApi;
