const express = require("express");
const routerATM = express.Router();

routerATM.get("/", (req, res) => {
	res.send("ATM RESPONDING!!!");
});
module.exports = routerATM;