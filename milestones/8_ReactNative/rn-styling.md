# React Native Styling

## Main Differences between React Native Stylesheets and standard web CSS

| Feature           | Web CSS                                                    | React Native Stylesheet                                                          |
| ----------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Syntax**        | Uses kebab-case (e.g., `background-color`)                 | Uses camelCase (e.g., `backgroundColor`)                                         |
| **File Type**     | `.css` files or inline `style=""`                          | JavaScript objects                                                               |
| **Selectors**     | Classes, IDs, pseudo-selectors (`.btn`, `#main`, `:hover`) | No selectors: styles are applied directly to components                         |
| **Units**         | `px`, `em`, `%`, etc.                                      | Numeric values are assumed to be density-independent pixels (dp); no units       |
| **Layout System** | CSS supports Grid, Flexbox, etc.                           | Only Flexbox (simplified, always flex by default)                                |
| **Cascade**       | Follows CSS cascade and inheritance                        | No cascade: each component’s styles are isolated                                |
| **Media Queries** | Used for responsiveness                                    | React Native uses APIs (like `Dimensions`, `useWindowDimensions`, or `Platform`) |

[React Native Stylesheets](https://reactnative.dev/docs/stylesheet)

A StyleSheet is an abstraction similar to CSS StyleSheets

## Should These stylesheets be in the same file as the component or a separate file?

1. Common style constants (colours, font sizes, etc.) are best kept in one place and next to the component/function as it is easier to see which styles affect which. Basically, never use colour or font size literals in a component.

>It’s 1 extra step that will take 30 seconds up front to setup, but will save time and headaches later when you are refactoring the design.

2. If you are finding that you are copying and pasting a lot of styles that are the same, make shared components instead (e.g. a component for buttons or a styled text component) that can be used across all components

## Inline Styling VS Stylesheet.create()

INLINE:

```
<View style={{ backgroundColor: 'blue', padding: 10 }}>
  <Text style={{ fontSize: 10 }}>Inline Styled Text</Text>
</View>
```

It is quick to understqnd and read, but less effficient as it renders each line

STYLESHEET

```
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});

<View style={styles.container}>
  <Text style={styles.text}>StyleSheet Example</Text>
</View>
```

StyleSheet.create() compiles styles into IDs and sends them to the native side once, making re-renders faster and more memory efficient.

## Styling Frameworks

There are React Native UI Frameworks:

1. @rneui/themed (REACT NATIVE ELEMENTS). This framework provides prebuilt and custom UI components like buttons and sliders

[React native elements](https://reactnativeelements.com/)

2. react-native-paper. Very simple, customisable and also has prebuilt components. However, it doesnt seem to have much support lately

[React native paper](https://reactnativepaper.com/)

>Note: there are mixed reviews regarding UI frameworks for react native and doesnt come close to the support in WEB development.

```
import React from 'react';
import { Button } from 'react-native-paper';

<Button mode="contained" onPress={() => console.log('I have pressed this button')}>
  Press me
</Button>
```

## React Native: Handling screen size responsiveness

[How to make our react native app responsive](https://www.youtube.com/watch?v=GnhbZbPb6uo)


> REACT NATIVE DOES NOT USE CSS MEDIA QUERIES. INSTEAD, IT PROVIDES UTILITIES OR THIRD PARTY HELPERS

`Dimensions API`

```
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
```

Read here [react native post: READ THE DIMENSIONS SECTION](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)

The above link also tels you how to separate your styling pages/files and create reusable services

`useWindowDimensions()`

```
import { useWindowDimensions } from 'react-native';

const { width } = useWindowDimensions();
const isTablet = width > 768;
```

`Platform API`

```
import { Platform } from 'react-native';
const styles = {
  paddingTop: Platform.OS === 'ios' ? 40 : 20,
};
```

[Comment on react native responsiveness](https://www.reddit.com/r/reactnative/comments/17ulfr8/how_to_implement_responsive_design_in_react_native/)

Based on my research, the use of third party helpers are essential. Unlike web dev, the react native responsiveness styling is not intuitive. App responsive design does not work the same as web

- `react-native-size-matters` or `react-native-responsive-screen`

Links below:
[react-native-size-matters docs](https://www.npmjs.com/package/react-native-size-matters)
[react-native-responsive-screen docs](https://www.npmjs.com/package/react-native-responsive-screen)

Some custom ones from others:

- `react-native-responsive-sizes`

[react native responsive sizes](https://github.com/react-native-responsive-sizes/react-native-responsive-sizes)

>"You need to scale based on pixel density. Do not just style just based on screen width/height. Basically replace all pixel >values (the default) with scaled versions of those values using functions from the packages i mentioned. Then of course for >some things you can also toggle different styles based on screen width/height for some things when necessary."

## Why does React Native use camelCase instead of traditional CSS properties?

React native styles are mostly written in Javascript objects and not CSS. We know that javascript objects dont allow any hyphens property names (i.e. background-color), so React native uses camelCase (i.e. backgroundColor), which keeps the styling consistentwith JS syntax, avoiding any syntax errors.

## What are the benefits of using StyleSheet.create() over inline styles?

- `StyleSheet.create()` optimises performance by sending styles to the native layer once, reducing the need of re-renders.
- Styles are easier to reuse and maintain.
- Easier to track and modularised.
- It prevents accidental style mutations since styles are immutable.
- It keeps the code cleaner and separates structure from design.

## How would you handle different screen sizes in React Native?

When desiginig web applications, the develope needs to take into account of smaller/large screen sizes and how it is affected when displayed to the user. In web dev, we use media queries or conditional styling based on screen size/viewports that changes the structure/layout based on the screen size.

In React native, we normally handle screen sizes with:

- `useWindowDimensions()` or `Dimensions` API to get device width and height dynamically.
- Use flexbox layouts and percentage-based widths for adaptive UIs.
- Apply conditional styles based on screen size or platform.
- For complex designs, use libraries like `react-native-responsive-screen` or `react-native-size-matters` to scale elements proportionally across devices
