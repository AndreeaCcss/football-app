const { Router } = require("express");
const Team = require("./model");

const router = new Router();
router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(listOfTeams => res.send(listOfTeams))
    .catch(console.error);
});

router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(team => res.json(team))
    .catch(err => next(err));
});

module.exports = router;
