import * as React from 'react';
import './App.css'
import { createTheme } from '@mui/material/styles';
import Bar from './Pages/Home/HomePage';
// import HomePage from './Pages/Home/HomePage';
// import Login from './Pages/Login/Login';
// import { ImgMediaCard } from './Pages/Home/HomePage';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {
   const theme = createTheme();
   theme.spacing(2);

   return (
      <ThemeProvider theme={theme}>
         <div>
            <Container>
               <Box
                  sx={{
                     px: 4,
                     gap: 8
                  }}>
                  <Bar/>
               </Box>
            </Container>
         </div>
      </ThemeProvider>
   )
}
export default App

