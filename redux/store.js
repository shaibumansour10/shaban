//create store
import cartSlice from "./slices/cartSlice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        //slice go here
        cart: cartSlice,
    }
})