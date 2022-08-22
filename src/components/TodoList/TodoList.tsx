import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoList.css";
import { TodoType } from "../../types";

export interface TodoListTypes {
  setTodos: (updateTodo: TodoType[]) => void;
  todos: TodoType[];
}

const TodoList = (props: TodoListTypes) => {
  const { todos, setTodos } = props;
  const updateTask: (id: number | string) => void = (id) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks: () => number = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo: TodoType) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed && "todo-item-active"}`}
              onClick={() => updateTask(todo.id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
};

export default TodoList;
