import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOrder } from '../../types/apiTypes';

type StateType = {
  page: number;
  pageSize: number;
  total: null | number;
  sortOrder: SortOrder;
  itemName: string;
};

const validpageSize = [10, 50, 100];

const searchParam = new URLSearchParams(window.location.search);
const pageSearchParam = Number(searchParam.get('page')) || 1;
const pageSizeSearchParam = validpageSize .includes(
  Number(searchParam.get('pageSize'))
)
  ? Number(searchParam.get('pageSize'))
  : 10;
const itemNameSearchParam = searchParam.get('itemName') || '';

const initialState: StateType = {
  page: pageSearchParam,
  pageSize: pageSizeSearchParam,
  total: null,
  sortOrder: SortOrder.DESC,
  itemName: itemNameSearchParam,
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
