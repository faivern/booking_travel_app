"use strict";
const express = require("express");
const path = require("path"); // Importera path-modulen
const app = express();
const PORT = 3000;

// Middlewares för att hantera statiska filer
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));

// Route för login.html
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Starta servern
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
