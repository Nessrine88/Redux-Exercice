import { createSlice } from "@reduxjs/toolkit";
import { CartIcon } from "../../icons";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 15,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState, 

});

export default cartSlice.reducer;
