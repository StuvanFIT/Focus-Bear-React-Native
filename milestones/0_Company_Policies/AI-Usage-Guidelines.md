AI tools can boost productivity, but they should be used thoughtfully. Misuse—such as leaking confidential information or relying on AI without critical thinking—can cause serious problems.

### What AI tools are typically used for your role?

For the Mobile Application Intern role, mostly developers use gpt, gemini, claude or other LLMs to facilitate their deveopment.

Additionally, for bug fixing and real-time assistantce, some developers would use something like cursor.

### What are the benefits and risks of using AI in a professional setting?

Although the strengths of AI are incredible, AI can produce unreliable or outdated information. Additionally, AI can produce poor quality code that would degrade the overall quality of the project.

### What types of information should never be entered into AI tools?

Mostly sensitive data such as:

- Personal identifying information (full name, address, phone number, IDs)
- Confidential company data like source code or unreleased features
- Account Credentials
- Legally sensistive data

### How can you fact-check and validate AI-generated content to ensure accuracy?

You can fact check and validate ai generated content by mostly cross checking with the official source page and look ofor API docs, standards and references.Additionally, you should always test the code written locally and confirm if the output is desired. However, as Software Engineers, you should be able to use your own judgement in whether he ai generated feature is up to standard, too complex, over complicated or too simple etc.

### When should you use AI for assistance, and when should you rely on your own skills?

During development, I would only rely on Ai or use AI to generate features/tasks I already know how to do or can comfortably do it. Nowadays, AI should be used to speed up your processes and act like a personal code assistant.
However, you should not use AI to generate the entire codebasebut instead have AI generate a draft/starter version of your idea and you can develop from there on.

Additionally, any brainstorming ideas or having debugging hints are useful scenarios of where AI can be freely used.

When to rely on your own individual skills? I would rely on my skills if the feature im implementing is new, is a final implementation, a core learning lession or handling critical bug fixes. Also, instead of entering sensitive data, enter dummy values or test data.

### How can you avoid over-reliance on AI while still benefiting from it?

Use AI to improve on your "Context Engineering" or "Prompt Engineering" skills. Think of AI as a another tool for software engineers and as an assistant developer next to you. At the end of the day, as long as you gain a skill or learn a new experience, then that is all that matters.

### What steps will you take to ensure data privacy when using AI tools?

During my focus bear internship, I will only use AI only with anonymised examples or test data and never ever paste sensitive code or credentials as I want to ensure this company succeeds.

My Focus Bear Practice:
"I will use AI to enhance and further my skills in my software engineering journey and will always review, test and fact-check AI generated content/outputs before implementing them in production code to ensure the Focus Bear application maintains high quality code."

### Example of using AI to improve my onboarding tasks

During onboarding, specifically in the react native redux milestone, I had trouble setting up my Redux store in the react native application. It continuosly displayed the following error message:

```
getState() does not exist
```

I didn’t remember what `getState` referred to, and even using **Ctrl + F** in my codebase didn’t help me locate it.

AI Prompt:
> "Why does my React Native Redux setup show the error 'getState() does not exist'? Can you show me how to correctly configure a Redux store?"

AI Suggestion:
ChatGPT explained that the `getState()` function is automatically provided by the Redux store created with `configureStore()` (from `@reduxjs/toolkit`). The error meant my app was not properly wrapped in the `<Provider>` component or the store was incorrectly imported.  
It provided the following example setup:

```
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

First, it made sure to check if my store.js file was configured.

```
<Provider store={store}>...  </Provider>
```

Then, it checked if the entry jsx file was wrapped in a Provider component.

```

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
```

I compared this with my existing code and realised I had forgotten to import the Provider from react-redux and wrap my root component. After adding it, the error disappeared.

To confirm the accuracy, I checked the official Redux Toolkit documentation and verified that getState indeed comes from the store instance returned by configureStore(). So, it is still important to know the hidden details of configureStore even though its not really taught to us.

Using AI helped me quickly pinpoint a small but critical configuration mistake. The explanation about getState deepened my understanding of how the Redux store works. I learned that while AI can guide me toward a fix, validating and testing is essential before trusting the actual output.
