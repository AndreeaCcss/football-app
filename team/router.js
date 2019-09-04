const { Router } = require("express");
const Team = require("./model");

const router = new Router();
router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(listOfTeams => res.send(listOfTeams))
    .catch(console.error);
});

module.exports = router;
