import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";
import { AiFillLike } from "react-icons/ai";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const list = ["Tokyo", "Delhi", "Paris"];
  return (
    <Button color="primary" onClick={() => console.log("clicked")}>
      My Button
    </Button>
  );
}

export default App;
