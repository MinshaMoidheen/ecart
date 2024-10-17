import { configureStore, createSlice } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";
import wishListSlice from './Slice/wishListSlice'
import cartSlice from './Slice/cartSlice'


const cartStore=configureStore({
    reducer:{

        productReducer:productSlice,
        wishListReducer:wishListSlice,
        cartReducer:cartSlice
    }
})

export default cartStore