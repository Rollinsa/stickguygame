const express = require("express");
const routerATM = express.Router();

routerATM.get("/", (req, res) => {
	res.send("ATM RESPONDING!!!");
});

routerATM.post("/test", (req, res) => {
	const collection = req.app.get("collection");

	collection.insertOne({ "testdata": 100 }).then((result) => {
		console.log(result);
		res.send(res.json(result));
	}).catch((error) => {
		console.error("Error....", error.message);
		res.status(500).send("INTERNAL SERVER ERROR");
	});
});

module.exports = routerATM;