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
console.log(post);
console.log(post.post.posttitle);

const handleSubmit = async (event) => {
  event.preventDefault();
  const response = await put("/login", { username, password });
  console.log(response);
  if (response.error) {
    console.log("error");
  } else {
    localStorage.setItem("userAuth", JSON.stringify(response.user));
    navigate("/");
  }
};

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
        <IconButton aria-label="add to favorites">
        <Badge badgeContent={post.post.likes_count} color="secondary">
          <FavoriteIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="share">
        <Badge badgeContent={post.post.dislikes_count} color="secondary">
          <ShareIcon />
          </Badge>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
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

