import { DarkModeState } from "@/types/DarkMode";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DarkModeState = {
  value: null,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;