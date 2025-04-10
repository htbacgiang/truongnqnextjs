import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  coupon: "",
  discount: 0,
  totalAfterDiscount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!Array.isArray(state.cartItems)) {
        state.cartItems = [];
      }
      const existingIndex = state.cartItems.findIndex(
        (item) => item.product === action.payload.product
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex].quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
      state.cartTotal = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      if (!Array.isArray(state.cartItems)) return;
      state.cartItems = state.cartItems.filter(
        (item) => item.product !== action.payload
      );
      state.cartTotal = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },

    increaseQuantity: (state, action) => {
      if (!Array.isArray(state.cartItems)) return;
      const index = state.cartItems.findIndex(
        (item) => item.product === action.payload
      );
      if (index >= 0) {
        state.cartItems[index].quantity += 1;
        state.cartTotal += state.cartItems[index].price;
      }
    },

    decreaseQuantity: (state, action) => {
      if (!Array.isArray(state.cartItems)) return;
      const index = state.cartItems.findIndex(
        (item) => item.product === action.payload
      );
      if (index >= 0) {
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity -= 1;
          state.cartTotal -= state.cartItems[index].price;
        } else {
          state.cartItems.splice(index, 1);
          state.cartTotal = state.cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
        }
      }
    },
    setCart: (state, action) => {
      state.cartItems = action.payload.products;
      state.cartTotal = action.payload.cartTotal;
      state.coupon = action.payload.coupon || "";
      state.discount = action.payload.discount || 0;
      state.totalAfterDiscount = action.payload.totalAfterDiscount || state.cartTotal;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setCart,
} = cartSlice.actions;
export default cartSlice.reducer;
