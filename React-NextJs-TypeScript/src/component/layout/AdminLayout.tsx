import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const drawerWidth = 40; // Đảm bảo rằng chiều rộng này giống với sidebar

const AdminLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Container sx={{ marginLeft: `${drawerWidth}px`, padding: 3 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default AdminLayout;
