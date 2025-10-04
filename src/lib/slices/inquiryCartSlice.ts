import { mergeProductsWithStripePrices } from "@/components/PruductsPage/Products";
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
      const stripePrices = action.payload
      const newMergedProducts = mergeProductsWithStripePrices(stripePrices, state.products) as InquiryCartState['products']
      state.products = newMergedProducts
    },
    increaseProduct: (state, action) => {
      const { productId, variantIndex } = action.payload;

      const product = state.products.find((p: InquiryProductState) => p.id === productId);
      if (product && product.variants && product.variants[variantIndex]) {
        product.variants[variantIndex].amount += 1;
      }
    },
    decreaseProduct: (state, action) => {
      const { productId, variantIndex } = action.payload;

      const product = state.products.find((p: InquiryProductState) => p.id === productId);
      if (product && product.variants && product.variants[variantIndex]) {
        product.variants[variantIndex].amount -= 1;
        if (product.variants[variantIndex].amount < 0) {
          product.variants[variantIndex].amount = 0;
        }
        const allZero = product.variants.every(v => v.amount === 0);
        if (allZero) {
          state.products = state.products.filter((p: InquiryProductState) => p.id !== productId);
        }
      }
    },
    resetCart: (state) => {
      state.products = []
    }
  },
});

export const { addProduct, editProduct, removeProduct, refreshCart, increaseProduct, decreaseProduct, resetCart } = inquiryCartSlice.actions;
export default inquiryCartSlice.reducer;