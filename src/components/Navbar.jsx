import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../contexts/AuthContextProvider";
import { ADMIN } from "../helpers/consts";
import { useCart } from "../contexts/CartContextProvider";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import navbarBacg from "../assets/dt.jpg";

const pages = [
  { id: 1, title: "Каталог", link: "/products" },
  { id: 2, title: "Контактная информация", link: "/contact" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { getProductsCountInCart, addProductToCart } = useCart();
  const [badgeCount, setBadgeCount] = React.useState(0);

  React.useEffect(() => {
    setBadgeCount(getProductsCountInCart());
  }, [addProductToCart]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        backgroundImage: "url(" + navbarBacg + ")",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/"}>
            <img width={50} src={require("../assets/747.png")} alt="" />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <Link style={{ textDecoration: "none" }} to={"/"}>
              Asia Store
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.id} to={page.link}>
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Button textAlign="center">
                      <b>{page.title}</b>
                    </Button>
                  </MenuItem>
                </Link>
              ))}
              {email === ADMIN ? (
                <Link to={"/add"}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Добавить продукт</Typography>
                  </MenuItem>
                </Link>
              ) : null}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                style={{ textDecoration: "none" }}
                key={page.id}
                to={page.link}
              >
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  className="btn-nav"
                  sx={{
                    my: 2,
                    borderRadius: "20px",
                    backgroundColor: "black",
                    color: "lightgray",
                    display: "block",
                    fontWeight: 700,
                    marginLeft: 5,
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
            {email === ADMIN ? (
              <Link style={{ textDecoration: "none" }} to={"/add"}>
                <Button
                  onClick={handleCloseNavMenu}
                  className="btn-nav"
                  sx={{
                    my: 2,
                    borderRadius: "20px",
                    backgroundColor: "black",
                    color: "lightgray",
                    display: "block",
                    fontWeight: 700,
                    marginLeft: 5,
                  }}
                >
                  Добавить продукт
                </Button>
              </Link>
            ) : (
              <Link
                style={{
                  marginLeft: "auto",
                  marginTop: "20px",
                  marginRight: "10px",
                }}
                to={"/cart"}
              >
                <Badge badgeContent={badgeCount} color="success">
                  <ShoppingCartIcon sx={{ color: "black" }} />
                </Badge>
              </Link>
            )}
          </Box>
          <Typography sx={{ color: "black" }}>
            {email
              ? `Добро пожаловать, ${
                  email.split("@")[0].charAt(0).toUpperCase() +
                  email.split("@")[0].slice(1)
                }!`
              : "Здравствуйте, Гость!"}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonIcon
                  sx={{
                    fontSize: 32,
                    borderRadius: 10,
                    color: "white",
                    backgroundColor: "black",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
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
              {email ? (
                <MenuItem
                  onClick={() => {
                    handleLogout();
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">Выйти</Typography>
                </MenuItem>
              ) : (
                <Link
                  to={"/auth"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Вход/Регистрация</Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
