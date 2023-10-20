import { configureStore } from "@reduxjs/toolkit";
import sampleSlice from "./sampleSlice";

const store=configureStore({
    reducer:{
        sample:sampleSlice
    }
})

export default store