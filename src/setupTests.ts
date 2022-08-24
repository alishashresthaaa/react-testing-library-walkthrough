// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./__mocks__/server";

// Setup the server before the test run
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
// Reset the server after each test
afterEach(() => server.resetHandlers());
// Close the server after the test finishes
afterAll(() => server.close());
