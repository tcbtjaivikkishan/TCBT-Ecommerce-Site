import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image?: string;
  qty: number;
};

type AddToCartPayload = Omit<CartItem, "qty"> & {
  qty?: number;
};

const initialState: { items: CartItem[] } = {
  items: [],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const { id, qty = 1 } = action.payload;

      const existing = state.items.find((i) => i.id === id);

      if (existing) {
        existing.qty += qty;
      } else {
        state.items.push({ ...action.payload, qty });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    setQty: (state, action: PayloadAction<{ id: string; qty: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (!item) return;
      item.qty = Math.max(1, action.payload.qty);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, setQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
