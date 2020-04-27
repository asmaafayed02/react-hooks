import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v1";

export const MemeContext = createContext();

const MemeContextProvider = props => {
  const [images, setImeges] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => setImeges(response.data.memes))
    );
  }, []);

  const [memes, setMemes] = useState([
    { text: "first meme", id: 1 },
    { text: "second meme", id: 2 }
  ]);
  const addMeme = text => {
    setMemes([...memes, { text, id: uuid() }]);
  };
  const removeMeme = id => {
    setMemes(memes.filter(meme => meme.id !== id));
  };
  return (
    <MemeContext.Provider value={{ memes, addMeme, removeMeme , images}}>
      {props.children}
    </MemeContext.Provider>
  );
};
export default MemeContextProvider;
