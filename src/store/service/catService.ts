import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const catAPI = createApi({
    reducerPath: 'catAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.thecatapi.com/v1/images/search?limit=10'}),
    endpoints: (build) => ({
        fetchCats: build.query<Object, string>({
            query: (filter) => ({
                url: `/${filter}`
            })
        }),
    })
})