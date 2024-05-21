import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id, 
          price: newItem.price, 
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          img: newItem.img
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = (parseFloat(existingItem.price) * existingItem.quantity).toFixed(2);
      }

      state.totalQuantity++;
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        item.quantity--;
        item.totalPrice = item.price * item.quantity;
      }

      state.totalQuantity--;
    },

    eraseCart: (state, action) => {
      state.items = [];
      state.totalQuantity = 0;
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;