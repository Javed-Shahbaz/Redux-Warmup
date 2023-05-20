import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'react-dom';'./features/cart/cartSlice';  
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});