import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/Cart/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});