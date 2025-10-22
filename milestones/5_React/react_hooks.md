# React Hooks

## useEffect

useEffect is a react hook that allows function components to execute actions outside the component scope. This can include fetching data, turning on/off etc.

```
useEffect(() => {

  // Effect logic

  return () => {
    // Cleanup logic (runs before unmount or before the next effect)

  }
}, [any dependencies the hook should watch for])
```

The useEffect runs after the component renders.
There is also an optional dependency array that controls when your useEffect runs:

- []: an empty array means the useEffect runs once when mounted (and cleanup when unmounted)
- [value]: runs when specific values in the array have changed
- NO array: runs after every render

```
import React, {useEffect, useState}  from "react"

function TestingUseEffect() {

    const [data, setData] = useState(null)
    const [shouldFetch, setShouldFetch] = useState(false)

    useEffect(() => {

        console.log("COMPONENT HAS MOUNTED")

        return () => {
            console.log("COMPONENT HAS UNMOUNTED")
        }

    }, [])

    useEffect(() => {

        if (!shouldFetch) return;

        const controller = new AbortController();

        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            signal: controller.signal,
            })
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                console.log("Data fetched:", json);
            })
            .catch((err) => {
            
                console.error("Fetch error:", err);
                
        });

        // Cleanup function
        return () => {
            console.log("🧹 Cleaning up fetch (aborting request)");
            controller.abort();
        };

    }, [shouldFetch])



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col text-center max-w-md space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
                useEffect Example
            </h2>

            <button className="p-6 bg-amber-500 rounded-lg cursor-pointer hover:bg-amber-300 transition" onClick={() => setShouldFetch(true)}>
                Fetch Data
            </button>

            {data && (
                <div className="font-bold">
                    <h4>{data.title}</h4>
                    <p>{data.body}</p>
                </div>
            )}
        </div>
    </div>

  );
}

export default TestingUseEffect;
```

### When should you use useEffect instead of handling logic inside event handlers ?

It is recommended to utilise useEffect to handle side effects tied to the component’s lifecycle. This includes fetching data on mount or reacting to prop/state changes.

Event handlers are best for immediate user actions (like button clicks).
If your logic needs to run automatically when certain state or props change, it belongs inside a useEffect react hook.

### What happens if you don’t provide a dependency array?

If you omit ro do not provide a dependency array, the effect runs after every render, causing:

- Repeated side effects (like re-fetching data on every re-render)
- Potential infinite loops if the effect updates state each time.

```
useEffect(() => {
  setCount(count + 1); // causes another render each time since the count state has changed
});

and if u show it in the UI component like

{ count }

, then you can see the counter going upwards infinitely

But if u do this instead:

useEffect(() => {
  setCount(count + 1);
}, []); //it runs once

useEffect(() => {
  setCount(count + 1);
}, [value]); //it runs when value changes
```

### How can improper use of useEffect cause performance issues?

- Running effects too often (missing or incorrect dependencies) leads to unnecessary re-renders
- Triggering state updates inside effects without proper guards can create infinite loops.
- Can cause SSR (Server side rendering) issues
- Forgetting to clean up (like not clearing intervals or event listeners) causes memory leaks.

## useMemo

[React useMemo reference](https://react.dev/reference/react/useMemo)

useMemo is a react hook that let you cache the result of a calculation between re-renders.
It helps you avoid recalculating expensive values when the inputs (dependencies) haven’t changed.

For example:

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

React will only run this function when the dependencies a or b change state. However, on other renders, React reuses the cached result. So, this can be very useful for expensive or costly components that require heavy computation or derived data that doesn’t need to be recomputed on every render.

"During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call calculateValue again, and return the result that calculateValue has returned."

If you do not provide the dependency array:

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b));
```

then React computes this function every render.
That means:

The function inside useMemo runs every single time your component renders. There is no memoization benefit at all as it behaves just like a normal function call.

So effectively, it’s the same as:

```
const memoizedValue = computeExpensiveValue(a, b);
```


Example of using useMemo

```
import React, {useState, useMemo} from "react";


function TestingUseMemo() {

    /*
        To test if the sum value is cached, we will implement a button that changes the state of count
        and force the component to re render
        We shold see that the computeSum did not execute again
    */
    const [count, setCount] = useState(0)
    const [multiplier, setMultiplier] = useState(1);

    const numbers = Array.from({ length: 10000 }, (_, i) => i + 1);


    //Expensive calculation
    const computeSum = useMemo(() => {

        console.log("I am inside USEMEMO")

        let total = 0;

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < 500; j++) {
                total += numbers[i] * multiplier * 0.0001;
            }
        }
        return total.toFixed(2);
    }, [multiplier])


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col text-center max-w-md space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
                    useMemo Example
                </h2>

                <p>Total sum: <span className="font-bold text-xl">{computeSum}</span></p>

                <button className="p-6 bg-amber-500 rounded-lg cursor-pointer hover:bg-amber-300 transition" onClick={() => setMultiplier(multiplier + 1)}>
                    Increase the multiplier
                </button>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
                    onClick={() => setCount(count + 1)}
                >
                    Re-render ({count})
                </button>
            </div>

        </div>
    )




}

export default TestingUseMemo;
```

### How does useMemo improve performance?

useMemo aims to improve performance by caching the result of the previous/latest computation. Extremely useful for costly computations.

If the dependencies haven’t changed, React reuses the previous result instead of recomputing it. This reduces unnecessary CPU work and makes re-renders faster, especially with large lists/arrays and complex operations.

### When should you avoid using useMemo?

- If the computation or calcualtion is very inexpensive or lightweight. Using memoisation for simple tasks can actually degrade performance
- The dependencies change frequently. React will re-run the calculation anyway

### What happens if you remove useMemo from your implementation?

If we remove useMemo from the above example, then the `computeSum` will run every rerender, even though the dependencies havent changed. So this would lower the performance of the application.
