# Axios in React Native

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

Axios works well on both web and mobile! It allows Mobile devices to communicate well with servers through API end points.

## Key Differences of Axios in React and React Native

React (WEB):

- Uses the browser’s XMLHttpRequest (XHR) or Fetch API
- Uses browser-based FormData, supports progress tracking easily
- Can use relative URLs (like /api/users) since it runs in a browser with a domain
- Browser automatically manages cookies and CORS rules
- Identical JSON parsing, res.data structure

React Native:

- Uses a polyfilled XHR implementation built into React Native
- No DOM APIs
- Must use absolute URLs. No backend domain context (refer to below example)
- No CORS in React Native, but we must manually manage headers/tokens if needed

this wouldnt work in RN as there is no concept of domain or localhost

```
axios.get('/api/users');
```

You need to do this: write the absolute url

```
axios.get('http://10.0.2.2:3000/api/users'); //Android emulator
axios.get('http://localhost:3000/api/users'); //ios emualtor
```

## `fetch` vs `axios` in react native

Using axios (not including the axios instance that we created)

```
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
```

Using Fetch (including handling errors)

```
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json(); // manual JSON parsing
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

Here, we need to check res.ok and call json() to extract the data body.

## What is Axios Retry?

[AXIOS-RETRY](https://www.npmjs.com/package/axios-retry)

Axios plugin that intercepts failed requests and retries them whenever possible. So instead of failing right away, we use this plugin to reattempt the api request. A normal axios api call fails instantly, and we need to manually catch the error sing try-catch blocks. But this is inefficient

>RETRIES HELP ENSURE THAT YOUR APPLICATION REMIANS FUNCTIONAL IN DRASTIC SCENARIOS (I.E. TIME OUTS)

```
try {
  await axios.get(url);
} catch (err) {
  await axios.get(url); // manual retry
}
```

[HOW TO USE AXIO-RETRY](https://dev.to/scrapfly_dev/how-to-retry-in-axios-5e87)

>Add the AXIOS-ENTRY TO THE AXIOS-INSTANCE
>Then, that is is. We just call axios.get and it is handled for us

The below code is an example from the above link

```
axios
  .get("https://example.com")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

```
const axios = require("axios");
const axiosRetry = require("axios-retry");

//Configuring axios-retry

axiosRetry(axiosInstance,, {
  retries: 3, // Number of retries
  retryDelay: axiosRetry.exponentialDelay, // Use exponential backoff
  // attach callback to each retry to handle logging or tracking
  onRetry: (err) => console.log(`Retrying request: ${err.message}`),
  // Specify conditions to retry on, this is the default
  // which will retry on network errors or idempotent requests (5xx)
  retryCondition: (error) => axiosRetry.isNetworkOrIdempotentRequestError(error)
});
```

- Set retries to maximum 3 attempts.
- Use exponential backoff to increase the delay between retries. So, first retry will be quite rapid while following ones wait a bit longer
- Attach a callback to log each retry attempt.
- Specify conditions to retry on network errors or idempotent requests (5xx).

Another example:

```
axiosRetry(axiosInstance,, {
  retries: 3, // number of retry attempts
  retryDelay: (retryCount) => {
    console.log(`Retry attempt: ${retryCount}`);
    return retryCount * 1000; // wait 1s, then 2s, then 3s...
  },
  retryCondition: (error) => {
    // Retry only if network error or 5xx server error
    return error.code === 'ECONNABORTED' || 
           (error.response && error.response.status >= 500);
  },
});
```

TLDR:

- retries: number of retry attempts
- retryDelay: How long to wait between tries
- retryCondition: When to retry
- Auto process.

## Why is Axios preferred over Fetch in some cases?

Axios automatically passes JSON and handles request/responseinterceptors and overall provides simpler syntax comapred to the built in React fetch. It is more developer friendly and consistent across environments

## How does Axios-Retry improve network reliability?

Axios-Retry automatically re-sends failed requests due to temporary network errors or server issues. This increases reliability, especially on mobile networks where connectivity can fluctuate.

## How would you handle API failures gracefully in React Native?

Attempt to use the following to adhere to good practices:

- try catch block to catch any errors
- display ui messages to let the user know. Also, for any loading/fetching of data via API, use a loading spinner
- Fallbacks
