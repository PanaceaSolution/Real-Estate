import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers, deleteUserById, updateUserById } from './userApi';

const initialState = {
   users: [],
   status: "idle",
   error: null,
};

// AsyncThunk for fetching all users
export const getAllUsersAsync = createAsyncThunk(
   "auth/getAllUsers",
   async (_, { rejectWithValue }) => {
      try {
         const response = await getAllUsers();
         return response;
      } catch (error) {
         return rejectWithValue(error.message || "Failed to fetch users");
      }
   }
);

// AsyncThunk for deleting user
export const deleteUserByIdAsync = createAsyncThunk(
   "users/deleteUserById",
   async (id, { rejectWithValue }) => {
      try {
         await deleteUserById(id);
         return id; // Return the ID of the deleted user
      } catch (error) {
         return rejectWithValue(error.message || "Failed to delete user");
      }
   }
);

// AsyncThunk for updating user
export const updateUserByIdAsync = createAsyncThunk(
   "users/updateUserById",
   async (formData, { rejectWithValue }) => {
      try {
         const response = await updateUserById(formData);
         return response;
      } catch (error) {
         return rejectWithValue(error.message || "Failed to update user");
      }
   }
);

// User Slice
export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      resetUserError: (state) => {
         state.error = null;
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
         .addCase(deleteUserByIdAsync.fulfilled, (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
         })
         .addCase(updateUserByIdAsync.fulfilled, (state, action) => {
            const index = state.users.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
               state.users[index] = action.payload;
            }
         });
   },
});

export const { resetUserError } = userSlice.actions;


// Selectors
export const selectUsers = (state) => state.user.users;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.auth.error;

export default userSlice.reducer;
