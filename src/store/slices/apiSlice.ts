import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, SortOrder } from '../../types/apiTypes';
import { getTokenFromLS } from '../../utils/localStorageActions';

const BaseUrl = 'https://hcateringback-dev.unitbeandev.com/api/wh/items';

export const warehouseApi = createApi({
  reducerPath: 'warehouseItemsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
    prepareHeaders: (headers) => {
      const token = getTokenFromLS();

      if (token) {
        headers.set('Authorization', `${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Items'],
  endpoints: (builder) => ({
    getItemList: builder.query<
      ApiResponse,
      { page: number; pageSize: number; sortOrder: SortOrder }
    >({
      query: ({ page, pageSize, sortOrder }) => {
        return {
          url: `?page=${page}&pageSize=${pageSize}&sortOrder=${sortOrder}`,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.result.map(({ id }) => ({
                type: 'Items' as const,
                id,
              })),
              { type: 'Items', id: 'LIST' },
            ]
          : [{ type: 'Items', id: 'LIST' }],
    }),
  }),
});

export const { useGetItemListQuery } = warehouseApi;
