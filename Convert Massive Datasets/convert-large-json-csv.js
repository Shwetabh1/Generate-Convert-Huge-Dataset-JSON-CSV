//The input must always be a flat JSON file for obvious reasons.
const fs = require('fs');
const _ = require('lodash');

//Read the large file synchronously
var arr = JSON.parse(fs.readFileSync('./large-json-file.json'));

//write the header line.
var stream = fs.createWriteStream("converted-large-csv-file.csv");
var headers = Object.keys(arr[0]);
stream.write(headers.toString() + "\n");
let csvBody = []; //temporary variable

//write the body
_.forEach(arr, function(value, key) {
	_.forEach(headers, function(val) {
		if (val !== undefined) {
			csvBody.push(value[val]);
		} else {
			throw new Error('The flat JSON file has some extra/missing headers')
		}
	})
	//console.log(csvBody.toString(), 'CSV BODY');
	stream.write(csvBody.toString() + "\n");
	csvBody = [];
})
stream.end();
console.log('File Has Been Successfully Converted.');