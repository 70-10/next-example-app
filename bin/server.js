const express = require("express");
const next = require("next");
const co = require("co");

const dev = process.env.NODE_ENV !== "pro";
const app = next({ dev });
const handle = app.getRequestHandler();

co(function*() {
  yield app.prepare();

  const server = express();

  server.get("/", (req, res) => {
    return app.render(req, res, "/top", req.query);
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(3000, err => {
    if (err) {
      throw err;
    }

    console.log("> Ready on http://localhost:3000/");
  });
}).catch(console.error);
