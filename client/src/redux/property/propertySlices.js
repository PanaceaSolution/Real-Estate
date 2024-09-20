import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createProduct ,getOwnProperty} from "./propertyAPI";

const initialState = {
  status: "idle",
  error: null,
  product: [],
  isLoading: false,
  isCreated:false
};
// AsyncThunk
export const createProductAsync = createAsyncThunk(
  "property/createProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createProduct(data);
    
      return response.data; 
    } catch (error) {
      // Ensure the error is user-friendly
      const message = error.message || "Failed to create product";
      return rejectWithValue(message);
    }
  }
);
export const getOwnPropertyAsync = createAsyncThunk(
  "property/getOwnProperty",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getOwnProperty();
    
      return response.data; 
    } catch (error) {
      // Ensure the error is user-friendly
      const message = error.message || "Failed to create product";
      return rejectWithValue(message);
    }
  }
);

// Slice
export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    resetMessages: (state) => {
      state.error = null;
    },
    resetIsCreated:(state)=>{
      state.isCreated=false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProductAsync.pending, (state) => {
        state.status = "loading";
        state.isLoading = true; 
        state.error = null; 
        state.isCreated=false
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.product.push(action.payload);
        state.isCreated=true
        state.isLoading = false; 
      })
      .addCase(createProductAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; 
        state.isCreated=false
        state.isLoading = false; 
      })
      // get own Property addcases
      .addCase(getOwnPropertyAsync.pending, (state) => {
        state.status = "loading";
        state.isLoading = true; 
        state.error = null; 
        state.isCreated=false
      })
      .addCase(getOwnPropertyAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.product=action.payload;
        state.isCreated=true
        state.isLoading = false; 
      })
      .addCase(getOwnPropertyAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; 
        state.isCreated=false
        state.isLoading = false; 
      });
  },
});

export const { resetMessages ,resetIsCreated} = propertySlice.actions;

export const selectProduct = (state) => state.property.isCreated;
export const selectPropertyStatus = (state) => state.property.isLoading;
export const selectPropertyError = (state) => state.property.error;
export const ownProperty=(state)=>state.property.product

export default propertySlice.reducer;
