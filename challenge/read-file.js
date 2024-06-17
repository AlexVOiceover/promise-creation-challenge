const fs = require('node:fs')

function readFilePromise(filePath) {
	const promise = new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', (error, data) => {
			if (error) {
				reject(error)
			} else {
				resolve(data)
			}
		})
	})

	return promise
}

module.exports = { readFilePromise }
