import Header from "../Header";
import { render, screen } from "@testing-library/react";

// GET BY

// Test by text rendered in screen
test("should render same text passed into title prop", () => {
  // Render a component we want to test
  render(<Header title="Welcome" />);
  // Find elements we want to interact with
  const headingElement = screen.getByText(/welcome/i);
  // Assert that the results are as expected
  expect(headingElement).toBeInTheDocument();
});

// Test by role
test("should render same text passed into title prop", () => {
  render(<Header title="Welcome" />);
  const headingElement = screen.getByRole("heading", { name: "Welcome" });
  expect(headingElement).toBeInTheDocument();
});

test("should render single heading tag", () => {
  // Render a component we want to test
  render(<Header title="Welcome" />);
  // Find elements we want to interact with
  const headingElements = screen.getAllByRole("heading");
  // Assert that the results are as expected
  expect(headingElements.length).toBe(1);
});

// Test by Id
test("should render same text passed into title prop", () => {
  render(<Header title="Welcome" />);
  const headingElement = screen.getByTestId("header");
  expect(headingElement).toBeInTheDocument();
});

// FIND BY
// Test by Id
test("should render same text passed into title prop", async () => {
  render(<Header title="Welcome" />);
  const headingElement = await screen.findByTestId("header");
  expect(headingElement).toBeInTheDocument();
});

// QUERY BY
// Test by Id
// Test if the test pass if the text doesnot render in the document
test("should render same text passed into title prop", () => {
  render(<Header title="Welcome" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});
