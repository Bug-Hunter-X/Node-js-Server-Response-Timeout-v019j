# Node.js Server Response Timeout

This repository demonstrates a common issue in Node.js applications: server response timeouts.  The example showcases a server that takes 5 seconds to respond to requests.  This delay can lead to client-side timeouts and a poor user experience. The solution demonstrates how to improve the response time.

## Bug

The `server.js` file contains a simple Express.js server that uses `setTimeout` to simulate a long-running operation before sending a response.  This is a common anti-pattern that leads to slow response times and potential timeouts.

## Solution

The `serverSolution.js` file provides a solution using `async/await` to handle asynchronous operations more gracefully. This approach avoids blocking the event loop and improves the responsiveness of the server.