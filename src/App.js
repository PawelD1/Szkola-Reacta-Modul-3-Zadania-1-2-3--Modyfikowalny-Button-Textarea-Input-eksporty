import React from "react";

import "./styles.css";
import { Button, Input, Textarea } from "./components/Form";

function App() {
  return (
    <div className="flex-container">
      <Button icon="user" bgColor="orchidOrange">
        Click me!
      </Button>
      <Input borderSize={10} borderRadius={50} borderColor="alizarin" />
      <Textarea borderSize={5} borderRadius={10} borderColor="clouds" />
    </div>
  );
}
export default App;
