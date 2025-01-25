import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { warehouseApi } from './slices/apiSlice';
import warehouseReducer from './slices/warehouseSlice';

const rootReducer = combineReducers({
  [warehouseApi.reducerPath]: warehouseApi.reducer,
  warehouse: warehouseReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(warehouseApi.middleware),
});

export type AppRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
