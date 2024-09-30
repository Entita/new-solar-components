import { createSlice } from "@reduxjs/toolkit";

export interface DarkModeState {
  value: 'dark' | 'light' | null;
}

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