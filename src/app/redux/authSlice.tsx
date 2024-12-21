import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logOut: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;