## Why is automated testing important in software development?

Automated testing is a lifesaver and can be crucial in identifying bugs during the early stages of development. This prevents projects from having deeply integrated bugs that may pop up in the future and would cause large refactoring sessions.

Automated tests execute significantly faster than manual tests, allowing for more frequent testing cycles and quicker feedback on code changes. This is why CI/CD pipelines are essential

As applications get bigger, having a suite of these tests is going to be important for regression testing.

## What did you find challenging when writing your first Jest test?

Nothing challenging when setting up Jest Tests. Other than having to identify all possible edge cases of your testing. Poor identificatio of test cases can lead to small bugs that get missed through testing and end up in the final product.

## What are the benefits of using React Testing Library instead of testing implementation details?

Testing implementation details would only be useful for the developers of the application. It means writing tests that depend on how your component works internally, rather than what it actually does for the user.

For example:

- Testing internal states like useStates. The issue here is that if you decide to not use useState but use Reducers instead, then it would break the test
- Testing private functions the user doesnt see.
- Testing layouts and structures. THe issue here is that a minor refactor in layout break the test even though user experience is unchanged.

TLDR: Internal tests are more fragile and passing these tests does not guarantee that it passes the user experience side. At the end of the day, us developers need to ensure that the UX experience for the user is up to standard otherwise they wouldnt use out app!

Benefits of using React Testing Library:

- It encourages testing what the user sees and does, not how the component is implemented internally (state, methods, or private variables)
- Less fragile tests; less prone to breaking due to refactoring
- It also theoretically improves reliability as tests fail only when the user experience is broken, not because of internal changes.

## What challenges did you encounter when simulating user interaction?

There is quite a limit on our access to naitve elements using `getByText`

Some React Native components like `<Button/>` don’t expose a child element, so selecting them with getByText can be tricky.
The way I did it was by "text" but it only selects the FIRST button that contains the text. What if there are multiple buttons?

```
<View>
  <Button title="Add" onPress={handleAdd} />
  <Button title="Subtract" onPress={handleSubtract} />
  <Button title="Reset" onPress={handleReset} />
</View>
```

We can implement testIDs

```
<Button title="Add" testID="add-button" onPress={handleAdd} />
<Button title="Subtract" testID="subtract-button" onPress={handleSubtract} />


const addButton = getByTestId('add-button');
fireEvent.press(addButton);

const subtractButton = getByTestId('subtract-button');
fireEvent.press(subtractButton);
```

- Also for async test cases, updating states may require waitFor()

- Some components behave differently on iOS vs Android; tests may pass on one platform but fail on another if they rely on platform-specific props.

## Why is it important to mock API calls in tests?

It is always important to mock API calls in tests for your application:

- It makes sure your components work in isolation. Tests should focus on your component’s logic/UI, not on the behavior of external services. Mocking ensures your tests are isolated from the network.
- Real API calls can be slow, causing your tests to run longer. Mocks return instant responses as you can just return Promises and results directly
- Network issues or server downtime can cause tests to fail. Mocking ensures consistent test results everytime you ctrl + s

## What are some common pitfalls when testing asynchronous code?

- Forgetting to use `await` and `waitFor`. Most of the time, the api call or async update does not complete before the assertion statement and causes the test to fail or produce false results.
- Not handling errors. If the async function throws, your test can fail unexpectedly. Always handle promise rejections in tests.
- Forgetting to use fireevent for user simulation/actions taht trigger async operations
- State reset between your tests. Async code may mutate shared state. Ensure each test starts with a fresh render.
- setTimeout or setInterval can make tests slow and flaky. Use Jest fake timers for predictable behavior.
