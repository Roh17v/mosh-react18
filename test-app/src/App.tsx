import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";
import { AiFillLike } from "react-icons/ai";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const list = ["Tokyo", "Delhi", "Paris"];
  return <AiFillLike color="blue" size="30" />;
}

export default App;
