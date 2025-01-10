const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello');
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Problem: The server takes 5 seconds to respond to a request. During this time, the client may timeout before getting the response. 
//Solution: Use async/await to handle asynchronous operations more efficiently.
