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
        postOrder : builder.query({
            query: (order) => ({
                url: "/s0j6/orders",
                headers: {
                    'x-zocom': "yum-24wDDIiKn23xmDqw"
                },
                body : JSON.stringify(order)
            })
        }),
    }),
});

export const {
    useGetMenuQuery,
    usePostOrderQuery
} = apiSlice;