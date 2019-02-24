const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const routerHome = require("./routes/router-home.js");

const app = express();
const mongoURL = 'mongodb://mongo:27017';
const dbName = 'atmDB';
const collectionName = 'atm';

MongoClient.connect(mongoURL, function(err, client) {
	console.log("Connected successfully to server");

	const db = client.db(dbName);
	const collection = db.collection(collectionName);

	app.use("/", routerHome);

	app.set("collection", collection);

	app.use((err, req, res, next) => {
		console.error("Error....", err.message);
		res.status(500).send("INTERNAL SERVER ERROR");
	});

	app.listen(3000, () => {
		console.log("Express server up and running!")
	})

	client.close();
});
