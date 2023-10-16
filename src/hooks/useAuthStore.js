import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({}));
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          dispatch(onLogout("Credenciales incorrectas"));
        } else {
          dispatch(onLogout("Error en el servidor"));
        }
      } else if (error.request) {
        dispatch(onLogout("No se pudo conectar al servidor"));
      } else {
        dispatch(onLogout("Error de red o del cliente"));
      }

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ email, password, name }) => {
    dispatch(onChecking());
    try {
      const { data } = await api.post("/auth/new", { email, password, name });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || "--"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    try {
      const { data } = await api.get("auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({}));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
