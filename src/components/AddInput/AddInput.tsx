import React, { useState } from "react";
import { v4 } from "uuid";
import { TodoType } from "../../types";
import "./AddInput.css";

export interface AddInputTypes {
  setTodos: (updateTodo: TodoType[]) => void;
  todos: TodoType[];
}

const AddInput = (props: AddInputTypes) => {
  const { setTodos, todos } = props;
  const [todo, setTodo] = useState<string>("");

  const addTodo: () => void = () => {
    let updatedTodos = [...todos, { id: v4(), task: todo, completed: false }];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddInput;
