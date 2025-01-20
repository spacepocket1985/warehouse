import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOrder } from '../../types/apiTypes';
import { searchParams } from '../../utils/getPageSearchParams';

type StateType = {
  page: number;
  pageSize: number;
  total: null | number;
  sortOrder: SortOrder;
  itemName: string;
};

const initialState: StateType = {
  page: searchParams.pageSearchParam,
  pageSize: searchParams.pageSizeSearchParam,
  total: null,
  sortOrder: SortOrder.DESC,
  itemName: searchParams.itemNameSearchParam,
};

export const warehouseSlice = createSlice({
  name: 'warehouse',
  initialState,
  reducers: {
    setWarehouseTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setWarehousePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setWarehousePageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setWarehouseItemName: (state, action: PayloadAction<string>) => {
      state.itemName = action.payload;
      state.page = 1;
    },
    setWarehouseSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
    },
  },
});

export default warehouseSlice.reducer;

export const {
  setWarehouseTotal,
  setWarehousePage,
  setWarehousePageSize,
  setWarehouseItemName,
  setWarehouseSortOrder,
} = warehouseSlice.actions;
