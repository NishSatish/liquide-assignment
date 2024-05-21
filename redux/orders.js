import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      const cart = action.payload;
      state.push({
        id: Math.random(),
        items: cart.cartItems,
        quantity: cart.cartQuantity,
        value: cart.cartTotal
      });
    }
  }
});

export const orderActions = orderSlice.actions;
export default orderSlice;