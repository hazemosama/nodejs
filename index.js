const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const bodyParserMW = bodyParser.urlencoded({
  extended: true,
});

app.set("view engine", "ejs");
app.set("views", "views");

//Middleware

// app.use((req, res, next) => {
//   if (req.url === "/") res.end("hello from home");
//   else if (req.url === "/about") res.end("Hello from about");
//   else res.end("404 not found!");
// });

/*
all request methods  GET, POST, PUT, DELETE 
*/

// app.get("/", (req, res, next) => {
//   res.send("Hello Home");
// });

// app.use("/register", registerRouter);

// app.use("/about", aboutRouter);

// app.use((req, res, next) => {
//   res.send("404 Error Not Found!");
// });

app.use(express.static(path.join(__dirname, "statics")));

app.get("/", (req, res, next) => {
  req.statusCode = 200;
  res.render("index", {
    pageTitle: "Home",
  });
});

app.post("/", bodyParserMW, (req, res, next) => {
  res.render("index", {
    name: req.body.name,
    pageTitle: "Home",
  });
  console.log(req.body.name);
});

// D:\programming\back-end\nodejs\app.js
// app.get("/", (req, res, next) => {
//   res.setHeader("Content-Type", "text/html");
//   res.write(`<form action="/" method="POST">`);
//   res.write(`<div><p>Username</p><input name="username"></div>`);
//   res.write(`<div><p>Age</p><input name="age"></div>`);
//   res.write(`<input type="submit">`);
//   res.write(`</form>`);
//   res.end();
// });

// app.post("/", bodyParserMW, (req, res, next) => {
//   console.log(req.body);
//   res.send("done");
// });

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
