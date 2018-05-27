//This program uses json-2-csv open source library to convert json to csv.
//mention the header columnns in correct order below in the keys section.

var converter = require('json-2-csv');
var fs = require('fs');
var options = {
    delimiter : {
        wrap  : '"', // Double Quote (") character
        field : ',', // Comma field delimiter
        array : ';', // Semicolon array value delimiter
        eol   : '\n' // Newline delimiter
    },
    prependHeader    : true,
    sortHeader       : false,
    trimHeaderValues : true,
    trimFieldValues  : true,
    keys             : ['FIRST_NAME', 'LAST_NAME', 'MIDDLE_NAME', 'ADDRESS_ONE', 'ADDRESS_TWO', 'ADDRESS_THREE', 'CITY', 'STATE']
};
var documents = fs.readFileSync('./fake-data-file.json'); //read the json file

var json2csvCallback = function (err, csv) {if (err) throw err;
    //console.log(csv);
    fs.writeFile('./fake-data-converted-file.csv', csv);
};

converter.json2csv(JSON.parse(documents), json2csvCallback, options);

