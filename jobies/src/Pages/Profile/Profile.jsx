import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const localUser = JSON.parse(localStorage.getItem("userAuth"));
  return (
    <div>
      <h2>{localUser.firstname}</h2>
      <p>{localUser.lastname}</p>
      <p>{localUser.username}</p>
      <p>{localUser.email}</p>
    </div>
  );
};
export default Profile;

//export default Profile;
//  function ImgMediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div" aria-valuetext="localUser.firstname">
//         </Typography>
//         <Typography variant="body2" color="text.secondary" te > 
//         </Typography>
//         <div title="localUser.firstname"></div>
//         <Typography gutterBottom variant="h5" component="div" aria-valuetext="localUser.username">
//         </Typography> <Typography gutterBottom variant="h5" component="div" aria-valuetext="localUser.email">
//         </Typography>
//       </CardContent>

//     </Card>
//   );
// }