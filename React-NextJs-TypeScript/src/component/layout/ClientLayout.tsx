import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const ClientLayout = () => {
  return (
    //hearder
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default ClientLayout;
