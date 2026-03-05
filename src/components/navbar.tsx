import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Snackbar,
  SnackbarCloseReason,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import Icon from "./icon";

type ModeProps = {
  isDarkMode: boolean;
  mode: (newMode: boolean) => void;
};

const Navbar: React.FC<ModeProps> = ({ isDarkMode, mode }) => {
  React.useEffect(() => {
    mode(!isDarkMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    mode(!isDarkMode);
  };

  const themeIcon = isDarkMode ? <DarkModeIcon /> : <LightModeIcon />;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(false);

  const themeMsg = isDarkMode ? 'Dark Mode Active' : 'Light Mode Active';

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: 'transparent',
        backgroundImage: 'none',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid',
        borderColor: isDarkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
      }}
    >
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
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Karldev95
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, ml: 5 }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
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
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: '0.95rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Karldev95
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              className="tema theme-toggle"
              sx={{
                ml: "10px",
                minWidth: 'auto',
                borderRadius: 0,
                border: '1.5px solid',
                borderColor: isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                color: 'inherit',
                padding: '6px 10px',
                '&:hover': {
                  borderColor: isDarkMode ? '#c8ff00' : '#1a1a1a',
                  color: isDarkMode ? '#c8ff00' : '#1a1a1a',
                  bgcolor: 'transparent',
                },
              }}
              startIcon={themeIcon}
              onClick={() => {
                toggleTheme();
                handleClick();
              }}
            />
            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message={themeMsg}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
