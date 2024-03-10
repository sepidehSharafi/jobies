import * as React from 'react';
import { put } from '../../httpClient';
import { TextField } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createTheme } from '@mui/material/styles';
import { get } from '../../httpClient';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';


const handleUpdate = async (event) =>{
    event.preventDefault();
    const response = await POST("/post/update/:id", { id,userID, username, comment });

}
const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
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

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const localUser = JSON.parse(localStorage.getItem("userAuth"));
        console.log(localUser);
        if (!localUser && !localUser.id) {
          window.alert("You are not logged in!");
          navigate("/");
          return;
        }
    
        const { userID, username } = localUser;
        console.log("userId and username: " , userID, username);
        const response = await POST("/post/comment", { id,userID, username, comment });
        console.log(response);
        if (response.error) {
          console.error(response.error);
      };
    }

  




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
           <TextField>{post?.posttitle}</TextField>
           <TextField>{post?.postcontent}</TextField>
           <TextField>{post?.created_at}</TextField>
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



<button onClick={handleSubmit}>submit</button>

      </Box>
    );
        }