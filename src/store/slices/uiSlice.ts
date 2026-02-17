import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Sort = "popular" | "new" | "price_asc" | "price_desc";

const initialState = {
  search: "",
  category: "All",
  sort: "popular" as Sort,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
    resetFilters: (state) => {
      state.search = "";
      state.category = "All";
      state.sort = "popular";
    },
  },
});

export const { setSearch, setCategory, setSort, resetFilters } = uiSlice.actions;
export default uiSlice.reducer;
