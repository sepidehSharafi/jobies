import * as React from 'react';
import { put } from '../../httpClient';
import { TextField, Button } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createTheme } from '@mui/material/styles';
import { get } from '../../httpClient';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 400,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

export default function DisplayPost() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [post, setPost] = useState();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await get(`/posts/${id}`);
            setPost(response);
        };
        fetchPost();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const localUser = JSON.parse(localStorage.getItem("userAuth"));
        const { userID, username } = localUser;
        if (!localUser || !localUser.id) {
            window.alert("You are not logged in!");
            navigate("/");
            return;
        }
        if (!localUser.isAdmin && localUser.id !== post.userID) {
            window.alert("You don't have permission");
            navigate("/");
            return;
        }
        const response = await put(`/displayPost/update/${id}`, { postTitle, postContent, imageURL });
        if (response.error) {
            window.alert("somthing is wrong!");
        }
    };

    const theme = createTheme();

    return (
        <div>
            <DemoPaper elevation={3}>
                <TextField
                    label="Post Title"
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <TextField
                    label="Post Content"
                    multiline
                    rows={4}
                    onChange={(e) => setPostContent(e.target.value)}
                />
                <TextField
                    label="Image URL"
                    onChange={(e) => setImageURL(e.target.value)}
                />
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </DemoPaper>
        </div>
    );
}
