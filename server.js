const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
const cart = require("./mock/cart");
const fetch = require("node-fetch");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const secreApiKey = process.env.API_SECRET_KEY; // this should be injected by the env where the app is running
const scalapayEndpoint = process.env.SCALAPAY_ENDPOINT;

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("/api/cart", (req, res) => {
    return res.send(cart); // mocking some API/DB data
  });

  server.post("/api/external/scalapay", async (req, res) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${secreApiKey}`
      },
      body: JSON.stringify(req.body) // ideally the body should be validated before sending it to scalapay API
    };

    fetch(scalapayEndpoint, options)
      .then(res => res.json())
      .then(json => res.send(json))
      .catch(err => res.send(err));
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
});
