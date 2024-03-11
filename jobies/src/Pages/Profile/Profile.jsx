// import React from "react";

//  const Profile = () => {
//   const localUser = JSON.parse(localStorage.getItem("userAuth"));
//   return (
//     <div>
//       <h2>{localUser.firstname}</h2>
//       <p>{localUser.lastname}</p>
//       <p>{localUser.username}</p>
//       <p>{localUser.email}</p>
//     </div>
//   );
// };
// export default Profile;


// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';

// const DemoPaper = styled(Paper)(({ theme }) => ({
//   width: 120,
//   height: 120,
//   padding: theme.spacing(2),
//   ...theme.typography.body2,
//   textAlign: 'center',
// }));

// export default function SquareCorners() {
//     const localUser = JSON.parse(localStorage.getItem("userAuth"));

//   return (
//     <Stack direction="row" spacing={4}>
//       <DemoPaper square={false}>
//       <h2>{localUser.firstname}</h2>
//       <p>{localUser.lastname}</p>
//       <p>{localUser.username}</p>
//       <p>{localUser.email}</p>
//       </DemoPaper>
//     </Stack>
//   );
// }

// import React from 'react';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';

// const useStyles = styled({
//   customPaper: {
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '15px',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     textAlign: 'center',
//     fontSize: '24px',
//     backgroundImage: 'url("https://www.example.com/flower-background.jpg")',
//     backgroundSize: 'cover',
//   },
// });

// function CustomPaper({ children }) {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.customPaper}>
//       {children}
//     </Paper>
//   );
// }

// function App() {
//   const localUser = JSON.parse(localStorage.getItem("userAuth"));
//   return (
//     <CustomPaper>
//       <h2>{localUser.firstname}</h2>
//       <p>{localUser.lastname}</p>
//       <p>{localUser.username}</p>
//       <p>{localUser.email}</p>
//     </CustomPaper>
//   );
// }

// export default App;
// import React from 'react';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';

// const useStyles = styled({
//   customPaper: {
//     padding: '20px',
//     backgroundColor: , // رنگ آبی کاربنی
//     color: '#ffffff', // متن سفید
//     borderRadius: '15px',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     textAlign: 'center',
//     fontSize: '24px',
//     backgroundSize: 'cover',
//     border: '2px solid #ffffff', // برگه دور طرح دار
//   },
// });

// function CustomPaper({ children }) {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.customPaper}>
//       {children}
//     </Paper>
//   );
// }

// function App() {
//   const localUser = JSON.parse(localStorage.getItem("userAuth"));
//   return (
//     <CustomPaper>
//       <h2>{localUser.firstname}</h2>
//       <p>{localUser.lastname}</p>
//       <p>{localUser.username}</p>
//       <p>{localUser.email}</p>
//     </CustomPaper>
//   );
// }

// export default App;

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { colors } from '@mui/material';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '80%', // تنظیم عرض به 80% از صفحه
  padding: theme.spacing(4), // افزودن padding بزرگتر
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default function SquareCorners() {
  const localUser = JSON.parse(localStorage.getItem("userAuth"));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // ست کردن ارتفاع به ارتفاع صفحه
      }}
    >
      <DemoPaper square={false} sx={{ backgroundColor: "green", padding: "16px" }}>
        <h2>{localUser.firstname}</h2>
        <p>{localUser.lastname}</p>
        <p>{localUser.username}</p>
        <p>{localUser.email}</p>
      </DemoPaper>
    </Box>
  );
}
