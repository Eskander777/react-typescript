import { useState } from "react";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevState) => [...prevState, newTodo]);
  };

  const removeTodoHandler = (itemId: string) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <NewTodo addTodo={addTodoHandler} />
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
