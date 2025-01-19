import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOrder } from '../../types/apiTypes';

type StateType = {
  page: number;
  pageSize: number;
  total: null | number;
  sortOrder: SortOrder;
};

const initialState: StateType = {
  page: 1,
  pageSize: 10,
  total: null,
  sortOrder: SortOrder.ASC,
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
  },
});

export default warehouseSlice.reducer;

export const { setWarehouseTotal, setWarehousePage } = warehouseSlice.actions;
