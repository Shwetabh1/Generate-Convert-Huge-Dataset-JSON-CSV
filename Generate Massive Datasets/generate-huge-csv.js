const faker = require('faker');
const fs = require('fs');
const _ = require('lodash');

//define the headers of your csv file.
//define the object literal that would store the functions for each index
//faker generates new data for every call
let csvHeaders = {
    FIRST_NAME: faker.name.firstName(),
    LAST_NAME: faker.name.lastName(),
    MIDDLE_NAME: faker.name.lastName(),
    PREFIX: faker.lorem.words(),
    ADDRESS_ONE: faker.address.streetAddress(),
    ADDRESS_TWO: faker.address.streetAddress(),
    ADDRESS_THREE: faker.address.streetAddress(),
    CITY: faker.address.city(),
    STATE: faker.address.state(),
    ZIP_CODE: faker.address.zipCode(),
    COUNTRY: faker.address.country(),
    VOICE_NUMBER: faker.phone.phoneNumber(),
    EMAIL_ADDRESS: faker.internet.email(),
    FAX_NUMBER: faker.phone.phoneNumber(),
    DATE_OF_BIRTH: '12/12/1995',
    GENDER: 'male',
}

// write the header line.
var stream = fs.createWriteStream("huge-csv.csv");
stream.write(Object.keys(csvHeaders).toString()+ "\n");
//write the body
var csvBody = [];
for (let i = 0; i < 10; i++) {
    _.forEach(csvHeaders, function(value, key){
       //console.log(value);
       csvBody.push(value);
    })
    //console.log(csvBody.toString(), 'CSV BODY');
    stream.write(csvBody.toString()+ "\n");
    csvBody = [];
}
stream.end();
