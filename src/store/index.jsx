import {configureStore,createSlice} from "@reduxjs/toolkit"
import cartSlice from "./card-slice";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})
    
export default store ;