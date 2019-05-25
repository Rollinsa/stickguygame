const express = require("express");
const routerATM = express.Router();

routerATM.get("/balance", (req, res) => {
	const collection = req.app.get("collection");

	collection.findOne({}, function(err, item) {
		if (err) {
			const error = `Error finding balance: ${err}`;
			console.error(error);
			return res.status(500).json({ message: error });
		}
		if (item) {
			console.log(`Item found in get balance: ${JSON.stringify(item, null ,4)}`);
			return res.json({ balance: item.balance });
		}
		// no error, but item not found, so start user with empty balance
		collection.insertOne({ "balance": 0 }).then((result) => {
			console.log(`Result of inserting initial balance of 0: ${result}`);
			return res.json({ balance: 0 });
		}).catch((error) => {
			const errorMessage = (error && error.message) ? error.message : error;
			console.error("Error inserting initial balance of 0: ", errorMessage);
			return res.status(500).json({ message: errorMessage });
		});
	});
});

routerATM.post("/deposit", (req, res) => {
	const collection = req.app.get("collection");

	const depositAmount = req.body.deposit;
	collection.findOne({}, function(err, item) {
		if (err) {
			const error = `Error finding balance: ${err}`;
			console.error(error);
			return res.status(500).json({ message: error });
		}
		let existingBalance = 0;
		if (item) {
			console.log(`Existing balance item found: ${JSON.stringify(item, null ,4)}`);
			existingBalance = item.balance;
		}
		collection.updateOne({ "balance": existingBalance }, { $set: { "balance": existingBalance + depositAmount } }, { upsert: true }).then((result) => {
			console.log(`Result of inserting deposit of $${depositAmount}: ${result}`);
			return res.json({ balance: existingBalance + depositAmount });
		}).catch((error) => {
			const errorMessage = (error && error.message) ? error.message : error;
			console.error(`Error inserting deposit of $${depositAmount}: ${errorMessage}`);
			return res.status(500).json({ message: errorMessage });
		});
	})
});

module.exports = routerATM;