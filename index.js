const express = require("express");
const teamRouter = require("./team/router");
const playerRouter = require("./player/router");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const app = express();
const port = process.env.PORT || 4000;

app.use(jsonParser);

app.use(teamRouter);
app.use(playerRouter);

app.listen(port, () => console.log(`Football api listening on port: ${port}`));
