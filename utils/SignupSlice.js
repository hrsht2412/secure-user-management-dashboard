import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchSignup = createAsyncThunk("fetchSignup", async (item) => {
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.json();
  });
const signupSlice=createSlice({
    name:"signup",
     initialState: {
        isLoading: false,
        data: null,
        isError: false,
      },
      extraReducers: (builder) => {
        builder.addCase(fetchSignup.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(fetchSignup.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.data=action.payload
        
        })
        builder.addCase(fetchSignup.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true
        })
      }
});
export default signupSlice.reducer;
