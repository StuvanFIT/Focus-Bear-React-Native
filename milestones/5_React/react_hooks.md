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

## When should you use useEffect instead of handling logic inside event handlers ?

It is recommended to utilise useEffect to handle side effects tied to the component’s lifecycle. This includes fetching data on mount or reacting to prop/state changes.

Event handlers are best for immediate user actions (like button clicks).
If your logic needs to run automatically when certain state or props change, it belongs inside a useEffect react hook.

## What happens if you don’t provide a dependency array?

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

## How can improper use of useEffect cause performance issues?

- Running effects too often (missing or incorrect dependencies) leads to unnecessary re-renders
- Triggering state updates inside effects without proper guards can create infinite loops.
- Can cause SSR (Server side rendering) issues
- Forgetting to clean up (like not clearing intervals or event listeners) causes memory leaks.
