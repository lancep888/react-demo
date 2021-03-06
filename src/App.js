import "./App.css";
import { useState } from "react";
import Button from "./component/Button";
import Todos from "./component/Todos";
import TodoRedux from "./component/TodoRedux";
import Posts from "./component/Posts";

function App() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    // Always better to pass a function to setState hook
    setCounter((prevCounter) => prevCounter + 1);
  };

  const minusCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      {/* <div>{counter}</div>
      <Button onClick={addCounter} style={{ color: "red" }}>
        Plus
      </Button>
      <Button onClick={minusCounter} style={{ color: "blue" }}>
        Minus
      </Button> */}
      <TodoRedux />
      {/* <Posts /> */}
    </>
  );
}

export default App;
