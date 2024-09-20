import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers, login } from "./authAPI";

const initialState = {
  status: "idle", // 'idle' | 'loading' | 'failed'
  error: null,
  users: [],
  user: null, // Add user to store logged-in user data
};

// AsyncThunk for fetching users
export const getAllUsersAsync = createAsyncThunk(
  "auth/getAllUsers",
  async (token, { rejectWithValue }) => {
    try {
      const response = await getAllUsers(token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch users");
    }
  }
);

// AsyncThunk for login
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      if (response.user) {
        return response.user; // Return the user data directly
      } else {
        throw new Error("No user data returned");
      }
    } catch (error) {
      return rejectWithValue(error.message || "Failed to log in");
    }
  }
);

// AsyncThunk for logout
export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (storedToken, { rejectWithValue }) => {
    try {
      await logout(storedToken)
      return;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to log out");
    }
  }
);

// Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetMessages: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null; // Reset user state on logout
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle getAllUsersAsync cases
      .addCase(getAllUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(getAllUsersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle loginAsync cases
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload; // Store user data on successful login
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Handle logoutAsync cases
      .addCase(logoutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.status = "idle";
        state.user = null; // Clear user data on successful logout
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetMessages, logout } = authSlice.actions;

// Selectors
export const selectUsers = (state) => state.auth.users;
export const selectUsersStatus = (state) => state.auth.status;
export const selectUserError = (state) => state.auth.error;
export const selectLoggedInUser = (state) => state.auth.user;

export default authSlice.reducer;
