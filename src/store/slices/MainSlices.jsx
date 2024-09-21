import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "Smruti Ranjan Nayak",
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = mainSlice.actions;
export default mainSlice.reducer;
