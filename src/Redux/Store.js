import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./Slice/CartSlice"
import ProductSlice from "./Slice/ProductSlice"



export const Store = configureStore({
    reducer: {
        products: ProductSlice,
        cart: CartSlice
    }
})

