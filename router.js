const { Router } = require("express");

const router = new Router();
router.get("/", (request, response) => response.send("separated"));

module.exports = router;
