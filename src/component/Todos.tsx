import { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";

export interface TodoProps {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

function Todos() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  // Hook for side affects
  useEffect(() => {
    // define an async function for API calls
    const getTodos = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos((prev) => prev.concat(data));
    };
    // execute the async function
    getTodos();
    // executes before this component gets unmounted
    return function () {
      console.log("Todos component will be unmounted");
    };
    // Empty dependency array means this useEffect will only run once during component mounting (same as ComponentDidMount)
  }, []);

  return (
    <div style={{ borderColor: "red", borderStyle: "solid" }}>
      {todos.map((todo) => (
        // always pass a key property to child component when used in map
        <Todo key={todo.id} content={todo} />
      ))}
    </div>
  );
}

export default Todos;
