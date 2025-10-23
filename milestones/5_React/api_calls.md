# Axios

[What is axios?](https://www.geeksforgeeks.org/html/what-is-axios/)

Axios is a popular open-source JavaScript library used to make HTTP requests from web browsers or Node.js environments. It simplifies the process of sending asynchronous HTTP Requests to REST endpoints.

The main features of AXIOS:

- Simplifies fetch() and simpler syntax
- Built in behaviour like throwing errors on 400 and 500 response codes and auto-parsing JSON; you have to implement this yourself with fetch.
- Allows you to create dedicated HTTP clients with headers, URLs etc built in so you dont have to supply the everytime
- Promises: Easier to handle asynchronous requests, especially with modern JS features such as async/await
- Interceptors: Allows you to intercept and modify requests or responses before they are handled by .then() or .catch()
- Automatic JSON parsing
- Supports all HTTP Methods

## Why is it useful to create a reusable Axios instance?

I found it useful to create an Axios instance as it:

- Centralises configuration (base URL, headers, timeouts) and easier to locate errors related to axios
- Keeps code DRY as there is no need to repeat setup for each API call
- Makes it easy to apply interceptors for auth or logging globally
- Better maintainability as we would only need to update one file

## How does intercepting requests help with authentication?

Lots of benefits in creating your intercepting request method:

- Automatically attach an access token to every outgoing request
- Handle errors (like 401 Unauthorised) in one place instead of in every component.This keeps your authentication logic consistent and secure across all API calls.

## What happens if an API request times out, and how can you handle it?

If the request were to time out due to exceeding the limit (i..e in our example, it was 8000ms), then you can handle it by:

- Catching the error in a try...catch block.
- Showing a friendly error message to the user via UI
- Redo the request and restart it or suggest to the user to check their configuration/connection
