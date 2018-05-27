/*
 * Use faker to create large dummy JSON.
 * Below example creates a flat JSON file.
 * Try Modifying the structure and so on to suit your need.
 * Also see a live demonstartion of faker: https://rawgit.com/Marak/faker.js/master/examples/browser/index.html
 */

var faker = require('faker');
var fs = require('fs');

let arr = [];

for (let i = 0; i < 100000; i++) {
    arr.push({
        FIRST_NAME: faker.name.firstName(),
        LAST_NAME: faker.name.lastName(),
        ADDRESS_ONE: faker.address.streetAddress(),
        ADDRESS_TWO: faker.address.streetAddress(),
        ADDRESS_THREE: faker.address.streetAddress(),
        CITY: faker.address.city(),
        STATE: faker.address.state(),
        ZIP_CODE: faker.address.zipCode(),
        COUNTRY: faker.address.country(),
        VOICE_NUMBER: faker.phone.phoneNumber(),
        EMAIL_ADDRESS: faker.internet.email(),
        DATE_OF_BIRTH: faker.date.past(),
        GENDER: faker.random.arrayElement(['male', 'female', 'unknown']),
        COMPANY_NAME: faker.company.companyName(),
        SOME_ARRAY: [faker.commerce.color(), faker.random.number(), faker.lorem.word()]
    });
}

fs.writeFileSync('./fake-data-100000.json', JSON.stringify(arr));

/*  Other Examples for diffrenet data you can use:

	    return {
          "name": faker.name.findName(),
          "username": faker.internet.userName(),
          "email": faker.internet.email(),
          "address": {
              "streetA": faker.address.streetName(),
              "streetB": faker.address.streetAddress(),
              "streetC": faker.address.streetAddress(true),
              "streetD": faker.address.secondaryAddress(),
              "city": faker.address.city(),
              "state": faker.address.state(),
              "country": faker.address.country(),
              "zipcode": faker.address.zipCode(),
              "geo": {
                  "lat": faker.address.latitude(),
                  "lng": faker.address.longitude()
              }
          },
          "phone": faker.phone.phoneNumber(),
          "website": faker.internet.domainName(),
          "company": {
              "name": faker.company.companyName(),
              "catchPhrase": faker.company.catchPhrase(),
              "bs": faker.company.bs()
          },
          "posts": [
              {
                  "words": faker.lorem.words(),
                  "sentence": faker.lorem.sentence(),
                  "sentences": faker.lorem.sentences(),
                  "paragraph": faker.lorem.paragraph()
              },
              {
                  "words": faker.lorem.words(),
                  "sentence": faker.lorem.sentence(),
                  "sentences": faker.lorem.sentences(),
                  "paragraph": faker.lorem.paragraph()
              },
              {
                  "words": faker.lorem.words(),
                  "sentence": faker.lorem.sentence(),
                  "sentences": faker.lorem.sentences(),
                  "paragraph": faker.lorem.paragraph()
              }
          ],
          "accountHistory": [faker.helpers.createTransaction(), faker.helpers.createTransaction(), faker.helpers.createTransaction()]
      };
  };
 */