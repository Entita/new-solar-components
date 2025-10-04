import { PricesSliceType, } from "@/types/Prices";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PricesSliceType = {
  prices: null,
};

const pricesSlice = createSlice({
  name: "prices",
  initialState,
  reducers: {
    setPrices: (state, action) => {
      state.prices = action.payload
    },
  },
});

export const { setPrices } = pricesSlice.actions;
export default pricesSlice.reducer;