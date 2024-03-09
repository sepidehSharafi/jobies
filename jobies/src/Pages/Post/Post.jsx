// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Badge } from '@mui/material';
// import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import { useState, useEffect } from "react";
// import { put } from '../../httpClient'
// import { useParams,useNavigate } from "react-router-dom";
// import { ThemeProvider } from '@emotion/react';
// import { Container } from '@mui/material';
// import { createTheme } from '@mui/material/styles';
// import { Link } from "react-router-dom";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function PostCard(post) {
//   const navigate = useNavigate();
//   const [expanded, setExpanded] = React.useState(false);

//   const [like, setLike] = useState("");
//   const [dislike, setDisLike] = useState("");

//   const postID = post.post.postid

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//   console.log(post);
//   console.log(post.post.posttitle);

//   const handleSubmitLike = async (event) => {
//     event.preventDefault();
//     const response = await put("/posts", { postID, like, dislike });
//     console.log(response);
//     navigate("/")
//   };
//   const theme = createTheme();
//   theme.spacing(4);
//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }

//         title={post.post.posttitle}
//         subheader={post.post.created_at}

//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image={post.post.image_url}
//         alt={post.post.postcontent}
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <SentimentVerySatisfiedIcon onClick={handleSubmitLike}
//           onChange={(e) => setLike(e.target.value)}
//         >
//           <Badge badgeContent={post.post.likes_count} color="secondary">
//             <FavoriteIcon />
//           </Badge>
//         </SentimentVerySatisfiedIcon>
//         <SentimentVeryDissatisfiedIcon onClick={handleSubmitLike}
//           onChange={(e) => setDisLike(e.target.value)}
//         >
//           <Badge badgeContent={post.post.dislikes_count} color="secondary">
//             <ShareIcon />
//           </Badge>
//         </SentimentVeryDissatisfiedIcon>
//         <Link to={`/displayPost/${post.post.postid}`}>   
//        <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//         </Link>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>
//           </Typography>
//           <Typography paragraph>
//           </Typography>
//           <Typography paragraph>
//           </Typography>
//           <Typography>
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//     </Container>
//     </ThemeProvider>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge } from '@mui/material';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function PostCard(post) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    const handleSubmitLike = async (event) => {
    event.preventDefault();
    const response = await put("/posts", { postID, like, dislike });
    console.log(response);
    navigate("/")
  };
console.log(post);
console.log(post.post.posttitle);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
        title={post.post.posttitle}
        subheader={post.post.created_at}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.post.image_url}
        alt={post.post.postcontent}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <SentimentVerySatisfiedIcon onClick={handleSubmitLike}
          onChange={(e) => setLike(e.target.value)}
        >
          <Badge badgeContent={post.post.likes_count} color="secondary">
            <FavoriteIcon />
          </Badge>
        </SentimentVerySatisfiedIcon>
        <SentimentVeryDissatisfiedIcon onClick={handleSubmitLike}
          onChange={(e) => setDisLike(e.target.value)}
        >
          <Badge badgeContent={post.post.dislikes_count} color="secondary">
            <ShareIcon />
          </Badge>
        </SentimentVeryDissatisfiedIcon>
        <Link to={`/displayPost/${post.post.postid}`}>
                <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore></Link>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
      
          </Typography>
          <Typography paragraph>
       
          </Typography>
          <Typography paragraph>
        
          </Typography>
          <Typography>
           
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
