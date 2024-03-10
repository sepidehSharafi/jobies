import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { get } from '../../httpClient'
import { put } from '../../httpClient'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

function SquareCorners() {
    return (
        // <Stack direction="row" spacing={2}>
        //   <DemoPaper square={false}>{post?.posttitle}, {post?.postcontent}</DemoPaper>
        // </Stack>
        <div></div>
    );
}

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

export default function DisplayPost() {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log("Hello world!!!");
    console.log(id);
    const [expanded, setExpanded] = React.useState(false);

    const [like, setLike] = useState("");
    const [dislike, setDisLike] = useState("");

    const [post, setPost] = useState();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await get(`/posts/${id}`);
            console.log(response);
            setPost(response);
        };
        fetchPost();
    }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleSubmitLike = async (event) => {
        event.preventDefault();
        const response = await put("/post/like/:id", { id });
        console.log(response);
    };

    const theme = createTheme();
    theme.spacing(4);
    console.log(post);
    console.log(post?.posttitle);
    console.log(post?.postid);
    return (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Stack direction="column" spacing={4}>
          <DemoPaper
           sx={{
            width: 500, 
            height: 'auto',
            p: 2, 
            textAlign: 'center', 
            display: 'flex',
            flexDirection: 'column',
            direction: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          square={false}>
           <h1>{post?.posttitle} </h1> 
            <h2>username: {post?.username}</h2>
            <h3>post content:{post?.postcontent}</h3>
            <h4>created at:{post?.created_at}  </h4> 
            </DemoPaper>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
          </Box>
        </Stack>

        <CardMedia
        width={500}
        component="img"
        height="194"
        image={post?.image_url}
      />
      <SentimentVerySatisfiedIcon></SentimentVerySatisfiedIcon>
      <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon>
<label>comment</label>
<TextField placeholder='write a comment'></TextField>
      </Box>
    );
}

