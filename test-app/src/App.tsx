import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const list = ["Tokyo", "Delhi", "Paris"];
  return (
    <ListGroup
      label="Cities"
      items={list}
      onSelectedIndex={(item) => console.log(item)}
    />
  );
}

export default App;
