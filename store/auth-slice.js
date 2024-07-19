import { createSlice, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isAuthenticated: false,
  },
  reducers: {
    authenticate(state, action) {
      state.token = action.payload;

      state.isAuthenticated = true;
      AsyncStorage.setItem("token", action.payload);
    },
    logout(state) {
      state.token = "";
      state.isAuthenticated = false;
      AsyncStorage.removeItem("token");
    },
    setInitialToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
});

export const { authenticate, logout, setInitialToken } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
