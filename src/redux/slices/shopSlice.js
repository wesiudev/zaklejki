import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  promotion: -1,
  couponId: null,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
    setCart: (state, action) => {
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setPromotion: (state, action) => {
      state.promotion = action.payload.promotion;
      state.couponId = action.payload.couponId;
    },
    prepareCart: (state) => {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      } else {
        state.cart = [];
      }
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { setCart, removeFromCart, prepareCart, clearCart, setPromotion } =
  shopSlice.actions;

export default shopSlice.reducer;
