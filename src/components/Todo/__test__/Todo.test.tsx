import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks: string[]) => {
  const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonEl = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task: string) => {
    fireEvent.change(inputEl, { target: { value: task } });
    fireEvent.click(buttonEl);
  });
};

describe("Todo Component", () => {
  test("Todo component", async () => {
    render(<MockTodo />);
    const inputEl = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonEl = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputEl, { target: { value: "Go Grocery Shopping" } });
    fireEvent.click(buttonEl);
    const divEl = screen.getByText(/Go Grocery Shopping/i);
    expect(divEl).toBeInTheDocument();
  });

  test("should render multiple components", async () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping", "Walk Dog", "Wash dishes"]);
    const divEl = screen.getAllByTestId("task-container");
    expect(divEl.length).toBe(3);
  });

  test("task should not have completed class when initially rendered", async () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping"]);
    const divEl = screen.getByText(/Go Grocery Shopping/i);
    expect(divEl).not.toHaveClass("todo-item-active");
  });

  test("task should  have completed class when clicked", async () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping"]);
    const divEl = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divEl);
    expect(divEl).toHaveClass("todo-item-active");
  });
});
