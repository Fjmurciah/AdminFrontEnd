import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthStore, useForm } from "../../hooks";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Input,
} from "@nextui-org/react";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};

export const LoginPage = () => {
  const { startLogin, errorMessage, startRegister } = useAuthStore();

  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);
  const {
    registerEmail,
    registerName,
    registerPassword,
    registerPassword2,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    if (registerPassword !== registerPassword2) {
      Swal.fire("Error en registro", "Contraseñas no son iguales", "error");
      return;
    }

    startRegister({
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div style={{ display: "block" }}>
      <Image
        style={{ position: "absolute", top: "50px", left: "50px" }}
        width={300}
        alt="Una imagen"
        src="https://misurtii.com/themes/custom/mi_surti/images/logo_misurtii.svg"
      ></Image>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card>
          <CardHeader className="justify-center">
            <h3 className="font-bold text-large">Ingreso</h3>
          </CardHeader>
          <CardBody>
            <form onSubmit={loginSubmit}>
              <div className="w-full justify-center flex flex-row flex-wrap gap-4">
                <Input
                  isRequired
                  type="email"
                  placeholder="Correo"
                  name="loginEmail"
                  value={loginEmail}
                  onChange={onLoginInputChange}
                />
                <Input
                  isRequired
                  type="password"
                  placeholder="Contraseña"
                  name="loginPassword"
                  value={loginPassword}
                  onChange={onLoginInputChange}
                />
                <Button style={{ width: "50%" }} type="submit" color="primary">
                  Login
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
