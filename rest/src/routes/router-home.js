const express = require("express");
const routerHome = express.Router();
const routerATM = require("./router-atm.js");

routerHome.use("/atm", routerATM);

module.exports = routerHome;