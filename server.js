
const bodyParser = require("body-parser")
const express = require("express")

const timeConverter = require("./routes/timeConverter")

const staticAssets = __dirname + "/public"

var port = process.env.PORT || 3000

const app = express()

app
	.use(bodyParser.json())
	.use(express.static(staticAssets))
	.use(timeConverter)
	.listen(port)