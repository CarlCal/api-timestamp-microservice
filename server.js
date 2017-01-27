
const express = require("express")
const moment = require("moment")()

const app = express()

var result = {
	unix: null,
	natural: null
}

app
	.get("/:id", (req, res) => {
		res.setHeader("content-type", "application/json")

		if (parseInt(req.params['id'], 10) > 0) {
			var unixValue = Number(req.params['id'])
			var date = new Date(unixValue*1000)

			result.unix = unixValue
			result.natural = date

			res.send(result)

		} else {
			res.send('natural')
		} 
	})
	.listen(3000)