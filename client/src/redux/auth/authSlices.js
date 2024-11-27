import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, logout, signup } from "./authAPI";


const initialState = {
  status: "idle", // 'idle' | 'loading' | 'failed'
  error: null,
  user: null, // Store logged-in user data
};

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

// AsyncThunk for Signup
export const signupAsync = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signup(data);
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
  async (_, { rejectWithValue }) => {
    try {
      await logout();
      return;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to log out");
    }
  }
);

// Auth Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
    },
    resetMessages: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
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

    // Handle SignupAsync cases
    .addCase(signupAsync.pending, (state) => {
      state.status = "loading";
    })
    .addCase(signupAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.user = action.payload; // Store user data on successful signup
    })
    .addCase(signupAsync.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    })

      .addCase(logoutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.status = "idle";
        state.user = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearUser, resetMessages } = authSlice.actions;

// Selectors
export const selectLoggedInUser = (state) => state.auth.user;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
