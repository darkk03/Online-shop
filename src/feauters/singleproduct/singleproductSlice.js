import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../../utils/consts";

export const SingleproductSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
      getProduct: builder.query({
        query: ({ id }) => `/products/${id}`,
        providesTags: ["Product"],
      }),
    }),
  });
  
  export const { useGetProductQuery, useGetProductsQuery } = SingleproductSlice;