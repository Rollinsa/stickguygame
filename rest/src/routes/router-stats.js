const express = require("express");
const routerStats = express.Router();

routerStats.get("/", (req, res) => {
	res.send("stickguygame RESPONDING!!!");
});
module.exports = routerStats;