import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
//import { Routes, Route, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
const navigateToLogin = () => {

  navigate('/login');
};
const routes = [
  {
    path: "/",
    exact: true,
  },
  {
    path: "/login",
  },
  {
    path: "/shoelaces",

  }
];

export default function AppNavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>        
         
          <Button color="inherit">
            <Link to="/login" color="inherit" style={{ textDecoration: 'none' }}>Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Like">
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton aria-label="DisLike">
          <SentimentVeryDissatisfiedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}