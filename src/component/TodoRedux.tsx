import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import {
  addTodo,
  toggleTodo,
  emptyAll,
  toggleFavorite,
  TodoSliceProps,
} from "../store/todoSlice";

function TodoRedux() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  // hover mouse over the RootState to see
  const todos = useSelector((state: RootState) => state.todos);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText((prev) => (prev = e.target.value));
  };

  const handleAddTodo = () => {
    const payload: TodoSliceProps = {
      id: Math.random(),
      todo: todoText,
      completed: false,
      favorite: false,
    };
    // dispatch the addTodo action with a payload
    dispatch(addTodo(payload));
    setTodoText((prev) => (prev = ""));
  };

  const handleFavorites = (todo: TodoSliceProps) => {
    dispatch(toggleFavorite(todo));
  };

  const handleEmptyAll = () => {
    dispatch(emptyAll());
  };

  const handleToggle = (todo: TodoSliceProps) => {
    // dispatch the toggleTodo action with a payload
    dispatch(toggleTodo(todo));
  };

  return (
    <div>
      <input
        placeholder="todo"
        onChange={handleTextChange}
        value={todoText}
      ></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleEmptyAll}>Empty All</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div
            onClick={() => handleToggle(todo)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.todo}
          </div>
          <div onClick={() => handleFavorites(todo)}>
            {todo.favorite === true ? "⭐️" : "★"}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoRedux;
