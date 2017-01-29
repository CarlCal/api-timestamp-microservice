
const express = require("express")
const moment = require("moment")

const router = express.Router()

router
	.get("/:id", (req, res) => {
		res.setHeader("content-type", "application/json")

		var result = {
			unix: null,
			natural: null
		}

		if (parseInt(req.params['id'], 10) > 0) {
			var unixValue = Number(req.params['id'])
			var date = moment.unix(unixValue).format("MMMM D, YYYY")

			if (date !== "Invalid date") {
				result.unix = unixValue
				result.natural = date
			}

			res.send(JSON.stringify(result)) 

		} else {
			var date = req.params["id"].replace(/%/g, " ")
			var valid = moment(date, "MMMM D, YYYY", true).isValid()

			if (valid) {
				result.unix = moment(date, "MMMM D, YYYY").unix()
				result.natural = date
			}

			res.send(result)
		}
	})

module.exports = router