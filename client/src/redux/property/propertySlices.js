import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  getOwnProperty,
  getProductById,
  editProduct,
  deleteProduct,
  getAllProducts,
} from "./propertyAPI";

const initialState = {
  status: "idle",
  error: null,
  products: [],
  allProducts: [],
  isLoading: false,
  isCreated: false,
  product: null,
  isUpdated: false,
  isDeleted: false,
};

// AsyncThunk
export const createProductAsync = createAsyncThunk(
  "property/createProduct",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createProduct(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to create product");
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
      return rejectWithValue(error.message || "Failed to get properties");
    }
  }
);

export const getProductByIdAsync = createAsyncThunk(
  "property/getProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getProductById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get product by ID");
    }
  }
);

export const editProductAsync = createAsyncThunk(
  "property/editProduct",
  async ({ newData, id }, { rejectWithValue }) => {
    try {
      const response = await editProduct({ newData, id });
      return response.data; // Ensure this is the updated product
    } catch (error) {
      return rejectWithValue(error.message || "Failed to edit product");
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "property/deleteProduct",
  async ({ id, public_id }, { rejectWithValue }) => {
    try {
      const response = await deleteProduct({ id, public_id });
      return response.data; // This should return the deleted product or confirmation
    } catch (error) {
      return rejectWithValue(error.message || "Failed to delete product");
    }
  }
);

export const getAllProductsAsync = createAsyncThunk(
  "property/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllProducts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to get properties");
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
    resetIsCreated: (state) => {
      state.isCreated = false;
    },
    resetIsUpdated: (state) => {
      state.isUpdated = false;
    },
    resetIsDeleted: (state) => {
      state.isDeleted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProductAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isCreated = false;
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.isCreated = true;
      })
      .addCase(createProductAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.error = action.payload;
      })
      //
      .addCase(getOwnPropertyAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOwnPropertyAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getOwnPropertyAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //
      .addCase(getAllProductsAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.allProducts = action.payload;
      })
      .addCase(getAllProductsAsync.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload;
      })
      //
      .addCase(getProductByIdAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductByIdAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //
      .addCase(editProductAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isUpdated = false;
      })
      .addCase(editProductAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.products.findIndex(
          (item) => item._id === action.payload._id // Make sure you get the updated product
        );
        if (index !== -1) {
          state.products[index] = action.payload; // Update with the full product object
        }
        state.isUpdated = true;
      })
      .addCase(editProductAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to edit product";
        state.isUpdated = false;
      })
      //
      .addCase(deleteProductAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isDeleted = false;
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.products.findIndex(
          (item) => item._id === action.meta.arg.id // Accessing id from the meta property
        );
        if (index !== -1) {
          state.products.splice(index, 1); // Remove the deleted product from the array
        }
        state.isDeleted = true;
      })
      .addCase(deleteProductAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to delete product";
        state.isDeleted = false;
      })
  },
});

export const { resetMessages, resetIsCreated, resetIsUpdated, resetIsDeleted } =
  propertySlice.actions;

export const selectProduct = (state) => state.property.isCreated;
export const selectPropertyStatus = (state) => state.property.isLoading;
export const selectPropertyError = (state) => state.property.error;
export const ownProperty = (state) => state.property.products;
export const singleProperty = (state) => state.property.product;
export const updateStatus = (state) => state.property.isUpdated;
export const DeletedStatus = (state) => state.property.isDeleted;
export const selectAllProducts = (state) => state.property.allProducts

export default propertySlice.reducer;
