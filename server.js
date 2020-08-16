require('dotenv-safe').config();
const express = require("express");
const routes = require("./src/routes");
const app = express();
const PORT = process.env.PORT || 5000;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

//Create Socket and listen for save book event
// const server = require('http').createServer(app);


// server.listen(PORT);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);