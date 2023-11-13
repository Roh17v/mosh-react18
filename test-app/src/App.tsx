import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import "./App.css";
import { AiFillLike } from "react-icons/ai";
import Like from "./components/Like";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const list = ["Tokyo", "Delhi", "Paris"];
  return (
   <Like onClick={() => console.log('clicked')
   }/>
  );
}

export default App;
