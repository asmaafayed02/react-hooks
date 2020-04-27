import React from "react";
import MemeContextProvider  from "./contexts/memeContext";
import Navbar from "./components/navbar";
import NewMeme from "./components/memegenrator";
import MemeList from "./components/memeList";

function App() {
  return (
    <div className="App">
      <MemeContextProvider>
        <Navbar />
        <MemeList/>
        <NewMeme/>
      </MemeContextProvider>
    </div>
  );
}

export default App;
