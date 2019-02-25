const express = require("express");
const routerStats = express.Router();

routerStats.get("/", (req, res) => {
	res.send("stickguygame RESPONDING!!!");
});

routerStats.post("/", (req, res) => {
	const collection = req.app.get("collection");

	collection.insertOne({"stickguydata": 100}).then((result) => {
		console.log(result);
		res.send(res.json(result))
	}).catch((error) => {
		console.error("Error....", error.message);
		res.status(500).send("INTERNAL SERVER ERROR");
	});
})


module.exports = routerStats;