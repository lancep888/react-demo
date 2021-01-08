import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo, toggleTodo } from '../store/todo'
import { addTodo, toggleTodo, emptyAll, toggleFavorite } from "../store/todoSlice";

function TodoRedux() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleTextChange = (e) => {
    setTodoText((prev) => (prev = e.target.value));
  };

  const handleAddTodo = () => {
    const payload = {
      id: Math.random(),
      todo: todoText,
      completed: false,
      favorite: false,
    };
    // dispatch the addTodo action with a payload
    dispatch(addTodo(payload));
    setTodoText((prev) => (prev = ""));
  };

  const handleFavorites = (todo) => {
    dispatch(toggleFavorite(todo));
  }

  const handleEmptyAll = () => {
    dispatch(emptyAll());
  };

  const handleToggle = (todo) => {
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
        <div>
        <div
          key={todo.id}
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
