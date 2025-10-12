# Examples of Common Code Smells

### Magic Numbers

#### Before
```
// Directly using "magic" values in code

if (user.role === "100") {
  console.log("Admin privileges granted");
}
```

#### After
Instead, we should be using descriptive constants

```
const ROLE_ADMIN = "1";

if (user.role === ROLE_ADMIN) {
  console.log("Admin privileges granted");
}
```
> [! NOTE]
> Normally, this is not GOOD PRACTICE to check for admin privledges. This is just an example 

### Very Long Functions

#### Before
```
async function handleUserLogin(username, password) {
  const user = await Meteor.users.findOneAsync({ username });
  
  if (!user) {
    throw new Error("User not found");
  }
  if (user.password !== password) {
    throw new Error("Invalid password");
  }
  console.log("User logged in:", username);
  Meteor.call("logLoginTime", username, new Date());
  return true;
}


//...........to be continued

```

#### After
```
async function findUser(username) {
  return await Meteor.users.findOneAsync({ username });
}

function validatePassword(user, password) {
  if (user.password !== password) {
    throw new Error("Invalid password");
  }
}

async function handleUserLogin(username, password) {
  const user = await findUser(username);
  if (!user) throw new Error("User not found");

  validatePassword(user, password);
  Meteor.call("logLoginTime", username, new Date());
  console.log("User logged in:", username);
  return true;
}
```

### Duplicate Code

#### Before
```
if (!userId) {
  throw new Error("Not authorized");
}
const user = await Meteor.users.findOneAsync(userId);
user.lastActive = new Date();
Meteor.users.update(userId, { $set: { lastActive: user.lastActive } });

// Later, in another function or method....... we do the exact same thing
if (!userId) {
  throw new Error("Not authorized");
}
const user2 = await Meteor.users.findOneAsync(userId);
user2.lastActive = new Date();
Meteor.users.update(userId, { $set: { lastActive: user2.lastActive } });

```

#### After
We can write it as a reusable function. Having reusable functions improves maintainability and reduces bugs.
```
async function updateLastActive(userId) {
  if (!userId) throw new Error("Not authorized");
  const user = await Meteor.users.findOneAsync(userId);
  Meteor.users.update(userId, { $set: { lastActive: new Date() } });
}

updateLastActive(userId);
```

### Large Classes. Or known as God Classes

#### Before
```
class UserManager {
  createUser() {}
  deleteUser() {}
  sendEmail() {}
  logActivity() {}
  updateUserProfile() {}
  calculateUserStats() {}
  banUser() {}
}
```
#### After
Each class now has a single responsibility, following the Single Responsibility Principle (SRP).

```
class UserService {
  createUser() {}
  deleteUser() {}
}

class EmailService {
  sendEmail() {}
}

class ActivityService {
  logActivity() {}
  calculateUserStats() {}
}
```

### Deeply Nested Conditionals


#### Before
```
if (user) {
  if (user.profile) {
    if (user.profile.isVerified) {
      console.log("Welcome verified user!");
    }
  }
}
```

#### After
Makes the code more readable, reducing the need of indentations.
```
if (!user || !user.profile || !user.profile.isVerified) return;

console.log("Welcome verified user!");
```

### Unused/Commented out code

#### Before
```
// const helperMethod = () => console.log("hello world")
// const abcd1 = 901;

console.log("New function");
```

#### After
```
console.log("New function");
```

### Inconsitent Naming

#### Before
```
const x = Meteor.users.find().fetch();
```

### After
```
const users = Meteor.users.find().fetch();
```

Additionally, any literal inconsitent naming such as `const users` and `const Users` can also be confusing for developers reviewing your work.

### How did refactoring improve readability and maintainability?
I believe there is always a need of refactoring in any codebase, with the purpose of improving the overall codebase effiency and structure. As a result, it improved code readability and maintainability. This includes practice such as:

- Splitting large functions into smaller, single responsibility
- Replacing hardcoded values with constants that have meaningful names
- Removing duplication and unused code as it improves clarity
- Removing nested conditions for better readability for the developer
- Using meaningful and consistent names for variables and functions.

### How can avoiding code smells make future debugging easier?
- Any errors that pop up are easier to locate since each function or module, has a single purpose or role
- Future developers who work on the codebase can easily understand the codebase.
- Changes in one area are less likely to break others.
- Our debugging sessions become more productive and becomes faster and more predictable