import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "clients",
  initialState: {
    isLoadingClients: true,
    clients: [],
  },
  reducers: {
    onLoadClientes: (state, { payload = [] }) => {
      state.isLoadingClients = false;
      // state.events = payload;
      payload.forEach((client) => {
        const exists = state.clients.some(
          (dbClient) => dbClient.id === client.id
        );
        if (!exists) {
          state.clients.push(client);
        }
      });
    },
  },
});
export const { onLoadClientes } = clientSlice.actions;
