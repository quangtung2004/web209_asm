import { Box, Container } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import Loading from "../Loading";
import { useLoading } from "src/contexts/Loading";
import { useFlash } from "src/contexts/Flash";
import Flash from "../Flash";
import { useEffect } from "react";

const drawerWidth = 40; // Đảm bảo rằng chiều rộng này giống với sidebar

const AdminLayout = () => {
  const nav = useNavigate();
  const { loading } = useLoading();
  const { flash } = useFlash();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      nav("/login");
      return;
    }
  }, [token, nav]);
  return (
    <>
      <Loading isShow={loading} />
      <Flash isShow={flash} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Container sx={{ marginLeft: `${drawerWidth}px`, padding: 3 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default AdminLayout;
