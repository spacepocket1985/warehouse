import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOrder } from '../../types/apiTypes';

type StateType = {
  page: number;
  pageSize: number;
  total: null | number;
  sortOrder: SortOrder;
  itemName: string;
};

const initialState: StateType = {
  page: 1,
  pageSize: 10,
  total: null,
  sortOrder: SortOrder.ASC,
  itemName: '',
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
  },
});

export default warehouseSlice.reducer;

export const {
  setWarehouseTotal,
  setWarehousePage,
  setWarehousePageSize,
  setWarehouseItemName,
} = warehouseSlice.actions;
