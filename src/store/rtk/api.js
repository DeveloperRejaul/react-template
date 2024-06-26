import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export default createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://example.com',
    credentials: 'include',
  }),
  endpoints: () => ({}),
});
