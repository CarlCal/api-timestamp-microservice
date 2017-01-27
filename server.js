
const express = require("express")
const moment = require("moment")

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
			var date = moment.unix(unixValue).format("MMMM/DD/YYYY")

			if (date !== "Invalid date") {
				result.unix = unixValue
				result.natural = date
			}

			res.send(JSON.stringify(result)) 

		} else {

			//use substring and tog et full date from qurey,
			//then vaildate that date and if valid print it

			res.send('natural')
		}

	})
	.listen(3000)

	//make route for the homapage
	//body paresr