# React Native Performance Optimisation

## What are the most common performance issues in React Native?

1. Excessive or unncessary Re-rendering.

- This is usually caused by continuous or unnecessary state/prop changes.
- Thus, some components re-render even when their output hasn’t changed.

FIX: To combat this, developers use `useMemo` or `useCallback` to prevent unncessary re-renders

2. Heavy JavaScript Thread Usage

- This is where the Javascript thread handles a majority of the app logic and in some cases, can be very complex and makes the thread cluttered/busy. If it is busy, like doing loops or parsing data, the UI becomes unresponsive to the user

FIX: We try to offload the heavy work from the JS thread and transfer the responsibilities to other background threads or using the `InteractionManager` to run heavy logic after animations have been processed.

3. Assets Loading

Some applications will have extremely high resolution images that can block rendering or even cause memory spikes or excessive memory consumption or slow down performance.

FIX: Use optimised image sizes, caching (`react-native-fast-image`), or lazy loading.

4. Inefficient list rendering

- Handling large lists or data sets without proper optimisation (e.g., using FlatList or SectionList effectively) can lead to choppy scrolling and memory issues.

5. UI/UX Inconsistencies across platforms

- Achieving a truly native look and feel on both iOS and Android can be challenging due to differing design guidelines and component behaviors.

## How do useMemo and useCallback improve performance?

useMemo and useCallback are React Hooks that improve performance by leveraging the concept of memoisation.

It is a technique for caching results of expensive function calls and returning the cached result when the same/similar input
is given again. This reduces unnecessary re-renders and recalculations within a React Native application.

### `useMemo`

- cache the result of an expensive calculation
- Prevents recalculating the result every re-render

```
const expensiveResult = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

In this case, expensiveResult only runs when data changes

### `useCallback` and `React.memo`

- Caches the function itself, so it doesn’t get recreated on every render.
- Useful when passing callbacks to child components wrapped in React.memo.

```
import React, { useState, memo, useCallBack} from 'react';

//Child component that logs when it re-renders
const ChildButton = memo(({ onClick }) => {
  console.log('CHILD COMPONENT IS RENDERED');
  return <button onClick={onClick}>Increment</button>;
});

const TestingUseCallBack = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  //This function is re-created every time the parent re-renders.
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log('PARENT RENDERED');

  return (
    <div className="p-6">
      <h2>Count: {count}</h2>
      <ChildButton onClick={handleIncrement} />

      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme ({theme})
      </button>
    </div>
  );
};

export default TestingUseCallBack;
```

In JavaScript, functions are objects. When a functional component re-renders, its entire function body is executed again. This means that any functions declared within that component's scope are re-declared and assigned new instances in memory.

The function reference stays the same across renders, preventing unnecessary re-renders of a child component.

>NOTE: So even if we use `useCallBack` with no `memo`, the child component will still render. React always re-renders ?>children of a component that re-renders, unless you explicitly prevent it.

## What tools can you use to measure and monitor app performance?

React Native provides several built-in and third-party tools to help you identify and fix performance bottlenecks.

1. Flashlight

Pretty much is the lighthouse version from the web but for mobile.

[Flashlight Docs](https://docs.flashlight.dev/)

2. React DevTools (Profiler)

Installed here

[React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

This powerful tool allows for detailed profiling of component rendering, including render times and counts. The profiler's flame chart and ranked chart visualisations help pinpoint performance-intensive components.

3. Flipper (provided by facebook/meta) but is now DEPRECATED

Used to be a stable in react native

[Flipper](https://github.com/facebook/flipper)

[Why you need Flipper](https://www.youtube.com/watch?v=D2zjvKPNltU)

4. Hermes Debugger

[Hermes Docs](https://reactnative.dev/docs/hermes)

- Provides profiling tools specifically for the Hermes JS engine.
- Helps monitor JS performance and memory usage.
