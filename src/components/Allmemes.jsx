import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const AllMemes = () => {
  // Initial values
  const formData = {
    topText: "",
    bottom: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  };

  // Hooks
  const [form, setForm] = useState(formData);
  const [meme, setMeme] = useState({});

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      setMeme(response.data.data.memes);
    });
  }, []);

  // Destructuring
  const { topText, bottom, randomImage } = form;

  // Functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const getNewImage = () => {
    const randomNumber = Math.floor(Math.random() * meme.length + 1);
    const imageUrl = meme[randomNumber].url;
    setForm((prev) => ({ ...prev, randomImage: imageUrl }));
  };

  return (
    <Box component={"div"} sx={{ width: "80%", mt: 2, mb: 3 }}>
      <Stack direction={"row"} spacing={2} sx={{ alignItems: "center" }}>
        <TextField
          className="topText"
          name="topText"
          placeholder="Enter Top Text"
          type="text"
          id="topText"
          size="small"
          value={topText}
          variant={"outlined"}
          onChange={handleChange}
        />

        <TextField
          name="bottom"
          placeholder="Enter bottom Text"
          type="text"
          id="bottom"
          size="small"
          value={bottom}
          className="bottomText"
          onChange={handleChange}
        />
      </Stack>

      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ my: 3 }}
        onClick={getNewImage}
      >
        Get New Image
      </Button>

      <div className="memeImg">
        <Avatar
          variant="square"
          sx={{ width: "100%", height: "100%", zindex: -5 }}
          src={randomImage}
          alt=""
        />

        <Typography
          className="topMessage"
          variant="h4"
          sx={{
            "@media (max-width: 480px)": {
              position: "absolute",
              width: "30%",
              opacity: 1,
              zIndex: 10000,
              top: "10px",
              left: "100px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "coral",
              fontFamily: "cursive",
              fontSize: "25px",
            },

            "@media (min-width: 481px) and (max-width: 767px)": {
              position: "absolute",
              width: "30%",
              opacity: 1,
              zIndex: 10000,
              top: "10px",
              left: "120px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "coral",
              fontFamily: "cursive",
              fontSize: "25px",
            },

            "@media (min-width: 768px) and (max-width: 991px)": {
              position: "absolute",
              width: "30%",
              opacity: 1,
              zIndex: 10000,
              top: "10px",
              left: "200px",
              fontSize: "35px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "coral",
              fontFamily: "cursive",
            },

            "@media (min-width: 992px) and (max-width: 1199px)": {
              position: "absolute",
              width: "30%",
              opacity: 1,
              zIndex: 10000,
              top: "10px",
              left: "250px",
              fontSize: "35px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "coral",
              fontFamily: "cursive",
            },

            "@media (min-width: 1200px)": {
              position: "absolute",
              opacity: 1,
              zIndex: 10000,
              width: "30%",
              top: "20px",
              left: "370px",
              fontSize: "35px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "coral",
              fontFamily: "cursive",
            },
          }}
        >
          {topText}
        </Typography>

        <Typography
          className="bottomMessage"
          variant="h4"
          sx={{
            "@media (max-width: 480px)": {
              position: "absolute",
              width: "30%",
              opacity: 1,
              zIndex: 10000,
              bottom: "10px",
              left: "100px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "coral",
              fontFamily: "cursive",
              fontSize: "25px",
            },

            "@media (min-width: 481px) and (max-width: 767px)": {
              position: "absolute",
              width: "30%",
              opacity: 1,
              zIndex: 10000,
              bottom: "10px",
              left: "120px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "coral",
              fontFamily: "cursive",
              fontSize: "25px",
            },

            "@media (min-width: 768px) and (max-width: 991px)": {
              position: "absolute",
              width: "30%",
              opacity: 1,
              zIndex: 10000,
              bottom: "20px",
              left: "210px",
              fontSize: "35px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "coral",
              fontFamily: "cursive",
            },

            "@media (min-width: 992px) and (max-width: 1199px)": {
              position: "absolute",
              width: "30%",
              opacity: 1,
              zIndex: 10000,
              bottom: "20px",
              left: "250px",
              fontSize: "35px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "coral",
              fontFamily: "cursive",
            },

            "@media (min-width: 1200px)": {
              position: "absolute",
              width: "30%",
              opacity: 1,
              zIndex: 10000,
              bottom: "20px",
              left: "370px",
              fontSize: "50px",
              fontWeight: "bolder",
              textAlign: "center",
              color: "coral",
              fontFamily: "cursive",
            },
          }}
        >
          {bottom}
        </Typography>
      </div>
    </Box>
  );
};

export default AllMemes;
