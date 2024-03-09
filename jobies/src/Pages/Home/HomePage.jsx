// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import { createSvgIcon } from '@mui/material/utils';
// import Stack from '@mui/material/Stack';
// import { Link } from "react-router-dom";
// import { Container } from '@mui/material';
// import { ThemeProvider } from '@emotion/react';
// import { createTheme } from '@mui/material/styles';
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import PostCard from '../Post/Post'
// import { get } from '../../httpClient';
// import SortIcon from '@mui/icons-material/Sort';


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// function PostCards({ posts }) {
//   return (
//     (posts &&
//       <div>
//         {posts.map((post, index) => (
//           <PostCard key={index} post={post} />
//         ))}
//       </div>
//     )
//   );
// }

// export default function Bar() {
//   let [isLogin, setisLogin] = useState(false);

//   const navigate = useNavigate();

//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await get("/posts");
//       console.log(response);
//       setPosts(response);
//     };
//     fetchPosts();
//   }, []);

//   const [input, setInput] = useState("");

//   // const handleSearchSubmit = async (event) => {
//   //   event.preventDefault();
//   //   const response = await get("/posts/search", { input });
//   //   // setPosts(response)
//   //   console.log(response);
//   //   if (response.error) {
//   //     console.log("error");
//   //   }
//   // };


//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



//   const handleSort = async () => {
//     const response = await get("/posts/sort");
//     setPosts(response);
//     fetchPosts();
//   }

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const logout = () => {
//     localStorage.setItem("userAuth", null)
//   }

//   const login = () => {
//     isLogin = localStorage.getItem("userAuth")
//     if (login != null) {
//       setisLogin(true)
//     }
//   }

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <Link to="/login"><MenuItem onClick={handleMenuClose}>Login</MenuItem></Link>
//       <Link to="/signup"><MenuItem onClick={handleMenuClose}>Sign Up</MenuItem></Link>
//       <Link to="/profile"><MenuItem onClick={handleMenuClose}>Profile</MenuItem></Link>
//       {/* {isAdmin &&
//         (<Link to="/administration"><MenuItem onClick={handleMenuClose}>Admin page</MenuItem></Link>)
//       } */}
//       {login && (
//         <Link to="/"><MenuItem onClick={logout}>log out</MenuItem></Link>
//       )}
//     </Menu>
//   );

//   const PlusIcon = createSvgIcon(
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//     </svg>,
//     'Plus',
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >

//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   const theme = createTheme();
//   theme.spacing(2);

//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <Box sx={{ flexGrow: 1 }}>
//           <AppBar position="static">
//             <Toolbar>
//               <IconButton
//                 size="large"
//                 edge="start"
//                 color="inherit"
//                 aria-label="open drawer"
//                 sx={{ mr: 2 }}

//               >
//                 <MenuIcon />
//               </IconButton>
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{ display: { xs: 'none', sm: 'block' } }}
//               >
//                 MUI
//               </Typography>
//               <Search>
//                 <SearchIconWrapper>
//                   <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                   placeholder="Search…"
//                   inputProps={{ 'aria-label': 'search' }}
//                   onChange={(e) => setInput(e.target.value)}
//                 />
//               </Search>
//               {/* <button onClick={handleSearchSubmit}>search</button> */}
//               <SortIcon
//                 onClick={handleSort}
//               ></SortIcon>

//               <Box sx={{ flexGrow: 1 }} />
//               <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                 <Link to="/post"><IconButton size="large" color="inherit">
//                   <Badge color="error">
//                     <Stack direction="row" spacing={3}>
//                       <PlusIcon color="success" />
//                     </Stack>
//                   </Badge>
//                 </IconButton></Link>
//                 <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                   <Badge badgeContent={4} color="error">
//                     <MailIcon />
//                   </Badge>
//                 </IconButton>
//                 <IconButton
//                   size="large"
//                   aria-label="show 17 new notifications"
//                   color="inherit"
//                 >
//                   <Badge badgeContent={17} color="error">
//                     <NotificationsIcon />
//                   </Badge>
//                 </IconButton>
//                 <IconButton
//                   size="large"
//                   edge="end"
//                   aria-label="account of current user"
//                   aria-controls={menuId}
//                   aria-haspopup="true"
//                   onClick={handleProfileMenuOpen}
//                   color="inherit"
//                 >
//                   <AccountCircle />
//                 </IconButton>
//               </Box>
//               <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                 <IconButton
//                   size="large"
//                   aria-label="show more"
//                   aria-controls={mobileMenuId}
//                   aria-haspopup="true"
//                   onClick={handleMobileMenuOpen}
//                   color="inherit"
//                 >
//                   <MoreIcon />
//                 </IconButton>
//               </Box>
//             </Toolbar>
//           </AppBar>
//           {renderMobileMenu}
//           {renderMenu}
//         </Box>
//         <PostCards posts={posts} />
//       </Container>
//     </ThemeProvider>
//   );
// }

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { createSvgIcon } from '@mui/material/utils';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {PostCard} from '../Post/Post'
import { get } from '../../httpClient';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function PostCards({ posts }) {
  return (
    (posts && 
    <div>
      {posts.map((post, index) => (  
        <PostCard key={index} post={post} />
      ))}
    </div>
    )
  );
}

export default function Bar() {
  let [isLogin, setisLogin] = useState(false);

  const navigate = useNavigate();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await get("/posts");
      console.log(response);
      setPosts(response);
    };
    fetchPosts();
  }, []);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logout = () => {
    localStorage.setItem("userAuth", null)
  }

  const login = () => {
    isLogin = localStorage.getItem("userAuth")
    if (login != null) {
      setisLogin(true)
    }
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/login"><MenuItem onClick={handleMenuClose}>Login</MenuItem></Link>
      <Link to="/signup"><MenuItem onClick={handleMenuClose}>Sign Up</MenuItem></Link>
      <Link to="/profile"><MenuItem onClick={handleMenuClose}>Profile</MenuItem></Link>
      {/* {isAdmin &&
        (<Link to="/administration"><MenuItem onClick={handleMenuClose}>Admin page</MenuItem></Link>)
      } */}
      {login && (
        <Link to="/"><MenuItem onClick={logout}>log out</MenuItem></Link>
      )}
    </Menu>
  );

  const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const theme = createTheme();
  theme.spacing(2);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}

              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                MUI
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Link to="/post"><IconButton size="large" color="inherit">
                  <Badge color="error">
                    <Stack direction="row" spacing={3}>
                      <PlusIcon color="success" />
                    </Stack>
                  </Badge>
                </IconButton></Link>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
        <PostCards posts={posts} />
      </Container>
    </ThemeProvider>
  );
}
