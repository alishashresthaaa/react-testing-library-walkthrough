# react-testing-library-walkthrough

A simple through on how to use react testing library

## Importance of react-testing-library

- Test automation
- catch bugs
- confidence in application
- speeds up QA time
- serves as documentation

## Types of test

- Unit Tests - tests piece of code or component in isolation
- Integration Tests - tests interaction between components working together
- End to End (e2e) Tests - What the user is ultimately going to do. tests user flow.

### Dependency

- CRA template provides react testing library dependency itself. No need to install seperately

### Common Structure of Test

- Render a component we want to test
- Find elements we want to interact with
- Interact with those elements - event listener
- Assert that the results are as expected

### Test Block

- Has two way to define
  test("", () => {})
  it("", () => {})

- has two parameters
- first parameter - describes what we want to test
- second parameter - callback function to execute the logic

### Query methods

- screen = interact with component we render through methods it exposes
- screen.findBy - exactly 1 match
- screen.findAllBy - exactly 1 match or more
- screen.getBy - exactly 1 match + with async
- screen.getAllBy - exactly 1 match or more + with async
- screen.queryBy - no match = null + exactly 1 match
- screen.queryAllBy - no match + exactly 1 match + more than 1 = array

screenshot1.png

### Priority

- mimic user interaction inside our test
- utilising attributes that are accessible to ever user of our application

screeshot2.png

### Describe Block

groups common tests , reorganising common test
describe("", () => {})

### Fire Events

- deals with event handler function
- how components interact with eact other

### Jest

- testing library used on top of react testing library
- exposes bunch of methods for events, tests

### Integration

- describe test cases based on the user flow and the check for output the user expects

### Dealing with external request

- Dont depend on the external API to describe test
- Test api in isolation, react component in isolation
- Reduce external dependency

### Mocking Request

- If the component has API consumption, make mock data to make request
- create **mocks** under /src folder and export mocked data
- use mock service worker

### Hooks

- Sometimes we want to execute a piece of functionality before a test is ran
- Sometimes we want to execute a piece of functionality after a test is ran
- Specify on top level, or inside a describe block
- beforeEach, afterEach, beforeAll, afterAll

### Mock Service Workers

- Mock API calls when writing test for your applications.
- If we use actual api calls, the test could fail for many reasons that donot involve your code.
- No dummy data - unrealiable
-
