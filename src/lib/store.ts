import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import inquiryCartReducer from "./slices/inquiryCartSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    inquiryCart: inquiryCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;