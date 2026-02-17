import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import uiReducer from "./slices/uiSlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
    product: productReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
