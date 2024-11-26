import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    isLoggedIn: false,
};

// Create a slice for authentication
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
        },
    },
});

// Export actions
export const { logIn, logOut } = authSlice.actions;

// Create the store
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
