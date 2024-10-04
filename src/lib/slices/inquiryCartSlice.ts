import { InquiryCartState } from "@/types/InquiryCart";
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
      state.products = state.products.map((product: any) => product.id === action.payload.id ? product = action.payload.newProduct : product)
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product: any) => product.id !== action.payload.id)
    },
    clear: (state) => {
      state.products = []
    },
  },
});

export const { addProduct, editProduct, removeProduct, clear } = inquiryCartSlice.actions;
export default inquiryCartSlice.reducer;