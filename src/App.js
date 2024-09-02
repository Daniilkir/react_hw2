import React from "react";
import { Greeting } from "./components/Greeting";
import { Message } from "./components/Message";
import { Button } from "./components/Button";

function App() {
  const clicked = () => {
    console.log('You pressed me');
  };
  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Hello world" />
      <Button onClick={clicked}/>
    </div>
  );
};

export default App;
