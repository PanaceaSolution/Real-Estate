import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers, login } from "./authAPI";

const initialState = {
  status: "idle", // 'idle' | 'loading' | 'failed'
  error: null,
  users: []
};

// AsyncThunk
export const getAllUsersAsync = createAsyncThunk(
  "auth/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsers();
      return response.data;
    } catch (error) {
      // If the error is an object, ensure it's serializable
      return rejectWithValue(error.message || 'Failed to fetch users');
    }
  }
);

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      return response.data;
    } catch (error) {
      // If the error is an object, ensure it's serializable
      return rejectWithValue(error.message || 'Failed to fetch users');
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.status = "loading";
        // Removed isLoading
      })
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
        // Removed isLoading
      })
      .addCase(getAllUsersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        // Removed isLoading
      })
      // Handling loginAsync cases
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.status = "idle";
        // Handle successful login if needed (e.g., setting user data, token, etc.)
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetMessages } = authSlice.actions;

export const selectUsers = (state) => state.auth.users;
export const selectUsersStatus = (state) => state.auth.status;
export const selectUserError = (state) => state.auth.error;

export default authSlice.reducer;
