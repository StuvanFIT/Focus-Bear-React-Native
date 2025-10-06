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





