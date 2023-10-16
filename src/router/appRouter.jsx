import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { AdministracionPage } from "../administracion";
import { useAuthStore } from "../hooks";
import { ImagenesPage } from "../imagenes";
import { CircularProgress } from "@nextui-org/react";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress label="Cargando..." />
      </div>
    );
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<AdministracionPage />} />
          <Route path="/imagenes" element={<ImagenesPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
