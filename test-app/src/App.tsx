import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";
import { AiFillLike } from "react-icons/ai";
import Like from "./components/Like";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const list = ["Tokyo", "Delhi", "Paris", "New York", "Hong Kong"];
  const selectedIndex = (city: string) => console.log(city);
  return (
    <ListGroup items={list} label="cities" onSelectedIndex={selectedIndex} />
  );
}

export default App;
