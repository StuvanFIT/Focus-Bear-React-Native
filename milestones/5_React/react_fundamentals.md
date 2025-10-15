
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

## Any challenged in setting up React?

No challenges were faced. However, a key thing to note when installing is that the normal CREATE-REACT-APP (CRA) is outdated.According to the tailwind installation documentation, `create-react-app` does not support custom PostCSS configuration and does integrate well with PostCSS environment like `postcss-import`. Thus, they highly recommended using VITE, NEXT.JS or PARCEL instead of Create-React-App as it provides a better developer experience but with more control on how to use TailwindCSS
