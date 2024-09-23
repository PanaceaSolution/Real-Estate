import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlices";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import propertyReducer from "../redux/property/propertySlices";
import userReducer from "../redux/user/userSlices"
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  property: propertyReducer
});
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);