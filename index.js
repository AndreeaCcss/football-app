const express = require("express");
const teamRouter = require("./team/router");

const app = express();
const port = process.env.PORT || 4000;

app.use(teamRouter);

app.listen(port, () => console.log(`Football api listening on port: ${port}`));
