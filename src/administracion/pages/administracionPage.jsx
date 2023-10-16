import { AdministrationTable } from "../components/";
import { Image, Spacer } from "@nextui-org/react";
import { GeneralNavbar } from "../../navbar";

export const AdministracionPage = () => {
  return (
    <>
      <GeneralNavbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <div
          style={{
            width: "80%",
          }}
        >
          <AdministrationTable />
        </div>
      </div>
    </>
  );
};
