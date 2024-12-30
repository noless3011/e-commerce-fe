'use client'
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApi, UserApi } from '@/app/utils/ApiClient';
import { User } from '../types/User';
import { UpdateUserDto, UserResponseDto } from '@/api';

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
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logOutWithApi = createAsyncThunk(
    'auth/logOutWithApi',
    async (_, { dispatch }) => {
        try {
            const logOutFunc = await AuthApi.authControllerLogout();
            const res = await logOutFunc();
            console.log('logout called:', res);
            dispatch(logOut());
        } catch (error) {
            // Handle logout error (e.g., dispatch an error action, log the error)
            console.error("Logout API call failed:", error);
            // Optionally, dispatch an action to set an error state in your slice
            // dispatch(setLogoutError(error.message));
            throw error; // Re-throw to let the component handle the error if needed
        }
    }
);
export const updateUser = createAsyncThunk(
    'auth/updateUser',
    async (updateData: UpdateUserDto, { rejectWithValue }) => {
        try {
            const updateUserFunc = await UserApi.userControllerUpdateUserInfo(updateData);
            const response = await updateUserFunc();
            return response.data; // Assuming your API returns the updated user data
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || error.message || 'Failed to update user information');
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
            .addCase(checkLogin.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload; // Adjust based on your API response
            })
            .addCase(checkLogin.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.payload as string; // Set the error message
            }).addCase(logOutWithApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            }).addCase(logOutWithApi.fulfilled, (state) => {
                state.loading = false;
            }).addCase(logOutWithApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Logout failed';
            }).addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            }).addCase(updateUser.fulfilled, (state, action: PayloadAction<Array<UserResponseDto>>) => {
                state.loading = false;
                state.user = action.payload[0] as User; // Update user info in the state, you might need to adjust this if UserResponseDto is different from User
            }).addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;