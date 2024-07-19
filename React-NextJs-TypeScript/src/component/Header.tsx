import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Products", link: "/products" },
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    nav("/");
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Store
          </Typography>

          <Hidden mdUp>
            <IconButton size="large" edge="end" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={NavLink}
                to={item.link}
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                sx={{ ml: 2 }}
              >
                {item.text}
              </Button>
            ))}
            {!isLoggedIn ? (
              <>
                <Button color="inherit" component={NavLink} to="/login" sx={{ ml: 2 }}>
                  Login
                </Button>
                <Button color="inherit" component={NavLink} to="/register" sx={{ ml: 2 }}>
                  Register
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={handleLogout} sx={{ ml: 2 }}>
                Logout
              </Button>
            )}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <TextField
              placeholder="Search…"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton size="small" disableRipple>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: { borderRadius: 20 },
              }}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component={NavLink} to={item.link}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            {!isLoggedIn ? (
              <>
                <ListItem button component={NavLink} to="/login">
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button component={NavLink} to="/register">
                  <ListItemText primary="Register" />
                </ListItem>
              </>
            ) : (
              <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItem>
            )}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
