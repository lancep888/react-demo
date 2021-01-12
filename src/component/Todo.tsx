import { TodoProps } from "./Todos";

interface Props {
  content: TodoProps;
}

function Todo({ content }: Props) {
  return (
    // Remember to always pass wrap html elements in one single html element
    <div style={{ borderStyle: "solid" }}>
      <div>ID: {content.id}</div>
      <div>User ID: {content.userId}</div>
      <div>Title: {content.title}</div>
      <div>Task Completed: {content.completed ? "True" : "False"}</div>
    </div>
  );
}

export default Todo;
