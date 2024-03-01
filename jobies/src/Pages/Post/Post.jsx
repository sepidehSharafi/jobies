import * as React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { post } from '../../httpClient';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input as BaseInput } from '@mui/base/Input';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';

export default function post() {

    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [imageURL, setImageURL] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("userAuth"));
        if (localUser && localUser.id === null) {
            window.alert("you are NOT logged in!!!")
            navigate("/");

        }
    }
    )
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const localUser = JSON.parse(localStorage.getItem("userAuth"));

        const username = localUser.username
        const userID = localUser.userID
        const response = await post("/post", {userID, username,subject, content, imageURL}) ;
            localStorage.setItem("post", JSON.stringify(response.post));
            navigate("/");
    };

    const Input = React.forwardRef(function CustomInput(props, ref) {
        return (
            <BaseInput
                slots={{
                    root: RootDiv,
                    input: 'input',
                    textarea: TextareaElement,
                }}
                {...props}
                ref={ref}
            />
        );
    });


    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Make a POST!
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="subject"
                        label="subject"
                        name="subject"
                        autoComplete="subject"
                        onChange={(e) => setSubject(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        id="content"
                        label="content"
                        name="content"
                        autoComplete="content"
                        onChange={(e) => setContent(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="photo"
                        label="photo"
                        name="photo"
                        placeholder="Enter Photo URL"
                        autoComplete="photo"
                        onChange={(e) => setImageURL(e.target.value)}
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Make a Post
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}



 function MultipleInteractionCard( ) {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none">
            
          </Link>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions"></Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs"></Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs"></Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}