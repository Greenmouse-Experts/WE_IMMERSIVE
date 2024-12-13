import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { data: null },
  reducers: {
    weImmersiveUser(state, action) {
      state.data = action.payload;
    },
  },
});

export const { weImmersiveUser } = userSlice.actions;
export default userSlice.reducer;
