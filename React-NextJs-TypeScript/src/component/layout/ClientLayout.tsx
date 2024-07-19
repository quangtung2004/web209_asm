import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useLoading } from "src/contexts/Loading";
import Loading from "../Loading";
import { useFlash } from "src/contexts/Flash";
import Flash from "../Flash";
import { useEffect, useState } from "react";

const ClientLayout = () => {
  const { loading } = useLoading();
  const {flash} = useFlash();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    //hearder
    <>
    <Loading isShow={loading} />
    <Flash isShow={flash} />
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default ClientLayout;
