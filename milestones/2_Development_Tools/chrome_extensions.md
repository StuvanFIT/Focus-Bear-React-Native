### Which Extensions did I install and Why?

From the list of extensions, I chose to install the following that suited my workflow:

- React Developer Tools
- Lighthouse
- Redux Devtools

These were installed as Chrome Extensions on Chrome browser.

1.React Developer Tools
I have already used React Developer Tools and definitely has assisted me in my react development. I mainly use the "Components" Tab and gives the user a component diagram or hierarchy tree of our current application. When you hover each component, you can inspect the props, source file, rendered by and the target DOM or root element the component represents. If you are using useState/setStates, then you can view the states/values of certain variables.

Additionally, another underrated feature is that you have the ability to render the component to the console, where u can view the details of current states/hooks.






2.Redux Developer Tools
I have not used this tool and is my first time implementing this in my workflow. I decided to install this extension as i am currently not using any external bugging tools. Since a lot of the times I've been using print debugging, I think its actually more efficient to use Redux Dev tools to assist in subsequent development/actions. For example, if you were to increase the counter via a button click, you can view the state of the application and its variable values BEFORE the button was clicked and AFTER the button was clicked, which helps in trying to identify bugs.

Additionally, if u wanted to dispatch an actiom but there is no UI element for it, you can simply type the action and execute it as if there was a button to be clicked on.

Also, to get it fully functional, you need to integrate it into your aapplication like a store.js
<https://github.com/zalmoxisus/redux-devtools-extension>

3.Lighthouse
In order to improve on your application, you can use tools such as Lighthouse to give you an analysed report of your URL application and give you suggestions on how to improve on it whcih can be useful. Essential metrics provided are based off Google's core web vitals.

Very simple to use and gives you an overall report of how your application runs on the browser.
