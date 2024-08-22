import { configureStore } from '@reduxjs/toolkit';
import bodyReducer from './bodySlice';  // Import the body slice reducer

export const store = configureStore({
  reducer: {
    BodyReducer: bodyReducer  // Add the body reducer to your store
  }
});
