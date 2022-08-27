import http from "http";
import body from "body/form.js";

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.method === "GET") {
      res.write(`<form action="/" method="POST">`);
      res.write(`<div><p>Username</p><input name="username"></div>`);
      res.write(`<div><p>Age</p><input name="age"></div>`);
      res.write(`<input type="submit">`);
      res.write(`</form>`);
      res.end();
    } else if (req.method === "POST") {
      //   let body = [];
      //   req.on("data", (chunk) => {
      //     body.push(chunk);
      //   });
      //   req.on("end", () => {
      //     body = Buffer.concat(body).toString();
      //     console.log(body);
      //     res.end("You have successfully registered!");
      //   });
      body(req, (err, body) => {
        console.log(body);
        res.end("You have successfully registered!");
      });
    }
  })
  .listen(3000, () => console.log("server listen on port 3000"));
