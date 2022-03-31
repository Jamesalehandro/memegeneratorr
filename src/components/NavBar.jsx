import React from "react";
import { Typography, Box } from "@mui/material";
import TrollFace from "../troll_face2.png";

const NavBar = () => {
  return (
    <Box
      component={"div"}
      sx={{
        width: "99.8%",
        // border: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#9F19CE",
        mb: 1,
        py: 1,
        color: "#FFFFFF",
      }}
    >
      <img src={TrollFace} width="40" height="35" alt="" />

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bolder",
          fontSize: "1.2rem",
          ml: 1,
          color: "white",
          fontFamily: " Roboto, sans-serif",
        }}
      >
        Meme Generator
      </Typography>
    </Box>
  );
};

export default NavBar;
