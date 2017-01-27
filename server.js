
const express = require("express")

const app = express()

app
	.get("/", (req, res) => {
		res.setHeader("content-type", "text/plain")
		res.send("Hello World")
	})
	.listen(3000)