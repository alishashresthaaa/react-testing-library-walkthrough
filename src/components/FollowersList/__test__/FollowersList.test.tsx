import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Followers", () => {
  beforeEach(() => console.log("Running before each test"));
  // beforeAll(() => console.log("Running once before all test"));
  // afterEach(() => console.log("Running after each test"));
  // afterAll(() => console.log("Running once after all test"));
  test("should render follower item", async () => {
    render(<MockFollowersList />);
    const followerDivEl = await screen.findByTestId("follower-item-0");
    expect(followerDivEl).toBeInTheDocument();
  });

  test("should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const followerDivEls = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivEls.length).toBe(5);
  });
});
