import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { post } from '../../httpClient';



function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const response = await post("/signup", { firstname, lastname, username, password, email }).catch(error()=>{
  //     console.log(error);
  //   }).then(() => {
  //     localStorage.setItem("userAuth", JSON.stringify(response.user));
  //     navigate("/");
  //   })    
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await post("/signup", { firstname, lastname, username, password, email });
        console.log(response);
        if(response && response.user) {
          localStorage.setItem("userAuth", JSON.stringify({ firstname, lastname, username, email }));
          navigate("/");
        } else {
          console.log("Invalid response or user not found in response.");
        }
    } catch (error) {
        console.log(error);
    }   
};


  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("userAuth"));
    if (localUser && localUser.id) {
      window.alert("you are ALREADY logged in!!!")
      navigate("/");

    }
  });
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("userAuth"));
    if (localUser && localUser.firstname && localUser.lastname && localUser.email) {
      window.alert("there is already an account with this information")
    }
  });



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={(e) => setLastname(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="user-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to="/login" variant="body2">
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
          <RouterLink to="/"><Button type="Back" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Back</Button></RouterLink>
        </Box>        
      </Container>
    </ThemeProvider>
  );
}
export default SignUp;

// import { useEffect, useState } from 'react';
// import { AuthUser } from '../../AuthRouter';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {
//     Button,
//     CssBaseline,
//     TextField,
//     Link,
//     Grid,
//     Box,
//     Typography,
//     Container,
//     createTheme,
//     ThemeProvider,

// } from '@material-ui/core';


// const theme = createTheme();

// export default function SignUp() {

//     let auth = AuthUser()
//     const navigate = useNavigate()

//     const initialUser = { name: "", "email": "", "password": "" }
//     const [user, setUser] = useState(initialUser)
//     const [isSubmit, setIsSubmit] = useState(false)
//     const [formError, setFormError] = useState({})

//     useEffect(() => {

//         if (Object.keys(formError).length === 0 && isSubmit) {
//             console.log(user)
//         }

//     }, [formError, isSubmit])

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         setIsSubmit(true)
//         setFormError(validate(user))


//         if (Object.keys(formError).length === 0) {

//             const userData = await axios.post('http://127.0.0.1:8080/reg', user)
//             const data = userData.data

//             if (data.status === 201) {
//                 auth.signUp(data)
//                 navigate('/', { replace: false })
//             }
//             else {
//                 setFormError({ "error": data.message })
//                 console.log(data)
//             }

//         }
//     };


//     const handleChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value })
//     }

//     //form validation
//     const validate = (value) => {
//         const error = {}
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//         if (!value.name) {
//             error.name = "Username is required"
//         }
//         if (!value.email) {
//             error.email = "email is required"
//         } else if (!regex.test(value.email)) {
//             error.email = "Invalide email format"

//         }
//         if (!value.password) {
//             error.password = "password is required"
//         } else if (value.password.length < 5) {
//             error.password = "password must be more than 4 characters"
//         } else if (value.password.length > 11) {
//             error.password = "password must be with in 10 characters"
//         }

//         return error
//     }


//     return (
//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />

//                 <Box
//                     sx={{
//                         marginTop: 10,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >

//                     <Typography component="h1" variant="h4" style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         marginTop: '30px'
//                     }}>
//                         Sign Up
//                     </Typography>

//                     <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>


//                         <TextField
//                             error={formError.name ? true : false}
//                             helperText={formError.name ? formError.name : ''}
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="name"
//                             label="Enter name"
//                             name="name"
//                             autoComplete="name"
//                             onChange={handleChange}
//                             autoFocus
//                         />

//                         <TextField
//                             error={formError.email ? true : false}
//                             helperText={formError.email ? formError.email : ''}
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="email"
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             onChange={handleChange}
//                             autoFocus
//                         />
//                         <TextField
//                             error={formError.password ? true : false}
//                             helperText={formError.password ? formError.password : ''}
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             onChange={handleChange}
//                             autoComplete="current-password"
//                         />

//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                             style={{ marginTop: "20px" }}
//                         >
//                             Sign Up
//                         </Button>
//                         <Grid container style={{ marginTop: '10px' }} >
//                             <Grid item>
//                                 <Link href="/login" variant="body2">
//                                     {"Already have an account? Log In"}
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                         {(formError.error) &&
//                             <Button
//                                 type="button"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                                 style={{
//                                     marginTop: "20px",
//                                     backgroundColor: "red"
//                                 }}
//                             >
//                                 {(formError.error) ? formError.error : ''}
//                             </Button>
//                         }
//                     </Box>
//                 </Box>

//             </Container>
//         </ThemeProvider>
//     );
// }