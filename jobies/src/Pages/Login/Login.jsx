import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { post } from '../../httpClient';
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignIn() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

useEffect (()=>{
  const localUser = JSON.parse(localStorage.getItem("userAuth"));
  if(localUser && localUser.id){
    window.alert("you are ALREADY logged in!!!")
    navigate("/");

  }
}

)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await post("/login", { username, password });
    console.log(response);
    if (response.error) {
      console.log("error");
    } else {
      localStorage.setItem("userAuth", JSON.stringify(response.user));
      navigate("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >

            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
            <RouterLink to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
        <RouterLink to="/"><Button type="Back" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Back</Button></RouterLink>
      </Box>
    </Container>
  );
}
