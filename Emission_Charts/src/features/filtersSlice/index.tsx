import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  country: string;
  ghg: string;
  startDate: string;
  endDate: string;
}

const initialState: CounterState = {
  country: "DE",
  ghg: "methane",
  startDate: "",
  endDate: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    startDateFilterSelect: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    endDateFilterSelect: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
    countryFilterSelect: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    ghgFilterSelect: (state, action: PayloadAction<string>) => {
      state.ghg = action.payload;
    },
  },
});

export const {
  countryFilterSelect,
  ghgFilterSelect,
  startDateFilterSelect,
  endDateFilterSelect,
} = filtersSlice.actions;

export default filtersSlice.reducer;
