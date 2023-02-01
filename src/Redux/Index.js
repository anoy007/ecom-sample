import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import productSice from "./ProductsSlice";
const Store = configureStore({
    reducer:{
        cart:CartSlice.reducer,
        products:productSice.reducer
    }
})

export default Store;