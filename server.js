
const bodyParser = require("body-parser");
const express = require("express")

const timeConvert = require("./routes/timeConvert");

const app = express()

app
	.use(bodyParser.json())
	// homepage instruction page
	.use(timeConvert)
	.listen(3000)