
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '80%',
  padding: theme.spacing(4), 
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
        height: '100vh',
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
