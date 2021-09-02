import { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ addTodo: (todoText: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    props.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Add Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Submit Todo</button>
    </form>
  );
};

export default NewTodo;
