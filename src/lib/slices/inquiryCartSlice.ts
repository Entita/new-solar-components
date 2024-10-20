import { mergeProductsWithExcelPrices } from "@/components/PruductsPage/Products";
import { InquiryCartState, InquiryProductState } from "@/types/InquiryCart";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InquiryCartState = {
  products: []
};

const inquiryCartSlice = createSlice({
  name: "inquiryCart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
    editProduct: (state, action) => {
      state.products = state.products.map((product: InquiryProductState) => product.id === action.payload.id ? product = action.payload.newProduct : product)
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product: InquiryProductState) => product.id !== action.payload.id)
    },
    refreshCart: (state, action) => {
      const excelPrices = action.payload
      const newMergedProducts = mergeProductsWithExcelPrices(excelPrices, state.products) as InquiryCartState['products']
      console.log('BLA', newMergedProducts)
      state.products = newMergedProducts
    },
  },
});

export const { addProduct, editProduct, removeProduct, refreshCart } = inquiryCartSlice.actions;
export default inquiryCartSlice.reducer;