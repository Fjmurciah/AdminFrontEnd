import { configureStore } from "@reduxjs/toolkit";
import { authSlice, clientSlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    clients: clientSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
