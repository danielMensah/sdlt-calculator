const standBuyer = [ 0, 0.02, 0.05, 0.05, 0.10, 0.12 ]
const firstBuyer = [ 0, 0, 0, 0.05, 0.10, 0.12 ]
const addBuyer = [ 0.03, 0.05, 0.08, 0.08, 0.13, 0.15 ]
const taxBand = [ 0, 125000, 250000, 300000, 925000, 1500000, Infinity ]
const firstBuyerThreshold = 500000
const addBuyerThreshold = 40000

/**
 * @param {boolean} ftb First Time Buyer
 * @param {boolean} additional User owns 1+ properties
 * @param {number} propValue Property value
 * @returns {number} Stamp Duty Land Tax to pay
 * */
function sdltCalculator(ftb, additional, propValue) {
	const buyerType = ftb ? (propValue > firstBuyerThreshold ? standBuyer : firstBuyer) : (additional ? addBuyer : standBuyer)
	let taxSum = 0
	let totalTax = 0

	for (let i = 0; i < taxBand.length; i++) {
		const loBand = taxBand[i]
		const upBand = taxBand[i + 1]

		if (((propValue - loBand) <= 0) || (buyerType === addBuyer && propValue < addBuyerThreshold)) {
			taxSum = 0
			continue
		} else if ((propValue - loBand) > 0 && (propValue - loBand) < (upBand - loBand)) {
			taxSum = +(propValue - loBand)
		} else {
			taxSum = (upBand - loBand)
		}

		totalTax += +(buyerType[i] * taxSum)
	}

	return +totalTax.toFixed(2)
}

module.exports = sdltCalculator
