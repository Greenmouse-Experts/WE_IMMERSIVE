import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { data: null, email: null },
  reducers: {
    weImmersiveUser(state, action) {
      state.data = action.payload;
    },
    payloadEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { weImmersiveUser, payloadEmail } = userSlice.actions;
export default userSlice.reducer;
