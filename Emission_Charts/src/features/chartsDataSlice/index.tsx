import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  barChartData: any;
}

const initialState: CounterState = {
  barChartData: [{ average: 0, start: "", end: "" }],
};

export const chartsData = createSlice({
  name: "chartsData",
  initialState,
  reducers: {
    setBarChartData: (state, action: PayloadAction<Object>) => {
      state.barChartData = action.payload;
    },
  },
});

export const { setBarChartData } = chartsData.actions;

export default chartsData.reducer;
