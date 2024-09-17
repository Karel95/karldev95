import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
import Icon from "./icon";
import { Link } from "react-router-dom";

// Definimos los tipos de las props para el ThemeMode
type ModeProps = {
  isDarkMode: boolean;
  mode: (newMode: boolean) => void;
};

//const pages = ["Home", "Proyects", "Contact me"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar: React.FC<ModeProps> = ({ isDarkMode, mode }) => {
  // useEffect
  React.useEffect(() => {
    mode(!isDarkMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    mode(!isDarkMode);
  };

  const themeIcon = isDarkMode ? <DarkModeIcon /> : <LightModeIcon />;

  //
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            className="logo-icon-container"
            sx={{ display: { md: "flex" }, mr: 1 }}
          >
            <Icon />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 6,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Karldev95
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, ml: 5 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/projects"
              >
                <Typography sx={{ textAlign: "center" }}>Projects</Typography>
              </MenuItem>
              {/* <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/login"
              >
                <Typography sx={{ textAlign: "center" }}>Login</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/register"
              >
                <Typography sx={{ textAlign: "center" }}>Register</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/weather"
              >
                <Typography sx={{ textAlign: "center" }}>Weather</Typography>
              </MenuItem> */}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Karldev95
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem component={Link} to="/projects">
              <Typography sx={{ textAlign: "center" }}>Projects</Typography>
            </MenuItem>
            {/* <MenuItem component={Link} to="/login">
              <Typography sx={{ textAlign: "center" }}>Login</Typography>
            </MenuItem>
            <MenuItem component={Link} to="/register">
              <Typography sx={{ textAlign: "center" }}>Register</Typography>
            </MenuItem>
            <MenuItem component={Link} to="/weather">
              <Typography sx={{ textAlign: "center" }}>Weather</Typography>
            </MenuItem> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <Button
              className="tema"
              sx={{ ml: "10px" }}
              startIcon={themeIcon}
              variant="contained"
              color="primary"
              onClick={toggleTheme}
            />
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
