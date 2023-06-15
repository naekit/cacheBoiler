const mongoose = require("mongoose")

const exec = mongoose.Query.prototype.exec

mongoose.Query.prototype.exec = async function () {
	console.log("About to run a query")

	const result = await exec.apply(this, arguments)

	console.log("Just ran a query")

	return result
}
