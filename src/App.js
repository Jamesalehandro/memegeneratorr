import Container from "@mui/material/Container";
import AllMemes from "./components/Allmemes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Container
      disableGutters
      sx={{
        // border: "2px solid crimson",
        width: "90%",
        my: 5,
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        minHeight: "50vh",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      className="App"
    >
      <NavBar />
      <AllMemes />
    </Container>
  );
};

export default App;
