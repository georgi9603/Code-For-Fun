import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../features/filtersSlice";
import chartsDataReducer from "../features/chartsDataSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    chartsData: chartsDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
