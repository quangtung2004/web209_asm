import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const ClientLayout = () => {
  return (
    //hearder
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default ClientLayout;
