import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthContextProvider";
import PersonIcon from "@mui/icons-material/Person";
import { useCart } from "../../contexts/CartContextProvider";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://asiastore.kg//">
        Asia Store
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Auth() {
  const {
    user,
    email,
    password,
    emailError,
    passwordError,
    hasAccount,
    setEmail,
    setPassword,
    setHasAccount,
    handleRegister,
    handleLogin,
  } = useAuth();

  const { cartCleaner } = useCart();

  React.useEffect(() => {
   
    cartCleaner();
  }, []); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [showLoginForm, setShowLoginForm] = React.useState(true);

  const toggleForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  const handleLoginSubmit = async () => {
    await handleLogin();
    cartCleaner(); 
  };

  const handleRegisterSubmit = async () => {
    await handleRegister();
    cartCleaner(); 
  };

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "5px 20px 50px #000",
            height: "400px",
            perspective: "1000px",
            transformStyle: "preserve-3d",
            transition: "transform 0.6s ease-in-out",
            transform: showLoginForm ? "rotateY(0deg)" : "rotateY(360deg)",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <PersonIcon sx={{ color: "white" }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            {showLoginForm ? "Login Form" : "Register Form"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              width: "80%",
            }}
          >
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={emailError}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText={passwordError}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {showLoginForm ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLoginSubmit}
              >
                Войти
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleRegisterSubmit}
              >
                Регистрация
              </Button>
            )}
            <Grid container>
              <Grid item>
                <Typography
                  onClick={toggleForm}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "red",
                  }}
                >
                  {showLoginForm
                    ? `У вас нету аккаунта? Нажмите сюда`
                    : "У вас уже есть аккаунт? Нажмите сюда"}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
