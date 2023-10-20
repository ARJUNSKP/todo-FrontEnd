import { createSlice } from "@reduxjs/toolkit";

const sampleSlice=createSlice({
    name:'sample',
    initialState:false,
    reducer:{
        tosetflage:(state,action)=>{
            state=action.payload
            console.log(action.payload)
        }
    }
})

export const {tosetflage}=sampleSlice.actions
export default sampleSlice.reducer