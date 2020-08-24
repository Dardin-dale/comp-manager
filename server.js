require('dotenv-safe').config();
const express = require("express");
const routes = require("./src/routes");
const app = express();
const https = require('https');
const fs = require('fs');
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

// // Start App listening
// app.listen(PORT, () =>
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
// );

//Secure Server Port
https.createServer({
  key: fs.readFileSync('./cert.key'),
  cert: fs.readFileSync('./cert.crt'),
  passphrase: process.env.SSL_PASS
}, app)
.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});


// server.listen(PORT);


