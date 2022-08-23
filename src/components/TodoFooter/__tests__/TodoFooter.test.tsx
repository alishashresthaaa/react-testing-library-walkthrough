import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter, { TodoFooterTypes } from "../TodoFooter";

// Since the TodoFooter has link component used for routing that doesnot work unitl the component is wrapped with browserRouter, we mimic the same behaviour in tests as components are test in isolation
const MockTodoFooter = (props: TodoFooterTypes) => {
  const { numberOfIncompleteTasks } = props;
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("Todo Footer Content", () => {
  test("should render correct amount of incomplete task", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("should render tasks in text for incomplete task", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByText(/2 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("should render truthy value", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByText(/2 tasks left/i);
    expect(paragraphElement).toBeTruthy();
  });
});

describe("Todo Footer Visibility", () => {
  // Check if element is visible to user - fails if hidden, opactiy = 0
  test("should element be visible to user", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByText(/2 tasks left/i);
    expect(paragraphElement).toBeVisible();
  });
});

describe("Todo Footer Content", () => {
  // Check if element contain a tag
  test("should element contain p tag", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByText(/2 tasks left/i);
    expect(paragraphElement).toContainHTML("p");
  });

  // Check if element contain a tag
  test("should content render", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByTestId("paragraph");
    expect(paragraphElement).toHaveTextContent("2 tasks left");
  });

  // Check if element contain a tag
  test("should paragraph contains text content ", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByTestId("paragraph");
    expect(paragraphElement.textContent).toBe("2 tasks left");
  });
});
