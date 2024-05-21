import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import orderSlice from "./orders";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    orders: orderSlice.reducer
  }
});