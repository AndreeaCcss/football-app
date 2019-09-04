const express = require("express");
// const router = require("./router");
const db = require("./db");
const Team = require("./team/model");

const app = express();
const port = process.env.PORT || 4000;

// app.use(router);

app.listen(port, () => console.log(`Football api listening on port: ${port}`));
