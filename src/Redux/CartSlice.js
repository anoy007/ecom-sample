import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    totalAmount: 0,
    items: [],
  },
  reducers: {
    addItem(state, action) {
      // const value = action.payload;

      let updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      let alreadyExistIndex = state.items.findIndex(
        (e) => e.id === action.payload.id
      );
      let existingCartItem = state.items[alreadyExistIndex];
      let updatedItem;
      
      if (existingCartItem) {
        const updatedItems = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItem = [...state.items];
        updatedItem[alreadyExistIndex] = updatedItems;
      } else {
        updatedItem = state.items.concat(action.payload);
      }

      return {
        ...state,
        totalAmount: updatedTotalAmount,
        items: updatedItem,
      };
    },
    removeItem(state, action) {
      const id = action.payload;
      const item = [...state.items];
      // const latestItem = item.filter((e)=>{})
    },
  },
});

export const cartAction = CartSlice.actions;
export default CartSlice;
