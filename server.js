
const express = require("express")
const moment = require("moment")()

const app = express()

var result = {
	unix: null,
	natural: null
}

function unixToNatural(seconds) {
	const months = ["Januari", "Fabruari", "Mars", "April",
									"Mai", "June", "July", "August",
									"September", "October", "November", "December"]
	var date = {
		year: 0,
		month: 0,
		day: 0
	}

	var days = seconds/60/60/24
	
	date.year = parseInt((1970 + (days/365)), 10)
	var temp = parseInt(((1970 + (days/365)) - date.year))*100
	date.month = months[temp]
	// not string

	// comate monthVal with 1/12 < = that month

	return date.month
}

app
	.get("/:id", (req, res) => {
		res.setHeader("content-type", "application/json")

		if (parseInt(req.params['id'], 10) > 0) {
			var unixValue = Number(req.params['id'])
			var date = unixToNatural(unixValue)

			result.unix = unixValue
			result.natural = date

			res.send(JSON.stringify(result))

		} else {
			res.send('natural')
		} 
	})
	.listen(3000)