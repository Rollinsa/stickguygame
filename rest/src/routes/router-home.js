const express = require("express");
const routerHome = express.Router();
const routerStats = require("./router-stats.js");

routerHome.use("/stats", routerStats);

module.exports = routerHome;