import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loginUser:[],
    loading:false,
    error:null,
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
      signInStart:(state)=>{
        state.loading=true;
        state.error=null;
      },
      signInSuccess:(state,action)=>{
        state.loginUser=action.payload;
        state.loading=false;
        state.error=null;
        
      },
      signInFailure:(state,action)=>{
        state.error=action.payload;
        state.loading=false
      }
    }
})

export default userSlice.reducer;
export const {signInFailure,signInStart,signInSuccess}=userSlice.actions;