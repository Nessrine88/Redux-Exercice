import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from './features/cards/cardeSlice'; // Assuming the correct path to your reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
