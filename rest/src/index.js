const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const routerHome = require("./routes/router-home.js");
const bodyParser = require('body-parser');
const app = express();
const mongoURL = 'mongodb://mongo:27017';
const dbName = 'atmDB';
const collectionName = 'atm';

MongoClient.connect(mongoURL, { auth: { user: "root", password: "pass" } }, function(err, client) {
	if (err) {
		console.error("Error....", err);
		return;
	}
	console.log("Connected successfully to Mongo Client");

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	const db = client.db(dbName);
	const collection = db.collection(collectionName);

	app.set("collection", collection);

	app.use("/", routerHome);

	app.use((err, req, res, next) => {
		console.error("Error....", err.message);
		res.status(500).send("INTERNAL SERVER ERROR");
	});

	app.listen(3000, () => {
		console.log("Express server up and running!");
	})
});
