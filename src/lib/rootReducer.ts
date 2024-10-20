import { combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import excelPricesReducer from "./slices/excelPricesSlice";
import inquiryCartReducer from "./slices/inquiryCartSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  darkMode: persistReducer(persistConfig, darkModeReducer),
  excelPrices: persistReducer(persistConfig, excelPricesReducer),
  inquiryCart: persistReducer(persistConfig, inquiryCartReducer),
})