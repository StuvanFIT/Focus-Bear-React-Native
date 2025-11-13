
# React Fundamentals

## How to set up a REACT + TAILWINDCSS Project with VITE
[Tailwind CSS Installation using Vite](https://tailwindcss.com/docs/installation/using-vite)

1. Create your React project with VITE

```
npm create vite@latest my-project
cd my-project
```

2. Install Tailwind CSS

```
npm install tailwindcss @tailwindcss/vite
```

3. Configure Vite plugin

```
// vite.config.js

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

4. Add the Tailwind import to your `css` files that imports TailwindCSS.

```
@import "tailwindcss";
```

5. Add the style sheet that imports tailwind in your `index.html`

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link href="./src/style.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>my-project</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

6. Run your react app

```
npm run dev
```

7. Here is an example of using tailwind css inside your react app

```
// ./src/App.js


function App() {

  const handleClick = () => {

    alert("I WAS CLICKED ON!!!")

  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-gray-800 p-6">
      <div className="bg-orange-50 rounded-2xl shadow-lg p-10 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
          Hello, my name is Steven Kaing
        </h1>

        <p className="text-lg md:text-xl font-medium mb-6">
          The purpose of this React project is to demonstrate that the following tech stack works:
        </p>

        <div className="flex flex-col space-y-3">
          <button onClick={handleClick} className="text-lg font-semibold text-white bg-amber-800 rounded-lg py-2 px-4 hover:bg-amber-500 transition cursor-pointer">
            React
          </button>
          <button onClick={handleClick} className="text-lg font-semibold text-white bg-amber-800 rounded-lg py-2 px-4 hover:bg-amber-500 transition cursor-pointer">
            TailwindCSS
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
```

## Any challenges in setting up React?

No challenges were faced. However, a key thing to note when installing is that the normal CREATE-REACT-APP (CRA) is outdated.According to the tailwind installation documentation, `create-react-app` does not support custom PostCSS configuration and does integrate well with PostCSS environment like `postcss-import`. Thus, they highly recommended using VITE, NEXT.JS or PARCEL instead of Create-React-App as it provides a better developer experience but with more control on how to use TailwindCSS

## Why are components important in React?
Components are essential in building efficient and maintainable interfaces.

Components allow you to break down complex UIs you want to render into smaller, independent and self-contained units. By isolating parts of the UI into components, changes made to one component are less likely to affect other parts of the application. This significantly improves maintainability, as developers can focus on specific components without worrying about unintended side effects across the entire codebase.

These components can also be reusued across the project and having components in different/separate files allows us to maintain the codebase.

Example of `HelloWorld.jsx` component

 [LINK TO `HelloWorld.jsx` component:](https://github.com/StuvanFIT/Focus-Bear-React-Native/blob/fix/FocusBearQAFeedback/milestones/5_React/my-project/src/ui/components/HelloWorld.jsx)

```
import React from 'react';

function HelloWorld({name}) {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-gray-800 p-6">
            <div className="bg-orange-50 rounded-2xl shadow-lg p-10 max-w-2xl text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-600">
                    Hello, Focus Bear!
                </h1>
                <p className='text-2xl md:text-xl font-extrabold mb-6 text-orange-600'>
                    Hello, {name}!
                </p>
            </div>
        </div>
    )
}

export default HelloWorld;
```

![alt text](../Images/helloWorldProp.png)

In this screen shot, I passed the name prop with the value "Steven Kaing" into the HelloWorld function

```
<HelloWorld name={"Steven Kaing"}>
```

It rendered: "Hello, Steven Kaing!"

## Example: Creating `Counter.jsx` component with a button that increments a number when clicked

![alt text](../Images/CounterCode.png)

Pushed to the repo:

[Counter.jsx File Git link](https://github.com/StuvanFIT/Focus-Bear-React-Native/blob/main/milestones/5_React/my-project/src/ui/components/Counter/Counter.jsx)

Running the Counter:user is able to increment, decrement or reset the counter.

![alt text](../Images/RunningCounter.png)

No challenges were faced when building this `Counter` component. However, a thing I noticed in the original code of the Counter was that I had `CounterMessage` in the samel file as the `Counter` component, which did not clearly adhere to any SOLID Principles or Single Responsibility Principle. So, I had to refactor the `Counter` and modularise it by creating `CounterMessage`. Then, I embedded `CounterMessage` inside the `Counter` component.

## What happens if we modify state directly instead of using setState?
When you modify the `useState` directly instead of using `setState`, it can lead to several issues:

- No Re-rendering: : React relies on setState or the state setter to detect changes in state and trigger a re-render of the component. If you directly the useState variable, React will not be aware of the change and will not re-render the component, leading to an outdated UI that does not reflect the updated data.

- It can lead to large debugging sessions as directly modifying the use state variables disrupts the react cycle.

- React uses a process called reconciliation to efficiently update the DOM. This process involves comparing the previous state with the new state to determine what needs to be re-rendered. If you directly mutate state, this comparison can become unreliable

TLDR: Never mutate the this.state as React will not know if you have mutated that state!

## Common Issues When Working with Lists in React

There are some key things to note when working with lists in react:

- Unique keys. Each item rendered using `.map()` must have a unique key prop. Without using unique keys, react cannot efficiently track which items have changed and may lead to ui issues.
- Directly mutating the array (e.g toDoList.push(newItem)) won’t trigger a re-render and won't update the UI
- Creating very large lists. Rendering large lists can slow performance and there needs to be methods in place to encourage optimisation
- Conditional Rendering should be used. For example, if there are no list items in the list, there should be a fallback UI to handle the display of no list items (i.e. No tasks have been added).

## What are advantages of Client-Side Routing?

In standard server-side routing (Website), every time you click on a link button, the browser will send a GET request to the server and in response, the server will proivde the HTML page and all the CSS, Javascript, images and other assets it has just received.

On the other hand, in client-side routing, when you click on a link button, the Router (i.e. React router or another library) will intercept that navigation and re-renders the page or parts of the page that it determines that it needs to. So the URL updates without a FULL PAGE RELOAD, and will just render a new component on the CLIENT SIDE

Advantages of Client Side Routing:

- No full-page reloads. React just swaps out components
- Smoother UX experience and navigation feels intuitive
- You can have components such as navigation bars, footers or side bars stay persistent
- You can load route-specific components only when needed

Disadvantages of Client Side Routing:

- The first load cost: the whole JS bundle must load before navigation feels fast. For example, if I send you a link to <www.focusbear.com>, your browser has to download the HTML, CSS, JS. There are tons of different sections of the website that need to fetch or talk to the database to get data and these calls did not start until the app was loaded onto your browser. A more efficient way is to start loading those calls when you press on the link vis SSR.

Modern solution will use both client and server side. We do:

- server-side rendering based on the URL
- get data starting to load by making database calls
- hydrate the client with data once it's ready
- Once the app is fully loaded, client routing takes over, then only swapping out small amounts of the page as you navigate

TLDR

1. Server Render: Server renders HTML per URL
2. Hydration: makes the HTML interactive
3. Client side routing: Navigation handled by client like we talked above
