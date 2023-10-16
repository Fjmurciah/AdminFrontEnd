import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import { onLoadClientes } from "../store";

export const useClientsStore = () => {
  const dispatch = useDispatch();
  const { clients } = useSelector((state) => state.clients);

  const startLoadingClients = async () => {
    try {
      const { data } = await api.get("clients");
      const clients = data;
      dispatch(onLoadClientes(clients));
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  return {
    clients,
    startLoadingClients,
  };
};
