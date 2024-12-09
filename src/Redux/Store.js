import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/Carts/Cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
