import { configureStore, createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from './authSlice';
import authReducers from './authSlice';
import cartReducers from './cartSlice';
import inspectorReducers from './inspectorSlice';
import { inspect } from 'util';
// Create the store
const store = configureStore({
    reducer: {
        auth: authReducers,
        cart: cartReducers,
        inspector: inspectorReducers
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
