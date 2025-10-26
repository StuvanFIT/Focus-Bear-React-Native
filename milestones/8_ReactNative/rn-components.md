# React Native

## Components

### Key differences between `<View>` and `<div>`

div is a web container element rendered in the browser DOM. It has no inherent semantic meaning beyond acting as a division or section within a document and used to group and structure content together

On the otherhand, View is a native container component that maps to platform-specific UI elements (e.g. UIView on iOS, View on Android). It is a fundamental building block for creating user interfaces.

The View component in React Native is the equivalent of a div in HTML. It's a container for other components and provides styling and layout properties. They serve the same purpose, grouping and laying out elements,  but run in different environments.

Here are some things to note:

Layout:

- div supports multiple layout systems (block, grid, flexbox, etc.). SO DIV SUPPORTS FULL CSS.
- View only supports Flexbox for layout

Styling system:

- div uses CSS and classname
- View uses the style prop and stylesheets

### How does `StyleSheet.create()` improve performance compared to inline styles?

- `StyleSheet.create()` precomputes the styles and sends them to native code side **ONLY ONCE**, rather than recalculating them on every render.  
- Inline styles are objects recreated on each render, which can be less efficient for complex or way larger layouts

### Why doesn’t React Native use `className` like React web?

- React Native doesn’t have a browser DOM, so there’s no concept of CSS classes. THe concept of className comes from HTML AND CSS. SO instead of CSS files, React native used JS objects to describe styles  
- Styles are applied directly to native components via the style prop and StyleSheet.create().  
- This ensures a consistent, platform-agnostic styling approach.
