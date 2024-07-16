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
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [{text:"Home", link:"/"},
    {text:"Products", link:"/"},
    {text:"About", link:"/"},
    {text:"Contact", link:"/"},
    {text:"Login", link:"/login"},
    {text:"Register", link:"/register"}];

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
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Store
          </Typography>

          <Hidden mdUp>
            <IconButton
              size="large"
              edge="end"
              aria-label="search"
              color="inherit"
            >
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
                  color: "red", // Thay đổi màu sắc hoặc style tại đây
                }}
                sx={{ ml: 2 }}
              >
                {item.text}
              </Button>
            ))}
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
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
