const { Given, When, Then, } = require('@cucumber/cucumber')
const assert = require('assert')
const SdltCalculator = require('../../src/business-logic/sdltCalculaor')
const FTB = 'a first time buyer'
const additional = 'buying an additional property'

let propertyValue = 0;
let ftb = false;
let add = false;

const removeInvalidChar = (string) => {
	[ "£", "$", "," ].forEach(i => string = string.split(i).join(""))
	return string
}

Given('Lucy wants to buy a property with the value of {string}', (propValue) => {
	propertyValue = +removeInvalidChar(propValue)
});
When('Lucy calculates the Stamp Duty Land Tax cost', () => {});
When('She is {string}', (condition) => {
	ftb = condition === FTB
	add = condition === additional
});
Then(`Lucy's Stamp Duty Land Tax quote is {string}`, (expectedSdlt) => {
	const actualSdlt = SdltCalculator(ftb, add, propertyValue)
	assert.strictEqual(actualSdlt, +removeInvalidChar(expectedSdlt))
});
