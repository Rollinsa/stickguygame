const express = require("express");
const routerHome = require("./routes/router-home.js");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const mongoURL = 'mongodb://mongo:27017';
const dbName = 'atmDB';
const collectionName = 'atm';

const options = {
	autoIndex: false,
	reconnectTries: 30,
	reconnectInterval: 500,
	poolSize: 10,
	bufferMaxEntries: 0,
	auth: {
		authdb: "admin",
	},
	user: "root",
	pass: "pass",
};

const connectWithRetry = () => {
	mongoose.connect(`${mongoURL}/${dbName}`, options).then(() => {
		console.log('MongoDB is connected');
		const db = mongoose.connection.db;

		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(bodyParser.json());
		app.use("/", (req, res, next) => {
			console.log(`Request Method: ${req.method}`);
			console.log(`Time: ${Date.now()}`);
			next();
		});

		const collection = db.collection(collectionName);

		app.set("collection", collection);

		app.use("/", routerHome);

		app.use((err, req, res, next) => {
			console.error("Error....", err.message);
			res.status(500).send("INTERNAL SERVER ERROR");
		});

		app.listen(4000, () => {
			console.log("Express server up and running!");
		});
	}).catch(err => {
		console.log(`MongoDB connection error: ${err}. Retrying after 5 seconds.`);
		setTimeout(connectWithRetry, 5000);
	});
};

connectWithRetry();
