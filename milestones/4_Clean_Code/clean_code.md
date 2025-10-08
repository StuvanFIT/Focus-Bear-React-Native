
---
# Clean Code Principles

**"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.- John Woods"**

### Simplicity – Keep code as simple as possible.

I like to use the acronym KISS -> Keep It Simple Stupid.

This means that write straight forward, clear and concide code that avoids over-engineering, unncecessary complexity and convoluted logic to reduce errors, simplify debugging and enhance maintainability.

- This makes it easier for new developers who are new to the code base. Simple code and structure is easier to read and understand. Like myself in this internship, it would definitely allow me to contribute quickly and effectively.
- Long-term. Any developer who will be working on this project long-term would prefer to have simpler code that is easier to maintain and modify over time, ensuring the application's longetivity.

**Well, how would you achieve Simplicity?**
- Only build features and abstractions when they are actually needed, not when you anticipate a future need. 
- A function should have one clear purpose and do only that one thing well. 
- Divide large, complicated tasks into smaller, manageable pieces to create more straightforward and understandable cod
- Meaningful names, messages, variables naming, functions and comments would help a lot.
- Implement the DRY Principle (Dont repeat yourself)


### Readability – Code should be easy to understand.
When a developer looks at a component, the code should be understandable at a glance. They dont have to fully understand every single detail, but the purpose and what its trying to do should be clear enough, even by someone unfamiliar with it.

**Well, how would you achieve Readability?**
- Use descriptive variables and function names
- Add comments where context is needed or specific code segments are complex
- Try to ensure that  large features are modularised when needed. For example, if I had a settings page with many tabs, I would split it into a layout container that renders Outlet/children components, where each tab would be a component.

### Maintainability – Future developers (including you!) should be able to work with the code easily.
Current and future developers should be able to extend on the current features without breaking the application. If future Focus Bear developers wanted to add new extensions, the application should already be adaptable without needing full rewrites. Maintainable code is code that exhibits high cohesion and low coupling

**Well, how would you achieve Code Maintainability?**
Improving the properties below can help significantly reduce the amount of time to make any given change:

- Improve Readability
- Coupling 
- Consistency
- Following core principles established in the team like SOLID PRINCIPLES

### Consistency – Follow style guides and project conventions.
Consistent code looks like it’s written by one person, which reduces cognitive load and merge conflicts.

Try to follow the project teams established patterns, styles and structure. This is referring to:
- Naming conventions like files, variables, functions and other methods. For example, if the team uses ESLint + Prettier, stick to that formatting; don’t mix tabs and spaces.
- File structure and hierarchy. For example, in react projects, some teams like to have directories such as components, route, pages etc.
- Including parameters and comments when necessary
- Modularised code and strong cohesion, whilst following core principles the team integrated (i.e SOLID Principles)
- Outside of coding, this also delves into GIT and pull request actions as well (i.e. standardised pull reuqest template and git workflows). Another huge practice are MERGE VS REBASE actions. Teams should know when to use these. For example, MERGE for better safety and working on same feature branches, OR, REBASE for pull requests and clean linear history

### Efficiency – Write performant, optimized code without premature over-engineering.
This is more referring to writing code that uses computational resources, like CPU time and memory, with minimal waste, leading to faster execution and better performance.

For example, an issue I had with a previous project experience is that many peers were importing ENTIRE FULL LIBRARIES such as lucide-react which increased the bundle size and lowered performance. This lead to longer downloads and poor user experience.

To monitor performance, use tools such as LIGHTHOUSE (we've already previously installed this) or other integrated performance tools during development.

**Well, how would you achieve Code Efficiency?**
- Reduce bundle size. For example, instead of importing entire libraries, try to import only the things you specifically need. Additionally, when passing parameters, try to pass in data that the function only needs. For example, instead of passing the entire `user` object, pass in the properties of the user that are used in the function like `user.email`.
- If a program takes too long, or uses too much memory, measure by using tools and see how much it is contributing to the slower performance. Find out what part of the program is the slow part, or the part that's using too much memory.
- use structured and efficient algorithms when necesary

Izzati, F.(2021), "Clean vs Dirty Code in React", Medium. [Online]. Reviewed on 07/10/2025.
https://fathinah.medium.com/clean-vs-dirty-code-in-react-24e8fee03858


![alt text](/milestones/Images/poorNamingVariablesReact.png)


This is a poor example of variable naming. If a new developer in the future were to look at this at first glance, it would be very confusing to gain any context and functionality of the component. It is not intuitive and will be difficult to refer to them later. Below is a better example of naming variables that gives the user some info.

![alt text](/milestones/Images/goodNamingVariablesReact.png)

---

# Code Formatting and Style Guide

### Why is Code Formatting important?
From past project experiences, I realised that having a consistent code formatting improves code readbability, maintainability and even team collaboration. It is satisfying when all developers in the team follow the same conventions and the focus shifts from style debates to actual problem-solving. We spend less overhead costs in resolving styling issues and focus on whats important.

Additionally, it also helps reduce bugs caused by inconsistent syntax or structure. A uniform style makes it easier to understand code written by others and spot logic errors quickly.

### What issues did the linter detect? Did formatting the code make it easier to read?
Here is the ESLINT configuration for a project I am currently working on:
https://github.com/Monash-FIT3170/2025W2-Skilltree/blob/m4-sprint2/eslint.config.mjs

When I use ESLINT + PRETTIER in my development environmnet, the linter usually spots these issues:
- Potential errors and bugs. This includes warnings such as unused variables,undefined variables and missing imports.
- Missing semicolons
- Inconsistent spacing (white space) and trailing whitespace

Inconsistent indentations makes code unreadable and is hard to track the overall flow of functions.

After using ESLINT +PRETTIER to format the code, the code became readable and made it easier to review. Additionally, it also renders warnings whenever you have unused variables. Sometimes when I have a specific import but then decide that I no longer need it, I forget to delete the import and I have a bunch of unused variables lying around in the file. ESLINT reminds me to deal with the unused variables before I push my changes.

---

# Naming Variables & Functions
To effectively name variables and functions, developers need to use descriptive, consistent and follow established or widely used conventions like the camelCase or snake_case. I would prefer to have peers who follow an established guideline as it makes it easier for us to adjust to and increases the likelihood of developers having consistent naming.

### What makes a good variable or Function Name?
To me, a good variable or Function name should be:
- Be concise, but meaningful. Outside developers should be able to glance at the name and have a brief idea of what its purpose is
- Descriptive and context specific. This means that the name clearly indicates what the variable or function represents or does. For example:

    Instead of
    ```
    const x = 22

    x doesnt tell me anything. x could mean anything here (i.e. the number of dogs I have etc)
    ```
    Do this
    ```
    const userAge = 22
    ```

    Instead of
    ```
    calculate()
    ```
    Do this
    ```
    calculateTotalPrice()
    ```

- A project team should follow a well established naming convention such as camelCase for variables, PascalCase for classes
- Commonly, I shoudl expect to see NOUNS for VARIABLES & VERBS for FUNCTIONS (depends on the context)
- Avoid abbreviations or unclear acronyms unless they are widely understood (e.g., id, URL, API).


### What issues can arise from poorly named variables?
Poorly named variables commonly leads to:
- Confusion and bugs - Developers might misinterpret what a variable or function does.
Example: If a function named `getUser()` actually creates a `user`, it causes misunderstanding.
- Forces the develope to "guess" or make an implication. For example, I remember naming a component `Authlayout`, for the purpose of creating a wrapper/container for the sign in and log in page. However, my peers interpreted it as the wrapper template for the reset/forgot password forms but already have their own layout. Thus, we had to change it to `AccountLayout` as it was understood better by everyone else.
- Harder debugging and maintenance - Future developers waste time trying to figure out meaning.
- It creates an inconsistent codebase - When naming conventions aren’t followed, it breaks readability.


Example of Poor Naming of Variables and Functions
```
let x = false //user is logged in or not
const y = 100 //max number of items

//get user data
function handle(){
    // ...
}
```

Example of Good naming of variables and functions
```
let isUserLoggedIn = auth().currentUser;
const maxNumberOfItems = 100;

function fetchUserDetails() {
    // Fetch user data from API
}

```
In this example, `isUserLoggedIn` clearly indicates its purpose as a boolean variable. The develope now knows what the value fo 100 means here. The function name `fetchUserDetail()` also reflects the purpose of the function, which is to retrieve the user details from the API.

The code is now easier to follow, without the need of comments. Thus, this improves code readability, meaning that other developers (or future me) can understand the code instantly without needing extra comments. Refactoring unclear names improved the code’s readability and reduced potential confusion.

---

# Writing Small and Focused Functions

### Why breaking down functions are beneficial?
In every project setting, you will end up having a specific file or component that contains a billion lines of code and does way too many things. This may include rendering or displaying the UI, executing backend methods or calling other functions. We call these types of classes/components "GOD CLASSES", where they have too many responsibilities, violating the Single Responsibility Principle.

In this case, we need to break down functions into smaller, modular and single-purpose as it makes our code:
- Way easier to read. It improves code readability. If every function had a clear, descriptive name and limited responsibility, developers can quickly understand what it does.
- Minimises the occurrence of god classes and long files.
- Simpler for debugging. When a feature causes an error, it is easier to pin point where the issue occurred in a specific function
- Maintainable. If business logic changes, you can update only the relevant part without touching unrelated code.
- Testable. Easier to test applications that have modularised functions



The below example shows a long complex function being refactored into a smaller but focused function:

Martinez, Y. (2023). "The Power of small and focused functions in software development". DEV. [Online].Reviewed on 08/10/2025.
https://dev.to/yabetancourt/the-power-of-small-and-focused-functions-in-software-development-37k1

### Before Refactoring (Long and Complex Function)
```
public double calculateTotalPrice() {
  double totalPrice = 0.0;
  // Calculate the price of each item
  // Apply discounts to the total price
  // Calculate tax on the total price
  return totalPrice;
}
```

Here, `calulcateTotalPrice` has 3 responsibilities: calculating the price of each item, applying discounts to the total price, and calculating the tax on the total price.

### After Refactoring (Short and Simpler Functions)
```
public double calculateTotalPrice() {
  double totalPrice = 0.0;
  totalPrice += calculateItemPrice();
  totalPrice -= applyDiscounts();
  totalPrice += calculateTax();
  return totalPrice;
}

public double calculateItemPrice() {
  // Calculate the price of each item
}

public double applyDiscounts() {
  // Apply discounts to the total price
}

public double calculateTax() {
  // Calculate tax on the total price
}
```

Each function performs a specific task and are used to calcualte the total price. The code is modularised and every function has a clear purpose and is much more readable.

---

# Avoiding Code Duplication

### What is the DRY (DONT REPEAT YOURSELF) Principle?
DRY is a software development principle that aims to encourage software developers to avoid duplicating code in a system.
- When adhering to the principle, developers aim to create reusable components, functions or modules that can be utilised in various parts of codebase. This very important in React projects.
- This makes the codebase maintainable and also minimises the likelihood of errors and bugs, since changes or updates only need to be implemented in one location.
- You might hear another principle that is used in conjuction with DRY, called the SINGLE REPONSIBILITY PRINCIPLE (SRP). SRP is similar and encourages the idea that a module, class, or function should have only one reason to change.

Below is an example of duplicated code and the refactored version
https://gist.githubusercontent.com/NyaGarcia/7f19fcd5211dc9b99fa1a957c9219f68/raw/f7d2f7b71393bc07d8731a087fd043d0f982d5fd/duplication.js

### Before Refactoring (lots of duplication)

```
function getJavascriptNews() {
    const allNews = getNewsFromWeb();
    const news = [];
 
    for (let i = allNews.length - 1; i >= 0; i--){
        if (allNews[i].type === "javascript") {
            news.push(allNews[i]);
        }
    }
 
    return news;
}
 
function getRustNews() {
    const allNews = getNewsFromWeb();
    const news = [];
 
    for (let i = allNews.length - 1; i >= 0; i--){
        if (allNews[i].type === "rust") {
            news.push(allNews[i]);
        }
    }
 
    return news;
}

function getGolangNews() {
  const news = [];
  const allNews = getNewsFromWeb();

  for (let i = allNews.length - 1; i >= 0; i--) {
    if (allNews[i].type === 'golang') {
      news.push(allNews[i]);
    }
  }

  return news;
}
```

If you inspect the code above, we noticed that all functions and methods are very similar, the only difference being the "type" of news being retrieved from allNews. Having 3 methods is pointless and we can combine this inot one reusable function that can be applied anywhere in the codebase provided they have a "type".
If a change is neede in how you retrieve news, we would need to update logic or perform editing in three places.


### After Refactoring (minimised duplication)
```
function getNewsByType(type) {
    const allNews = getNewsFromWeb();
    const filteredNews = [];
 
    for (let i = allNews.length - 1; i >= 0; i--){
        if (allNews[i].type === type) {
            filteredNews.push(allNews[i]);
        }
    }
    return filteredNews;
}

const javascriptNews = getNewsByType("javascript");
const rustNews = getNewsByType("rust");
const golangNews = getNewsByType("golang");
```

OR we can do this
```
function getNewsByType(type) {
  return getNewsFromWeb()
    .filter(newsItem => newsItem.type === type)
    .reverse();
}

const javascriptNews = getNewsByType("javascript");
const rustNews = getNewsByType("rust");
const golangNews = getNewsByType("golang");
```

With this change, it resulted in:
- One reusable function
- Able to be updated in only one place
- Just call with a new type argument
- Concise and expressive

---

# Refactoring Code For simplicity
Refactoring techniques are used to improve the code readability, maintainability and modularity by restructing the code without drastically changing the intended/external behaviour.

These are some refactoring techniques I use throughout my codebase development cycle:
- **Extract Function/Method**: If I see a function or component that has more than one responsibility or is doing to many things, then I would move the block of code that performs a specific task into its own method or function.
- **Removing complicated If or switch logic**: If I see a long chain of if-else statements, then thats probably a sign of needing to be refactored. 
- **Replacing magic numbers with constants**: magic numbers tell us nothing. I try not to use magic numbers ever.
- **Modularity**: Mostly trying to follow and enforce the DRY/SRP principles

Below is an example of complex code and the refactored simplified version:


### Before Refactoring
```
function getUserStatus(user) {
    if (user !== null && user !== undefined){
        if (user.age >18){
            if (user.isActive) {
                return "Active Adult"
            } else {
                return "Inactive Adult"
            }
        } else {
            if (user.isActive) {
                return "Active Minor";
            } else {
                return "Inactive Minor";
            }
        }
    } else {
        return "Unknown Status"
    }
}
```
The original function had deeply nested `if` statements, repeated logic for adults and minors, and redundant null checks. It was difficult to quickly see the logic or make changes without risking bugs. Imagine if we had 100 if statements? How long would that refactoring session take? So, for the sake of my future self and other developers who may update this function, we need to refactor this function to make it simpler to improve code maintainability.

### After Refactoring
```
function getUserStatus(user){
    if (!user) return "Unknown Status";

    const ageRange = user.age >=18 ? "Adult" : "Minor"
    const activity = user.isActive ? "Active" : "Inactive"

    return `${activity} ${ageRange}`;
}
```
In the refactored version, we:
- Use early returns to simplify the null checks
- Replaced multiple `if` blocks with expressions for readability.
- Removes the repetition by dynamically composing the return string.
- Observed that the refactored version is much cleaner, concise and easier to maintain while keeping the exact same behaviour/functionality.

---

# Commenting & Documentation

In large project teams, I definitely appreciate documentation as helpful comments and documentation improve code maintainability without creating any extra noise, technical debt or adding any unneeded cognitive load.

- Explain WHY, not WHAT
    - Documentation and comments should capture the intent and design-rationale behind the decision. Often times I see developers writing comments on what the code does. Most of the time this is ok, but if the code already shows what it does and can be interpreted, a comment that repeats it adds no real value.

- Comment every complex or ambiguous section
    - If you write a piece of code thats not immediately obvious in its purpose, try to add a comment to explain it. Comments should provide additional context and reasoning for the code that follows.

- Keep comments and documentation concise and accurate
    - A good comment is short, precise, and maintained alongside code changes. If the comment becomes stale, it’s worse than no comment because it misleads readers.

- Avoid redundant comments
    - Comments that simply restate the code ("increment by +1") or copy-paste trivial descriptions add significant cognitive load to us developers.
    - Redundant comments creates too much noise
    - If you are writing comments for the sake of doing so, then this is bad practice. Writing lots of comments isnt bas practice however, the comments need to be useful and serve meaningful context value

### Poor Example of Commenting and Documentation
https://stackoverflow.com/questions/143429/whats-the-least-useful-comment-youve-ever-seen

```
// This method takes two integer values and adds them together via the built-in
// .NET functionality. It would be possible to code the arithmetic function
// by hand, but since .NET provides it, that would be a waste of time
private int Add(int i, int j) // i is the first value, j is the second value
{
    // add the numbers together using the .NET "+" operator
    int z = i + j;

    // return the value to the calling function
    // return z;

    // this code was updated to simplify the return statement, eliminating the need
    // for a separate variable.
    // this statement performs the add functionality using the + operator on the two
    // parameter values, and then returns the result to the calling function
    return i + j;
}
```

A poor example would be something along the lines of the above. The comments restate the obvious. The code itself is very simple and clearly shows that we are adding to integers together. Explaining the .NET FUNCTIONALITY and + operator adds no real value to the code. Excessive comments make the code visually noisy, burying the actual logic in filler text. When every line is commented, we start ignoring comments altogether, even when something important actually is noted elsewhere.

### Good Example of Commenting and Documentation (in this example, we are adhering to C# documentation)
```
/// <summary>
/// Adds two integers and returns the result.
/// </summary>
/// <param name="i">The first integer value.</param>
/// <param name="j">The second integer value.</param>
/// <returns>The sum of both integers.</returns>

private int Add(int i, int j) {
    return i + j;
}

```
In this version, we are:
- adhering to XML documentation comments and is standard across C#
- Explains purpose and parameters
- Way more clean and concise
 
---


