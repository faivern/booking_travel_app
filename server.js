const express = require('express');
const app = express();
const PORT = 3000;


app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
