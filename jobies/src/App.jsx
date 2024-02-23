import * as React from 'react';
import './App.css'
import { createTheme } from '@mui/material/styles';
import AppNavBar from './components/HomePage';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { ImgMediaCard } from './components/HomePage';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
   const theme = createTheme();
   theme.spacing(2);

   return (
      <Router>
         <ThemeProvider theme={theme}>
            <div>
               <Container>
                  <Box
                     sx={{
                        px: 4,
                        gap: 8
                     }}>
                     <AppNavBar />
                     <Routes>
                        <Route path="/login" element={<Login />} />
                     </Routes>
                     {/* <ImgMediaCard /> */}
                  </Box>
               </Container>
            </div>
         </ThemeProvider>
      </Router>
   )
}
export default App

