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


const handleUpdate = async (event) => {
    event.preventDefault();
    const response = await POST("/post/update/:id", { id, userID, username, comment });

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

    const [post, setPost] = useState();

    const [postTitle, setPostTitle] = useState();
    const [postContent, setPostContent] = useState();
    const [imageURL, setImageURL] = useState();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await get(`/posts/${id}`);
            console.log(response);
            setPost(response);
        };
        fetchPost();
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const localUser = JSON.parse(localStorage.getItem("userAuth"));
        console.log(localUser);
        const { userID, username } = localUser;
        if (!localUser && !localUser.id) {
            window.alert("You are not logged in!");
            navigate("/");
            return;
        }
        if (localUser.isAdmin === false && localUser.id != post.userID) {
            window.alert("You dont have permission");
            navigate("/");
        }
        console.log("userId and username: ", userID, username);
        const response = await put("/displayPost/update/:id", { postTitle, postContent, imageURL });
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
        <div>
            <textarea value={post?.posttitle}
            onChange={(e) => setPostTitle(e.target.value)}
            ></textarea>
            <textarea
            onChange={(e) => setPostContent(e.target.value)}
            >{post?.postcontent}</textarea>
            <textarea placeholder="enter image url"
            onChange={(e) => setImageURL(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}