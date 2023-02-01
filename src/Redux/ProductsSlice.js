import { createSlice } from "@reduxjs/toolkit";

const productSice = createSlice({
  name: "products",
  initialState: {
    data: [] ,
  },
  reducers: {
    addProducts(state, actions) {
      let items = actions.payload;
      if (items) {
        // state.data.push(items);
        state.data = items
      }
    },
  },
});
export const productActions = productSice.actions
export default productSice;
