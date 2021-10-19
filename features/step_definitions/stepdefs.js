const { Given, When, Then, } = require('@cucumber/cucumber')
const assert = require('assert')
const SdltCalculator = require('../../src/business-logic/sdltCalculaor')
const FTB = 'is a first time buyer'

let propertyValue = 0;
let ftb = false;
let multiProps = false;

const invalidChar = [ "£", "$", "," ]

Given('Lucy wants to buy a property with the value of {string}', function (propValue) {
	invalidChar.forEach(i => propValue = propValue.split(i).join(""))
	propertyValue = +propValue
});
When('Lucy calculates the Stamp Duty Land Tax cost', function () {

});
When('She {string}', function (ftbCondition) {
	ftb = ftbCondition === FTB
});
When('She owns {int} property', function (nProps) {
	multiProps = nProps > 1
});
Then('Lucy has to pay {string} of stamp duty', function (expectedSdlt) {
	invalidChar.forEach(i => expectedSdlt = expectedSdlt.split(i).join(""))
	const actualSdlt = SdltCalculator(ftb, multiProps, propertyValue)
	assert.strictEqual(actualSdlt, +expectedSdlt)
});
