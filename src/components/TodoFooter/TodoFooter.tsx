import "./TodoFooter.css";
import { Link } from "react-router-dom";

export interface TodoFooterTypes {
  numberOfIncompleteTasks: number;
}

const TodoFooter = (props: TodoFooterTypes) => {
  const { numberOfIncompleteTasks } = props;
  return (
    <div className="todo-footer">
      <p data-testid="paragraph">
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
};

export default TodoFooter;
