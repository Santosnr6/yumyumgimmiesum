import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com" 
    }),
    endpoints: (builder) => ({
        getMenu : builder.query({
            query: () => ({
                url: "/menu",
                headers: {
                    'x-zocom': "yum-24wDDIiKn23xmDqw"
                }
            })
        }),
        getOrder : builder.query({
            query: (id) => ({
                url: `/s0j6/orders/${id}`,
                headers: {
                    'x-zocom': "yum-24wDDIiKn23xmDqw"
                }
            })
        }),
        postOrder : builder.mutation({
            query: (order) => ({
                method: "POST",
                url: "/s0j6/orders",
                headers: {
                    'x-zocom': "yum-24wDDIiKn23xmDqw"
                },
                body : order
            })
        }),
    }),
});

export const {
    useGetMenuQuery,
    useGetOrderQuery,
    usePostOrderMutation
} = apiSlice;