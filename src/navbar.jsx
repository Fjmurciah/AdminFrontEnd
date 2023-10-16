import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
  Spacer,
  Image,
} from "@nextui-org/react";

import { useAuthStore } from "./hooks";

export const GeneralNavbar = () => {
  const { startLogout, user } = useAuthStore();
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          width={60}
          alt="NextUI hero Image"
          src="https://misurtii.com/themes/custom/mi_surti/images/logo_misurtii.svg"
        />
        <Spacer></Spacer>
        <p className="font-bold text-inherit">Administrador {user.name}</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" href="/">
            Tables
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/imagenes">
            Imagenes
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="danger" href="#" variant="flat" onClick={startLogout}>
            Salir
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
