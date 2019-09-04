const { Router } = require("express");
const Player = require("./model");
const Team = require("../team/model");
const City = require("../city/model");
const router = new Router();

router.get("/players", (req, res, next) => {
  Player.findAll()
    .then(listOfPlayers => res.send(listOfPlayers))
    .catch(next);
});

router.post("/players", (req, res, next) => {
  Player.create(req.body)
    .then(player => res.json(player))
    .catch(err => next(err));
});

router.get("/players/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId, { include: [Team, City] })
    .then(player => {
      if (!player) {
        res.status(404).end();
      } else {
        res.json(player);
      }
    })
    .catch(next);
});

router.put("/players/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId)
    .then(player => {
      if (!player) {
        res.status(404).end;
      } else {
        return player.update(req.body).then(player => res.json(player));
      }
    })
    .catch(next);
});

module.exports = router;
