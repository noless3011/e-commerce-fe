import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { UserApi } from '@/app/utils/ApiClient'; // Assuming this is the correct path
import { User } from '../types/User';

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean; // Add a loading state
    error: string | null; // Add an error state
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

// Async Thunk for checking login
export const checkLogin = createAsyncThunk(
    'auth/checkLogin',
    async (_, { rejectWithValue }) => {
        try {
            const checkLoginFunc = await UserApi.userControllerGetCurrentUser();
            const checkLoginRes = await checkLoginFunc();
            console.log('thunk', checkLoginRes);
            return checkLoginRes.data; // Assuming the response data contains user info (e.g., username)
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to check login status');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null; // Clear any previous errors
        },
        logOut: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null; // Clear any previous errors
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(checkLogin.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload; // Adjust based on your API response
            })
            .addCase(checkLogin.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.payload as string; // Set the error message
            });
    },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;