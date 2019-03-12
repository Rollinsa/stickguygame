const express = require("express");
const routerHome = require("./routes/router-home.js");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const mongoURL = 'mongodb://mongo:27017';
const dbName = 'atmDB';
const collectionName = 'atm';

const options = {
	// Don't build indexes
	autoIndex: false,
	// Retry up to 30 times
	reconnectTries: 30,
	// Reconnect every 500ms
	reconnectInterval: 500,
	// Maintain up to 10 socket connections
	poolSize: 10,
	// If not connected, return errors immediately rather than waiting for reconnect
	bufferMaxEntries: 0,
	// user/pass
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
