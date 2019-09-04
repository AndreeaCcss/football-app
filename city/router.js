const { Router } = require("express");
const router = new Router();
const City = require("./model");

router.get("/cities", (req, res, next) => {
  City.findAll()
    .then(allCities => res.send(allCities))
    .catch(next);
});

router.post("/cities", (req, res, next) => {
  City.create(req.body)
    .then(city => res.json(city))
    .catch(next);
});

router.get("/cities/:cityId", (req, res, next) => {
  City.findByPk(req.params.cityId)
    .then(city => {
      if (!city) {
        req.status(404).end();
      } else {
        res.send(city);
      }
    })
    .catch(next);
});

router.put("/cities/:cityId", (req, res, next) => {
  City.findByPk(req.params.cityId).then(city => {
    if (!city) {
      req.status(404).end();
    } else {
      city.update(req.body).then(city => res.json(city));
    }
  });
});
module.exports = router;
