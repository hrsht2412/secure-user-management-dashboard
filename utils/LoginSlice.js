import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

export const fetchLogin = createAsyncThunk("fetchLogin", async (item) => {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return response.json();
});

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    token:null
  },
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload;
    },
    removeToken: (state) => {
        state.token = null;
    },
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.token = action.payload.token;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default LoginSlice.reducer;
export const { setToken, removeToken } = LoginSlice.actions;
