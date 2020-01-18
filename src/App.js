import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Presentation from "./components/Presentation";
import Container from "./styled-components/Container";

function App() {
  return (
    <Container>
      <Presentation />

      <Footer />
    </Container>
  );
}

export default App;
