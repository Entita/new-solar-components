import { ExcelPricesSliceType, } from "@/types/Excel";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ExcelPricesSliceType = {
  value: {},
};

const excelPricesSlice = createSlice({
  name: "excelPrices",
  initialState,
  reducers: {
    setExcelPrices: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setExcelPrices } = excelPricesSlice.actions;
export default excelPricesSlice.reducer;