# React Native Navigation

[React Navigation Setup](https://www.youtube.com/watch?v=OmQCU-3KPms)

## Types of Navigation: Tab, Stack and Drawer

1. Stack Navigation

We organise screens in a stack. Each time a user segues into a new screen, the new screen is pushed on top of the stack
and can be popped off to go back to the previous screen.

2. Tab Navigation

Displays screens in separate tabs, usually at the bottom or top of the screen.
Users can quickly switch between sections. This would commonly include  Home, Search, Profile

3. Drawer Navigation

Uses a side panel or side bar (drawer) that slides out to show different routes.

TLDR:
Stack = linear flow (back/forward)
Tab = top-level sections
Drawer = hidden but accessible menu

## How React Navigation handles screen transitions?

React Navigation will use a internal navigation stack and gestures to manage transitions:

- Each screen in the stack is rendered on top of the previous screen
- These transitions are animated automatically. For example, we could have a push, modal or fade out etc. You can customise these transitions.

Navigation state (current route, params, etc.) is stored in React state and updated as users navigate.

## How would you implement deep linking in a React Native app?

Deep linking allows external URLs to open specific screens inside the app. For example:

- focusbear://tasks: opens the Tasks screen
- focusbear://settings/stats → opens the Stats section inside Settings

Deep linking improves overall user experience and engagement by:

- Taking users straight to relevant content (no need to navigate manually).
- Enabling cross-app integration (e.g., open your app from a browser or another app).
- Allows for easier campaign and sharing of features

First, we would need to define a linking configuration that maps URL paths to screens in the app.
The app listens for incoming links (custom schemes or universal links). When a link is triggered, React Navigation parses the URL and navigates to the correct route with parameters

Then, pass this linking prop to the navigation container.

```
const linking = {
  prefixes: ['focusbear://', 'https://focusbear.com'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'profile/:id',
    },
  },
};

<NavigationContainer linking={linking}>
  {/* navigators */}
</NavigationContainer>
```

Deep linking integrates well with universal links and push notifications, enabling users to jump directly to specific app content.

For example:

1. The user gets a notification about a specific task. "HEY DONT FORGET ABOUT YOUR TASKS/example123"
2. When pressed on, the user is redirected to that task screen and jumps directly to it
