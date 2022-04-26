import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { colors } from "../Data/colors";

const AllMemes = () => {
  // Initial values
  const formData = {
    topText: "",
    bottom: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    color: "Brown",
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
  const { topText, bottom, randomImage, color } = form;

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

        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            placeholder="age"
            size="small"
            value={color}
            name="color"
            variant={"outlined"}
            displayEmpty
            onChange={handleChange}
          >
            <MenuItem value="brown">Choose text color</MenuItem>
            {colors.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
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
          sx={{ width: "100%", height: "100%" }}
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
              top: "10px",
              left: "100px",
              fontWeight: "bolder",
              textAlign: "center",
              color: { color },
              fontFamily: "cursive",
              fontSize: "25px",
            },

            "@media (min-width: 481px) and (max-width: 767px)": {
              position: "absolute",
              width: "30%",
              top: "10px",
              left: "120px",
              fontWeight: "bolder",
              textAlign: "center",
              color: { color },
              fontFamily: "cursive",
              fontSize: "25px",
            },

            "@media (min-width: 768px) and (max-width: 991px)": {
              position: "absolute",
              width: "30%",
              top: "10px",
              left: "200px",
              fontSize: "35px",
              fontWeight: "bolder",
              textAlign: "center",
              color: { color },
              fontFamily: "cursive",
            },

            "@media (min-width: 992px) and (max-width: 1199px)": {
              position: "absolute",
              width: "30%",
              top: "10px",
              left: "250px",
              fontSize: "35px",
              fontWeight: "bolder",
              textAlign: "center",
              color: { color },
              fontFamily: "cursive",
            },

            "@media (min-width: 1200px)": {
              position: "absolute",
              width: "30%",
              top: "20px",
              left: "370px",
              fontSize: "35px",
              fontWeight: "bolder",
              textAlign: "center",
              color: { color },
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
              bottom: "10px",
              left: "100px",
              fontWeight: "bolder",
              textAlign: "center",
              color: { color },
              fontFamily: "cursive",
              fontSize: "25px",
            },

            "@media (min-width: 481px) and (max-width: 767px)": {
              position: "absolute",
              width: "30%",
              bottom: "10px",
              left: "120px",
              fontWeight: "bolder",
              textAlign: "center",
              color: { color },
              fontFamily: "cursive",
              fontSize: "25px",
            },

            "@media (min-width: 768px) and (max-width: 991px)": {
              position: "absolute",
              width: "30%",
              bottom: "20px",
              left: "210px",
              fontSize: "35px",
              fontWeight: "bolder",
              textAlign: "center",
              color: { color },
              fontFamily: "cursive",
            },

            "@media (min-width: 992px) and (max-width: 1199px)": {
              position: "absolute",
              width: "30%",
              bottom: "20px",
              left: "250px",
              fontSize: "35px",
              fontWeight: "bolder",
              textAlign: "center",
              color: { color },
              fontFamily: "cursive",
            },

            "@media (min-width: 1200px)": {
              position: "absolute",
              width: "30%",
              bottom: "20px",
              left: "370px",
              fontSize: "50px",
              fontWeight: "bolder",
              textAlign: "center",
              color: { color },
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
