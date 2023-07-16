import { configureStore } from '@reduxjs/toolkit';

import fundReducer from './slices/fund';
import homeReducer from './slices/home';
import userReducer from './slices/user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer,
    fund: fundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
