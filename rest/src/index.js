const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World\n");
})

app.listen(3000, () => {
	console.log("Express server up and running!")
})